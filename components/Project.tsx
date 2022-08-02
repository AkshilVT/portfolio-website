import { Button, Card } from "@nextui-org/react";
import React from "react";
import { GrClose } from "react-icons/gr";
import { RiStackFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

function Project() {
  const [id, setId] = React.useState(0);
  return (
    <div className="w-full h-full p-5 mt-10 flex justify-around items-center">
      <section className="grid grid-cols-4 w-full gap-5">
        {/* <Card
          variant={id == 1 ? 'shadow' : 'flat'}
          onClick={() => {
            setTimeout(() => {
              setId(1);
            }, 500);
          }}
          isHoverable={id == 1 ? false : true}
          isPressable={id == 1 ? false : true}
          className={
            (id == 1
              ? 'col-span-3 '
              : 'bg-[url(https://source.unsplash.com/random/450x350)] ') +
            ' project-card'
          }
        >
          {id == 1 ? (
            <motion.div
              className='flex'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                default: {
                  duration: 3,
                  ease: [0, 1.71, 3.2, 5.01],
                },
                scale: {
                  type: 'spring',
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <img
                src='https://source.unsplash.com/random/450x350'
                onClick={() => setId(0)}
              />
              <div className='p-5 space-y-5'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    default: {
                      duration: 2,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                    scale: {
                      type: 'spring',
                      damping: 5,
                      stiffness: 20,
                      restDelta: 0.001,
                    },
                  }}
                  className='flex justify-between items-center'
                >
                  <h1 className='text-4xl '>Project 1</h1>
                  <Button
                    className='min-w-min cursor-none'
                    onClick={() => {
                      setTimeout(() => {
                        setId(0);
                      }, 500);
                    }}
                  >
                    <GrClose />
                  </Button>
                </motion.div>
                <p className='text-lg text-gray-500'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.
                </p>
                <div>
                  <h1 className='text-xl flex items-center '>
                    Tech Stack <RiStackFill className='ml-3' />
                  </h1>
                  <div className='flex mt-5 justify-around text-gray-500'>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        default: {
                          duration: 3,
                          ease: [0, 1.71, 3.2, 5.01],
                        },
                        scale: {
                          type: 'spring',
                          damping: 5,
                          stiffness: 100,
                          restDelta: 0.001,
                        },
                      }}
                    >
                      <SiNextdotjs className='w-10 h-10 hover:text-black' />
                    </motion.div>
                    <FaReact className='w-10 h-10 hover:text-[#00D1F2]' />
                    <SiTypescript className='w-10 h-10 hover:text-[#0074C2]' />
                    <FaHtml5 className='w-10 h-10 hover:text-[#DD4B25]' />
                    <FaCss3Alt className='w-10 h-10 hover:text-[#2449D8]' />
                    <SiTailwindcss className='w-10 h-10 hover:text-[#38BDF8]' />
                    <SiDjango className='w-10 h-10 hover:text-[#003B29]' />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className='text-xl backdrop-blur text-white p-5 transition-all ease-linear'
              initial={{ opacity: 0, scale: 0.5, visibility: 'hidden' }}
              animate={{ opacity: 1, scale: 1, visibility: 'visible' }}
              transition={{ delay: 3 }}
            >
              Project 1
            </motion.div>
          )}
        </Card> */}
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
          className={(id == 1 ? "col-span-3 " : " ") + "  "}
        >
          <Card
            variant={id == 1 ? "shadow" : "flat"}
            onClick={() => {
              setTimeout(() => {
                setId(1);
              }, 500);
            }}
            isHoverable={id == 1 ? false : true}
            isPressable={id == 1 ? false : true}
            className="min-w-max flex flex-row bg-transparent cursor-none"
          >
            <img
              src="https://source.unsplash.com/random/450x350"
              className="max-w-[450px] max-h-[350px] z-10"
              onClick={() => (id == 1 ? setId(0) : setId(1))}
            />
            {id == 1 && (
              <motion.div
                className="max-w-[500px] bg-white p-5"
                initial={{ x: -450 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
              >
                <div className="p-5 space-y-5">
                  <div className="flex justify-between items-center">
                    <h1 className="text-4xl ">Project 1</h1>
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
                  <p className="text-lg text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas ipsa corrupti deleniti esse debitis, reiciendis
                    numquam. Porro temporibus sed animi.
                  </p>
                  <div>
                    <h1 className="text-xl flex items-center ">
                      Tech Stack <RiStackFill className="ml-3" />
                    </h1>
                    <div className="flex mt-5 justify-around text-gray-500">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, type: "tween" }}
                      >
                        <SiNextdotjs className="w-10 h-10 hover:text-black" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "tween" }}
                      >
                        <FaReact className="w-10 h-10 hover:text-[#00D1F2]" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4, type: "tween" }}
                      >
                        <SiTypescript className="w-10 h-10 hover:text-[#0074C2]" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6, type: "tween" }}
                      >
                        <FaHtml5 className="w-10 h-10 hover:text-[#DD4B25]" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8, type: "tween" }}
                      >
                        <FaCss3Alt className="w-10 h-10 hover:text-[#2449D8]" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, type: "tween" }}
                      >
                        <SiTailwindcss className="w-10 h-10 hover:text-[#38BDF8]" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.2, type: "tween" }}
                      >
                        <SiDjango className="w-10 h-10 hover:text-[#003B29]" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </section>
    </div>
  );
}

export default Project;
