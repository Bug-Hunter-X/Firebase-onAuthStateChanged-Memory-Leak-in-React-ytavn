const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User logged in with UID:', uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
  } 
});

// unsubscribe is never called, leading to a memory leak
// even if the component unmounts