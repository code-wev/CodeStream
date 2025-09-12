import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";

import { signInWithGoogle } from "../../features/auth/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(dispatch); // helper call kore Redux e user set hobe
      navigate("/"); // login successful hole home e pathano
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };
  // try {
  //   const result = await signInWithPopup(auth, provider);
  //   dispatch(setUser(result.user)); // redux এ user save
  //   navigate("/");
  // } catch (error) {
  //   console.error("Google login failed:", error.message);
  // }

  return (
    <div
      className="min-h-[calc(100vh-86px)] relative flex justify-center items-center"
      style={{
        // backgroundImage: `url(${pic4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

      <div className="relative md:flex gap-4 p-6 rounded-2xl bg-[#2B2738]">
        <div className="relative">
          <img
            className="w-[450px] h-full rounded-xl object-cover"
            // src={pic1}
            alt=""
          />
        </div>

        <div className="card bg-[#2B2738] w-full max-w-sm py-10">
          <h1 className="text-4xl text-[#FFFEFF] ml-7 mt-2">
            Login Your Account
          </h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full mb-2"
                required
              />
              <label className="text-base text-white hover:text-gray-400">
                <Link to="/forgetPass" className="link">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-4 flex justify-center">
              <button className="btn bg-[#6E54B5] w-full border-none text-white hover:bg-purple-950">
                Login
              </button>
            </div>
          </form>

          <p className="text-white ml-6">
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </p>

          <div className="divider divider-warning py-4 text-[#D0CFD1]">
            OR register with
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="text-lg btn w-5/6 mx-auto bg-[#2B2738] text-[#D0CFD1] hover:text-black"
          >
            <FcGoogle className="" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
