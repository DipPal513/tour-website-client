import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../firebase/firebase.init";
const useFirebase = () => {
  const [isLoading, setIsloading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  initializeAuth();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsloading(true);
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
  }, [auth]);
  function logOut() {
    signOut(auth)
      .then((res) => setUser({}))
      .catch((err) => setError(err));
  }
  return {
    signInUsingGoogle,
    setUser,
    user,
    setError,
    error,
    logOut,
    isLoading,
    setIsloading,
  };
};

export default useFirebase;
