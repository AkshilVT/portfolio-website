import { Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { GrClose } from "react-icons/gr";
import { RiStackFill } from "react-icons/ri";

function ProjectCard({ id, setId, number, content }: any) {
  return (
    <>
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Card className="w-full h-full flex flex-col justify-center items-center">
          <motion.div
            className="2xl:max-w-[400px] xl:max-w-[600px] max-w-[400px] lg:max-w-[600px] bg-white p-5"
            initial={{ x: -450 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
          >
            <div className="p-5 space-y-5">
              {" "}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "tween" }}
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl ">{content.name}</h1>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75, type: "tween" }}
              >
                <p className="text-lg text-gray-500">{content.description}</p>
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "tween" }}
                >
                  <h1 className="text-xl flex items-center ">
                    Tech Stack <RiStackFill className="ml-3" />
                  </h1>
                </motion.div>
                <div className="flex mt-5  justify-around text-gray-500">
                  {content.tech.map((item: any, i: number) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.2, type: "tween" }}
                      >
                        {item}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, width: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 1,
            ease: [0, 1.71, 3.2, 5.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className={(id == number ? "col-span-2 " : " ") + " hidden md:block "}
      >
        <Card
          variant={id == number ? "shadow" : "flat"}
          onClick={() => {
            setTimeout(() => {
              setId(number);
            }, 500);
          }}
          isHoverable={id == number ? false : true}
          isPressable={id == number ? false : true}
          className="min-w-max flex flex-row bg-transparent cursor-none hover:shadow-md"
        >
          <img
            src={content.img}
            className="max-w-[300px] p-5 object-contain backdrop-blur-3xl h-[350px] z-10 "
            onClick={() => (id == number ? setId(0) : setId(number))}
          />
          {id == number && (
            <motion.div
              className="2xl:max-w-[400px] xl:max-w-[600px] max-w-[400px] lg:max-w-[600px] bg-white p-5"
              initial={{ x: -450 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 3 }}
            >
              <div className="p-5 space-y-5">
                {" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "tween" }}
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-4xl ">{content.name}</h1>
                    <Button
                      className="min-w-min cursor-none"
                      onClick={() => {
                        setTimeout(() => {
                          setId(0);
                        }, 500);
                      }}
                    >
                      <GrClose />
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75, type: "tween" }}
                >
                  <p className="text-lg text-gray-500">{content.description}</p>
                </motion.div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "tween" }}
                  >
                    <h1 className="text-xl flex items-center ">
                      Tech Stack <RiStackFill className="ml-3" />
                    </h1>
                  </motion.div>
                  <div className="flex mt-5  justify-around text-gray-500">
                    {content.tech.map((item: any, i: number) => {
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.2, type: "tween" }}
                        >
                          {item}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </>
  );
}

export default ProjectCard;
