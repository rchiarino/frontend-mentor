import React from "react";
import Card from "./components/Card";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card>
        {/* card header */}
        <div className="flex justify-between">
          <div className="flex mb-7">
            <h2 className="font-bold text-2xl">Notifications</h2>
            <span className="bg-primaryBlue rounded-md ml-2 px-3 py-1 text-white">
              3
            </span>
          </div>
          <a href="#" className="text-sm text-darkGrayishBlue">
            Mark all as read
          </a>
        </div>
        <Notification
          user={{
            name: "Mark Webber",
            image: "avatar-mark-webber.webp",
            time: "1m ago",
          }}
          message="reacted to your recent post"
          highlight="My first tournament today!"
          isNew={true}
        />

        <Notification
          user={{
            name: "Angela Gray",
            image: "avatar-angela-gray.webp",
            time: "5m ago",
          }}
          message="followed you"
          isNew={true}
        />

        <Notification
          user={{
            name: "Jacob Thompson",
            image: "avatar-jacob-thompson.webp",
            time: "1day ago",
          }}
          message="has joined your group"
          link={"Chess Club"}
          isNew={true}
        />
      </Card>
    </div>
  );
}

export default App;
