// FloatingButtons.js

import React from "react";

import ReactWhatsapp from "react-whatsapp";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end space-y-4">
      <button className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        <IoChatbubbleEllipsesSharp size={28} />
      </button>
      <button className="px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-600">
        <ReactWhatsapp
          number="03361818434"
          message="Chat with Algorim Support Team"
        >
          <FaWhatsapp size={29} />
        </ReactWhatsapp>
      </button>
    </div>
  );
};

export default FloatingButtons;
