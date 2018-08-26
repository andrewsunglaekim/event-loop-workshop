# The Event Loop, promises and async/await

## Learning objectives
- Define Javascript as a single threaded language within the browser
- Explain how javascript functions "run to completion"
- Define "execution context"
- Determine the composition and execution order of the javascript call stack
- Identify the problem that asynchronous program execution solves
- Describe the concurrency model of JS based on the "event loop"
- Give an example of how the message queue is leveraged in javascript.
- Identify the differences between tasks and micro tasks.
- Leverage promises to handle asynchronous behavior
- Leverage async/await as wrappers for promises

## Framing
Asynchronous programming in Javascript can be a pretty daunting hurdle to overcome. When we write/debug async code, problems arise where it can be difficult to even pinpoint where the problem is happening. This workshop is designed to establish a base level understanding of how, and maybe more importantly, **when** javascript code executes within a code base. We'll also write cleaner async functions with the new `async`/`await` syntax.

## Javascript is single threaded
In computer programming, single-threading is the processing of one command at a time. JS is a programming language that is single threaded. Javascript code, in its single threaded nature must "run to completion" within an execution context.

In order to understand the complex nature of asynch program execution, we need to establish a strong foundation in understanding of how JS's synchronous program execution works.

Take this code for example:

```javascript
const number = 5 + 5;
console.log(number);
```

Pretty simple javascript. A simple arithmetic method stored into a variable and then subsequently logged.

We could say with a pretty high degree of certainty that this code would never pause in the middle of it's evaluation. Let's come back to this code when we know a bit more a execution context and the call stack.

## execution context
Execution context is defined as the environment in which JavaScript code is executed. The JavaScript engine creates a global execution context before it starts to execute any code(think `main.js` or `script.js`). From that point on, a new execution context gets created every time a function is executed, as the engine parses through your code.

The global execution context is nothing special. It’s just like any other execution context, except that it gets created by default.

In the above example, code is only getting executed within the global execution context.

Let's take a look at another snippet to examine function execution context:

```javascript
function add(num1, num2) {
  return num1 + num2;
}

const number = add(5, 5);
console.log(number);
```

In this snippet, there are three execution contexts that are used. We're already aware of the global execution context of just running this script. The other execution contexts as created on the invocation of the `add` function and `.log` method with respect to these line:

```javascript
const number = add(5, 5);
console.log(number);
```

## Call Stack
The call stack is a collection of execution contexts.

> The easiest way to conceptualize the call stack and various other components of JS execution is visualizations. Throughout this workshop, there will be visuals to help describe the various mechanisms of JS execution. Assume the snippets are named `main.js`. For clarity, we'll show global context here in this first example, but subsequent examples won't include the global execution context of `main.js`. Additionally, many of them following this one will be hidden within details of a summary, so make sure to click the triangles for visualization.

Let's take another look at how the following code is executed within the call stack:

```javascript
const number = 5 + 5;
console.log(number);
```

This code happens in milliseconds, but let's get granular and dissect how each part of this code executes. The script(`main.js`) starts and opens the global execution context:

<img src="images/el-mainJS.png"/>

Then the add(`+`) method starts:

<img src="images/el-add.png"/>

Add (`+`) method finishes:

<img src="images/el-mainJS.png"/>

`console.log` starts:

<img src="images/el-log.png"/>

`console.log` finishes:

<img src="images/el-mainJS.png"/>

Script `main.js` and program finishes:

<img src="images/el-empty.png"/>

> For future visualizations, we'll assume the global execution context of `main.js`

Through these visualizations we can start to see the single threaded nature of javascript.

### The Problem

The problem with single threaded programming is that some processes take a long time. Let's take a look at this [code pen example](https://codepen.io/andrewsunglaekim/pen/RYPLmz)

Now this particular process took an... infinity amount of time. In that time, we couldn't click the button again the gif stopped animating. But we, as developers, constantly need to use things that take an unknown or large amount of time. In the era of UI, even 500ms is far too long to block anything.

We'll dig into why this gif froze later in the workshop.

### The Solution

Asynchronous programming. With async programming, we can delegate a `task` to be completed later. Go do this thing, and then when you're done with the thing, we'll tell you what to do next.

### [Concurrency model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
We can do asynchronous behavior within javascript because of the "event loop". You can think of the "event loop" as an infinite loop that waits until code needs to be run.

Straight from the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Event_loop)

"The event loop got its name because of how it's usually implemented, which usually resembles:"

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

An easy way to visualize the event loop is a simple browser event listener.

Let's look at a simple button click event. `index.html`:

```html
<button id="demo">Click Me!!</button>
```

`script.js`:
```js
const button = document.getElementById('demo');
button.addEventListener(() => {
  console.log('button clicked!')
})
```

We can examine this code now in the lense of the call stack.

`document.getElementById('demo')` is called:

<img src="images/el-getELID.png"/>

`document.getElementById('demo')` is finished:

<img src="images/el-empty.png"/>

`button.addEventListener()` is called:

<img src="images/el-addEvtList.png"/>

`button.addEventListener()` is finished:

<img src="images/el-empty.png"/>

And the program is finished. Or is it? What happens if a user clicks my button. How is that callback being executed? The event loop is a constantly running thread. It needs a place to queue up tasks to do. Enter the message queue

### [Message queue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Queue)

It's basically just a list of tasks that need to be processed by the JS thread. MDN really says it best:

> At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

A user clicks our button. Let's visualize the call stack now with a message queue assuming our `script.js` has already run.



###  JS single threaded but async

### js promises
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
