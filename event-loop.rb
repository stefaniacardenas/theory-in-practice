# The event loop task*
#
# There is one main thread which is the event loop.
# This event loop owns a message queue and processes it every time it has messages and its idle.
#
# From the event loop you can spawn worker threads which can talk back to the event loop when finished by sending a message to the queue.
#
# The message queue is made up of events which can be made of serialised parameters
# and code which is meant to run only in the main thread (the callbacks).
#
# The worker threads can receive serialised parameters from the main thread. However, they are not meant to receive the callback code and they must not execute callbacks in their context.
# Callbacks are meant to run on the event loop thread only.
# Nonetheless, the worker thread can trigger the callbacks execution on the main thread by issuing a message to the queue.
#
# Create one worker thread that receives a number,
# waits for 5 seconds,
# adds 1000 to it
# and then triggers a callback with the new number passed as parameter.
#
# From the main thread you can trigger the worker thread via an api similar to `addRandom(number: int, callback: Function)`. This api must only be called from the main thread.
#
# You cannot use a language which is event loop based (e.g. javascript).
# You cannot use an already existing event loop api.
# You can use pre existing message queue.
# The event loop can be the main thread of the language.
#
# Your main loop should do the following:
#
# ```addRandom(6, function(newNumber){
#     print (newNumber)
# })
# addRandom(5, function(newNumber){
#     addRandom(newNumber, function(lastNumber){
#         print(lastNumber)
#     })
# })```

class EventLoop
  def initialize(size)
    @size = size
    @events = Queue.new
    @message_queue = Array.new(@size) do
      Thread.new do
        catch(:exit) do
          loop do
            # take the last event added and remove it from the queue
            # Assign the elements to event (fn to execute) and args (the arguments)
            event, args = @events.pop
            # Now call the fn with it's arguments
            event.call(*args)
            # Stop the loop when there aren't any more events
            break if @events.size == 0
          end
        end
      end
    end
  end

  # schedule event processing
  def schedule(*args, &block)
    @events << [block, args]
  end

  # run threads and perform jobs from queue
  def execute_events!
    @size.times do
      schedule { throw :exit }
    end
    @message_queue.map(&:join)
  end
end

def add_random(num, callback=nil)
  sleep(5)
  new_number = num + 1000
  puts new_number
  if callback
    callback.call(new_number)
  end
end

# an instance of EventLoop with 5 threads
event_loop = EventLoop.new(5)

# add 5 events to event_loop
5.times do |i|
  event_loop.schedule do
    add_random(rand(10), method(:add_random))
  end
end

# run all threads
event_loop.execute_events!
