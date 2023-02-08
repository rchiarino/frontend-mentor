import React from "react";

function Notification({ user, message, isNew, highlight, link }) {
  return (
    <div
      className={`flex flex-row items-center px-5 py-[15px] rounded-md mb-2.5
      ${isNew ? `bg-veryLightGrayBlue` : null}`}
    >
      <img
        src={`/assets/images/${user.image}`}
        className="rounded-full mx-[15px] w-[45px] h-[45px]"
        alt={`${user.name} avatar`}
      />

      <div className="flex flex-col">
        <div className="flex">
          <p className="text-darkGrayishBlue">
            <strong className="pr-2.5 text-black">{user.name}</strong>
            {message}
            {highlight ? <strong className="pl-2">{highlight}</strong> : null}
            {link ? (
              <a href="#">
                <strong className="pl-2 text-primaryBlue">{link}</strong>
              </a>
            ) : null}
            {isNew ? (
              <span className="bg-primaryRed w-2 h-2 rounded-full mx-2 inline-block align-middle" />
            ) : null}
          </p>
        </div>
        <small className="text-grayishBlue">{user.time}</small>
      </div>
    </div>
  );
}

export default Notification;
