import { Link } from "react-router-dom";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

import chatIconImg from "../assets/img/chaticon.png";
import { IconContext } from "react-icons";

const IndexPage = () => {
  return (
    <div className="max-w-2xl mx-auto h-screen bg-white text-black">
      <div className="flex justify-between mx-10 py-6">
        <div className="flex items-center space-x-2">
          <IconContext.Provider value={{ color: "blue", size: "14px" }}>
            <FaArrowRightArrowLeft />
          </IconContext.Provider>
          <a href="www.google.com" className="underline underline-offset-4 ">
            Select Language
          </a>
        </div>
        <div>
          {/* <IconContext.Provider value={{ color: "blue", size: "30px" }}>
            <RiRobot2Fill />
          </IconContext.Provider> */}
          <img src={chatIconImg} alt="" className="w-14" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-fit mx-8">
        <h1 className="text-3xl font-bold text-center mt-14 mb-4 uppercase">
          Welcome to Zalora
        </h1>
        <p className="mb-8 text-center">
          ZALORA: Your go-to for top fashion brands. Shop shirts, dresses,
          sneakers, and more. Over 120,000 products available. Shop now!
        </p>
        <div className="card w-full  shadow-lg shadow-blue-200 mx-auto py-4">
          <div className="card-body items-center text-center">
            <p className="card-title text-lg font-semibold mb-6 uppercase">
              Please log in or Create your account
            </p>

            <Link
              to="/login"
              className="btn btn-primary text-white  w-full  text-base mb-2"
            >
              Login
            </Link>

            <Link
              to="/create-account"
              className="btn btn-outline hover:btn-primary border-blue-900 w-full text-base"
            >
              Create Account
            </Link>
          </div>
        </div>
        <div className=" my-14 text-center ">
          <a href="www.google.com" className="underline underline-offset-4  ">
            About Zalora
          </a>
          <a
            href="www.google.com"
            className="underline underline-offset-4 ml-4 "
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
