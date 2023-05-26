import { useState, useEffect } from "react";
import {
  useDiditStatus,
  useConnectModal,
  useAuthenticationAdapter,
} from "didit-sdk";
import { disconnect } from "@wagmi/core";

const Home = () => {
  const { status, token } = useDiditStatus();
  const { openConnectModal } = useConnectModal();
  const { signOut } = useAuthenticationAdapter();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (status === "authenticated" && token) {
      getUserInfo();
    }
  }, [status, token]);

  const getUserInfo = async () => {
    const response = await fetch("https://apx.dev.didit.me/auth/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUserInfo(data);
  };

  const displayUserInfo = () => {
    if (userInfo) {
      const { name, family_name, gender, email, phone, country, picture } =
        userInfo;
      return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 mx-auto border-2 border-gray-300">
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6">
            <img
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 mx-auto md:mx-0"
              src={picture}
              alt="User's Profile Picture"
            />
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <p className="font-semibold">Name: </p>
                <p>{name}</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-semibold">Family Name: </p>
                <p>{family_name}</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-semibold">Gender: </p>
                <p>{gender}</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-semibold">Email: </p>
                <p>{email}</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-semibold">Phone: </p>
                <p>{phone}</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-semibold">Country: </p>
                <p>{country}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center py-2 mb-4">
        {status === "unauthenticated" ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={openConnectModal}
          >
            Connect with Didit
          </button>
        ) : (
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              signOut();
              disconnect();
            }}
          >
            Sign Out
          </button>
        )}
      </div>
      {status === "authenticated" && token && displayUserInfo()}
    </div>
  );
};

export default Home;
