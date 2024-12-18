# Firebase onAuthStateChanged Memory Leak in React

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` within React components: forgetting to unsubscribe from the listener, leading to memory leaks.

## The Problem

The `onAuthStateChanged` function returns an unsubscribe function that *must* be called when the component unmounts. Failure to do so results in the listener continuing to run even after the component is removed from the DOM, consuming memory and potentially causing performance issues.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Observe the console logs indicating the listener is still active even after the component unmounts. Note the memory leak.

## Solution

The provided `bugSolution.js` demonstrates the correct way to handle the unsubscribe function using the `useEffect` hook. The unsubscribe function is called in the cleanup function of the `useEffect` hook, ensuring that the listener is detached when the component is unmounted.