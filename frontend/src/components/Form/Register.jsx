import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/register.css"

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setRegistrationStatus("Passwords do not match");
      return;
    }

    const userData = {[username]:{
      email: email,
      password: password,
    }
  };

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setRegistrationStatus("Registration successful");
        // Clear form inputs
        setUsername("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
      } else {
        setRegistrationStatus("Registration failed");
      }
    } catch (error) {
      setRegistrationStatus("Error occurred during registration");
      console.error(error);
    }
  };

  setTimeout(()=>{window.location.href="/login"}, 10000)

  return (
    <div className="flex justify-center items-center mb-[5rem] mt-[4rem]">
    <div className="form-ctn">
      <form onSubmit={handleRegistration}>
        <div className="flex flex-col justify-center">
          <div className="mt-[1.5rem] flex flex-col justify-center items-center">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          </div>
          
          <label className="mt-[1.5rem]" htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="     Enter Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="mt-[1.5rem]" htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="     Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="mt-[1.5rem]" htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="     Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="mt-[1.5rem]" htmlFor="repeat-password">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="     Repeat Password"
            name="repeat-password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
          <p>{registrationStatus}</p>
          <p>
            By creating an account you agree to our <a href="#">Terms & Privacy</a>.
          </p>

          <div className="mt-[1.5rem] flex flex-col justify-center items-center">
          <button type="submit" className="form-btn">
            Register
          </button>
          </div>
        </div>

        <div className="mt-[1.5rem] pb-[3rem] flex flex-col items-center justify-center">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;