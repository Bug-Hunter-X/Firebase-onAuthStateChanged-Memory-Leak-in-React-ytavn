import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Import your firebase auth instance

function MyComponent() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user.uid);
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>This component uses onAuthStateChanged correctly</div>
  );
}

export default MyComponent;