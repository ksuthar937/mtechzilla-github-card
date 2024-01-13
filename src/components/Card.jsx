import React from "react";

const Card = ({ name, login, avatar, repos, gists, created }) => {
  const date = new Date(created);
  const createdAt =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  return (
    <>
      <div className="rounded border bg-gray-200 p-4 shadow-lg sm:w-96">
        <a
          href="https://github.com/ksuthar937"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={avatar}
            alt={login}
            className="mx-auto h-24 w-24 rounded-full"
          />
        </a>
        <h2 className="mt-2 text-center text-xl uppercase">{name}</h2>
        <p className="text-center text-gray-500">{login}</p>
        <ul className="mt-4 space-y-2">
          <div className="flex justify-center space-x-4">
            <li>
              <strong>Public Repos:</strong> {repos}
            </li>
            <li>
              <strong>Public Gists:</strong> {gists}
            </li>
          </div>
          <li className="text-center">
            <strong>Created At: </strong>
            {createdAt}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;
