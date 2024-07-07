import React, { useEffect, useRef, useState } from "react";
// import Home from "./ing";
import Home from "./Navbar";

// Define an interface for local storage items
interface LocalStorageItems {
  signUp: string | null;
  email: string | null;
  password: string | null;
  name: string | null;
}

// Define an interface for the props (even if empty for now)
interface SignInSignupProps {}

const SignInSignupWithLocalStorage: React.FC<SignInSignupProps> = (props) => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [showHome, setShowHome] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  // Initialize local storage items using the interface
  const localStorageItems: LocalStorageItems = {
    signUp: localStorage.getItem("signUp"),
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
    name: localStorage.getItem("name"),
  };

  useEffect(() => {
    if (localStorageItems.signUp) {
      setShowHome(true);
    }
    if (localStorageItems.email) {
      setShow(true);
    }
  }, [localStorageItems.signUp, localStorageItems.email]);

  const handleClick = () => {
    if (name.current?.value && email.current?.value && password.current?.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };
  const deleteAccount=()=>{ 
    localStorage.clear()
    window.location.reload()
}

  const handleSignIn = () => {
    if (email.current?.value === localStorageItems.email && password.current?.value === localStorageItems.password) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <div>
      {showHome ? (
        <Home />
      ) : (
        show ? (
          <div className="loginandsinguform">
            <h1>Hello {localStorageItems.name}</h1>
            <div className="input_space">
                <p>Enter your name:-</p>
              <input placeholder="Email" type="text" ref={email} />
            </div>
            <div className="input_space">
                <p>Enter your Password:-</p>
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <div className="login-and-signup-button">
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={deleteAccount} className="delete">Sign Up</button>
            </div>
          </div>
        ) : (
          <div className="loginandsinghform">
            <h1> Signup Form</h1>
            <div className="input_space">
                <p>Enter your Name:-</p>
              <input placeholder="Name" type="text" ref={name} />
            </div>
            <div className="input_space">
                <p>Enter your Email Id:-</p>
              <input placeholder="Email" type="text" ref={email} />
            </div>
            <div className="input_space">
                <p>Enter your Password:-</p>
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <div className="input_space">
                <p>Enter your Conform Password:-</p>
              <input placeholder="Conform Password" type="password"/>
            </div>
            <div className="login-and-signup-button">
            <button onClick={handleSignIn}>Login</button>
            <button onClick={handleClick}>Sign Up</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SignInSignupWithLocalStorage;
