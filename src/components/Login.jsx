import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../State/Slice/AuthSlice";
const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (emailInput === email && passInput === password) {
      alert("welcome");
      dispatch(login());
    } else {
      alert("email&password do not match");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput.length == 0 || passInput.length == 0) {
      setError(true);
    }
  };

  return (
    <div className="section min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-[3rem]">DealDash</h1>
      <div className="bg-main rounded-xl flex flex-col justify-center items-center p-10">
        <h1 className="text-xl font-bold">Log in</h1>
        <h4 className="text-sm mb-3"> please enter your Email & Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <span className="bg-black text-white">Email</span>
              <input
                type="text"
                placeholder="aa@bb.cc"
                className="input input-bordered bg-gray-300 w-full"
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </label>
            {error ? (
              <label className="text-red-500">Email can't be empty</label>
            ) : (
              ""
            )}

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input-group">
              <span className="bg-black text-white">Password</span>
              <input
                type="text"
                placeholder="1234"
                className="input input-bordered bg-gray-300 w-full"
                onChange={(e) => setPassInput(e.target.value)}
              />
            </label>

            {error ? (
              <label className="text-red-500">Password can't be empty</label>
            ) : (
              ""
            )}
            <button
              className="btn btn-wide mx-auto mt-10"
              onClick={handleClick}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
