# The event loop task*
#
# There is one main thread which is the event loop.
# This event loop owns a message queue and processes it every time it has messages and it's idle (not busy).

# From the event loop you can spawn worker threads which can talk back to the event loop when finished by sending a message to the queue.
#
# The message queue is made up of events which can be made of serialised parameters
# and code which is meant to run only in the main thread (the callbacks).
#
# The worker threads can receive serialised parameters from the main thread. However,
# they are not meant to receive the callback code and they must not execute callbacks in their context.
# Callbacks are meant to run on the event loop thread only.
# Nonetheless, the worker thread can trigger the callbacks execution on the main thread by issuing a message to the queue.
#
# Create one worker thread that receives a number,
# waits for 5 seconds (the th)
# adds 1000 to it
# and then triggers a callback with the new number passed as parameter.
#
# From the main thread you can trigger the worker thread via an api similar to `addRandom(number: int, callback: Function)`. 
# This api must only be called from the main thread.
#
# You cannot use a language which is event loop based (e.g. javascript).
# You cannot use an already existing event loop api.
# You can use pre existing message queue.
# The event loop can be the main thread of the language.
#
# Your main loop should do the following:
#
# ```
# addRandom(6, function(newNumber){
#     print (newNumber)
# })
# addRandom(5, function(newNumber){
#     addRandom(newNumber, function(lastNumber){
#         print(lastNumber)
#     })
# })```


# Is the thread free ? then execute else put the block in the queue
# If the thread becomes free then execute whatever is on the queue (oldest event, first)
# Imagine this is the global window
class Global 
  def initialize(queue)
    @queue = queue
  end

  def add_number(num, &block)
    puts Thread.current
    new_num = num + 1000
    block.call(new_num)
  end

  def nextEvent(&block)
    @queue << block
  end

  # add set timeout function
end

# Make sure that when you manipulate the queue by adding or removing 
# events you are on the main event_loop_thread otherwise you can incurr in a race condition
class EventLoop
  def initialize(&block)
    puts "initialising"
    @queue = [block]
    @global = Global.new(@queue)
    @event_loop_thread = Thread.new {
      puts "in thread"
      while(true)
        block = @queue.pop
        if block
          puts (@global)
          block.call(@global)
        end
      end
    }
    @event_loop_thread.join #wait until this thread finishes, otherwise it would be killed if the process main thread finishes
  end
end


loop = EventLoop.new do | global |
  global.add_number(5) do | new_num |
    puts new_num
    global.nextEvent do
      Thread.current
      puts "I'm in another loop"
    end
  end
end
