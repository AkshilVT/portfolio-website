import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { Card, Tooltip } from "@nextui-org/react";
import { TbCopy } from "react-icons/tb";
import { PopupButton } from "react-calendly";

function Contact({ loading, setLoading }: any) {
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex flex-col space-y-3 justify-center items-center h-screen cursor-wait">
          <div className="w-10 h-10 border-r-2 animate-spin border-r-black rounded-full" />
          <p className="text-xl">Loading</p>
        </div>
      ) : (
        <div
          className="w-full h-full p-5 mt-10 grid grid-cols-1 lg:grid-cols-2 bg-gray-100 items-center"
          id="wid"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1,
            }}
          >
            <Player
              autoplay
              loop
              src="contact.json"
              className="w-full"
            ></Player>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1,
            }}
          >
            <Card className="flex flex-col ">
              <div className="flex flex-row justify-between w-full p-5 items-center space-x-10">
                <h1>Email: </h1>
                <Card
                  isHoverable
                  isPressable
                  variant="flat"
                  className=" cursor-none flex flex-row justify-between items-center"
                >
                  <Tooltip placement="top" rounded content="Click to open mail">
                    <a
                      href="mailto: akshilvthumar@gmail.com"
                      className="w-full p-5 max-w-[180px] md:max-w-none lg:max-w-[300px] truncate xl:max-w-none"
                    >
                      akshilvthumar@gmail.com
                    </a>
                  </Tooltip>
                  <Tooltip placement="top" rounded content="Copy">
                    <Card
                      isHoverable
                      isPressable
                      className="w-min p-4 m-1 mr-3 cursor-none"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "akshilvthumar@gmail.com"
                        );
                      }}
                    >
                      <TbCopy />
                    </Card>
                  </Tooltip>
                </Card>
              </div>
              <div className="flex flex-row justify-between w-full p-5 items-center space-x-6">
                <h1>Phone: </h1>
                <Card
                  isHoverable
                  isPressable
                  variant="flat"
                  className=" cursor-none flex flex-row justify-between items-center"
                >
                  <Tooltip placement="top" rounded content="Click to call">
                    <a href="tel: +91-8799-4878-58" className="w-full p-5">
                      +91 &nbsp; 8799487858
                    </a>
                  </Tooltip>
                  <Tooltip placement="top" rounded content="Copy">
                    <Card
                      isHoverable
                      isPressable
                      className="w-min p-4 m-1 mr-3 cursor-none"
                      onClick={() => {
                        navigator.clipboard.writeText("8799487858");
                      }}
                    >
                      <TbCopy />
                    </Card>
                  </Tooltip>
                </Card>
              </div>
              <div className="flex flex-row justify-between w-full p-5 items-center space-x-7">
                <h1>LinkedIn: </h1>
                <Card
                  isHoverable
                  isPressable
                  variant="flat"
                  className=" cursor-none flex flex-row justify-between items-center"
                >
                  <Tooltip
                    placement="top"
                    rounded
                    content="Click to open LinkedIn"
                  >
                    <a
                      href="https://www.linkedin.com/in/akshilthumar/"
                      className="w-full max-w-[180px] md:max-w-none lg:max-w-[300px] truncate xl:max-w-none p-5"
                    >
                      https://www.linkedin.com/in/akshilthumar/
                    </a>
                  </Tooltip>
                  <Tooltip placement="top" rounded content="Copy">
                    <Card
                      isHoverable
                      isPressable
                      className="w-min p-4 m-1 mr-3 cursor-none"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "https://www.linkedin.com/in/akshilthumar/"
                        );
                      }}
                    >
                      <TbCopy />
                    </Card>
                  </Tooltip>
                </Card>
              </div>
            </Card>
          </motion.div>{" "}
          <PopupButton
            url="https://calendly.com/your_scheduling_page"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("wid")}
            text="Click here to schedule!"
          />
        </div>
      )}
    </>
  );
}

export default Contact;
