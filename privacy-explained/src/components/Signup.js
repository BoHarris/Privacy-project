import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/privacypolicy");
    } catch (error) {
      console.error("Error signing up: ", error);
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
