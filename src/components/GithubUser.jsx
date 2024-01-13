import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import githubSvg from "../assets/github.svg";
import toast from "react-hot-toast";

const GithubUser = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const data = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(data.data);
    } catch (error) {
      console.log(error);
      toast.error("User Does Not Exist");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  // console.log(userData);
  // console.log(user);

  return (
    <div className="flex flex-col items-center py-24 sm:px-24">
      <div className="mb-4 flex justify-center gap-2">
        <img src={githubSvg} alt="githubLogo" className="w-10" />
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            className="rounded border p-2"
            placeholder="Github username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button
            type="submit"
            className="hover:pointer ml-2 rounded bg-green-500 p-2 uppercase text-white"
          >
            Submit
          </button>
        </form>
      </div>
      {userData && (
        <Card
          name={userData.name}
          login={userData.login}
          avatar={userData.avatar_url}
          repos={userData.public_repos}
          gists={userData.public_gists}
          created={userData.created_at}
        />
      )}
    </div>
  );
};

export default GithubUser;
