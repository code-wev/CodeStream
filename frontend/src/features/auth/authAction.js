import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { setUser } from "./authSlice";
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch(setUser(result.user));
  } catch (error) {
    console.error("Google Sign-In error:", error);
  }
};
