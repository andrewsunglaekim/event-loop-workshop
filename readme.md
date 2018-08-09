# The Event Loop, promises and async/await
Have you ever wondered how Javascript, a single threaded language, executes code asynchronously? Come to this workshop to find out. If you're not interested in any of theory, we'll also be implementing some promises with "thens" and async/await.

## Learning objectives
- Define Javascript as a single threaded language within the browser
- Explain how javascript functions "run to completion"
- Define "execution context"
- Determine the composition and execution order of the javascript call stack
- Identify the problem that asynchronous program execution solves
- Describe the concurrency model of JS based on the "event loop"
- Identify how Javascript handles asynchronous behavior despite being single threaded
- Identify the differences between tasks and micro tasks.
- Leverage promises to handle asynchronous behavior
- Leverage async/await as wrappers for promises

## Framing
Asynchronous programming in Javascript can be a pretty daunting hurdle to overcome. When we debug async code, problems arise where it can be difficult to even pinpoint where the problem is happening. This workshop is designed to establish a base level understanding of how, and maybe more importantly, **when** javascript code executes within a code base. We'll also write cleaner async functions with the new `async`/`await` syntax.

## Javascript is single threaded
In computer programming, single-threading is the processing of one command at a time. JS is a programming language that is single threaded. Javascript code, in its single threaded nature must "run to completion" within an execution context.

Take this code for example:

```javascript
const number = 5 + 5;
console.log(number);
```

We could say with a pretty high degree of certainty that this code would never pause in the middle of it's evaluation.

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
console.log(number)
```

In this snippet, there are two execution contexts that are used. We're already aware of the global execution context of just running this script. The other execution context is created on the invocation of the `add` function with respect to this line:

```javascript
const number = add(5, 5);
```

## Call Stack
The call stack is a collection of execution contexts.

> The easiest way to conceptualize the call stack and various other components of JS execution is visualizations. Throughout this workshop, there will be visuals to help describe the various mechanisms of JS execution. Assume the snippets are named `main.js`

Let's take another look at how the following code is executed within the call stack:

```javascript
const number = 5 + 5;
console.log(number);
```



Like we stated before, this snippet
###  JS single threaded but async

### js promises
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
