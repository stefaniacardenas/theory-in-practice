// What is a program?

// A program needs to do some simple things:
// - Allocate memory
// - Parse and execute (read and run commands)

// the JS engine that each browser implements, the V8 in chrome
// reads the JS that we write and changes into machine executable instructions
// the JS engine is composed of the memory heap and the call stack.

// The memory heap is where the memory allocation happens.
// Memory leaks happens by having unused memory laying around, filling up the memory heap.
// Imagine you have a lot of global variables that hold large amount of data and you are not using them.
// These variables need to be cleand up to prevent memory leaks.

// The call stack is where your code is read and executed.
// JS is a single threaded language that can be non blocking.
// Single threaded means it only has one call stack, which is the stack
// of functions that will be executed. The callstack is LIFO (last in, first out)
//
// Everything is synchronous, because functions are executed in order, one after the other
// from the callstack.
// This means that if I have function a(), function b(), and function c(),
// if function b() takes a very long time to get executed, then everything else
// is blocked waiting for function b() to finish.
// Luckily in JS we can do thing asynchronously.
// This is thanks to the JS Run-Time Environment.
// The JS Run-Time Environment is part of the browser,
// it includes the JS engine, ie V8, which includes memory heap and callstack.
// The JS Run-Time Environment also has Web APIs (dom, setTimeout, etc),
// and Event Loop and a callback queue.
// 
