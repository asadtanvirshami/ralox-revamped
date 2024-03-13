import React from "react";
import Modal from "../Modal/Modal";

const ChatModal = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Modal
        mode={"light"}
        title={"Chat Support"}
        onClick={() => setOpen((p) => !p)}
        Close={() => setOpen((p) => !p)}
        show={open}
        size={"lg"}
      >
       
          <textarea
            className="w-full border bg-transparent rounded-md p-2 mb-4"
            rows="4"
            placeholder="Type your message..."
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
     
      </Modal>
    </React.Fragment>
  );
};

export default ChatModal;
