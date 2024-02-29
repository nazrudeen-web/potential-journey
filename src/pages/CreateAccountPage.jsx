import React from "react";
import { Link } from "react-router-dom";

const CreateAccountPage = () => {
  return (
    <div className="max-w-2xl mx-auto h-screen bg-white text-black">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center my-16">
          Please Create Your Account
        </h1>
        <div className="card w-96 bg-base-100 shadow-xl shadow-blue-600 mx-auto py-4">
          <div className="card-body ">
            <form>
              <div>
                <label className="form-control w-full max-w-xs">
                  <span className=" label label-text mt-4">Enter Name*</span>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <span className=" label label-text">Mobile Number*</span>
                  <div className="flex space-x-4 ">
                    <select className="select select-bordered flex-auto w-24">
                      <option>+63</option>
                      <option>+83</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Enter Mobile Number"
                      className="input input-bordered w-full max-w-xs flex-2"
                    />
                  </div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <span className=" label label-text mt-4">
                    Enter Password*
                  </span>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
            </form>
            <Link to="/login" className="btn btn-neutral w-full my-2 text-base">
              Create Your Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
