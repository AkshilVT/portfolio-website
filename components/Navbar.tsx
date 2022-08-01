import { Button, Card } from '@nextui-org/react';
import router from 'next/router';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
function Navbar({ setActive, active }: any) {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <>
      <Button
        className='lg:hidden nav-link z-10 min-w-min'
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <GiHamburgerMenu />
      </Button>
      {showNav && (
        <>
          <div className='lg:hidden p-5 fixed inset-10 rounded-lg backdrop-blur bg-white/40 z-50 border-2 border-white/20 shadow-xl duration-100 transition-all'>
            <GrClose
              className='float-right'
              onClick={() => {
                setShowNav(false);
              }}
            />
            <div className='flex flex-col space-y-5 justify-center text-black items-center h-full'>
              <h1 className='text-4xl'>Navigate to</h1>
              <p
                onClick={() => {
                  if (active != 0) {
                    setActive(0);
                    setShowNav(false);
                  }
                }}
                className={
                  'p-2 text-2xl ' + (active == 0 ? 'border-b border-black' : '')
                }
              >
                About me
              </p>
              <p
                onClick={() => {
                  if (active != 1) {
                    setShowNav(false);
                    setActive(1);
                  }
                }}
                className={
                  'p-2 text-2xl ' + (active == 1 ? 'border-b border-black' : '')
                }
              >
                Project & Tech Stack
              </p>
              <p
                onClick={() => {
                  if (active != 2) {
                    setShowNav(false);
                    setActive(2);
                  }
                }}
                className={
                  'p-2 text-2xl ' + (active == 2 ? 'border-b border-black' : '')
                }
              >
                Contact me
              </p>
              <p
                onClick={() => {
                  if (active != 3) {
                    setShowNav(false);
                    setActive(3);
                  }
                }}
                className={
                  'p-2 text-2xl ' + (active == 3 ? 'border-b border-black' : '')
                }
              >
                Education & Experience
              </p>
              <p
                className={
                  'p-2 text-xl text-black/50 ' +
                  (active == 4 ? 'border-b border-black' : '')
                }
              >
                <span className=' line-through'>Playground</span> (available in
                Desktop)
              </p>
            </div>
          </div>
        </>
      )}
      <nav className='w-full hidden lg:flex justify-center space-x-5'>
        <div className='w-full'>
          <Card
            isPressable
            isHoverable={active != 0 ? true : false}
            variant={active == 0 ? 'shadow' : 'flat'}
            className='nav-link '
            onClick={() => setActive(0)}
          >
            <a href='#' className='cursor-none'>
              About Me
            </a>
          </Card>
        </div>
        <div className='w-full'>
          <Card
            isHoverable={active != 1 ? true : false}
            isPressable
            variant={active == 1 ? 'shadow' : 'flat'}
            className='nav-link '
            onClick={() => setActive(1)}
          >
            <a href='#' className='cursor-none'>
              Projects & Tech Stack
            </a>
          </Card>
        </div>
        <div className='w-full'>
          <Card
            isHoverable={active != 3 ? true : false}
            isPressable
            variant={active == 3 ? 'shadow' : 'flat'}
            className='nav-link '
            onClick={() => setActive(3)}
          >
            <a href='#' className='cursor-none'>
              Contact Me
            </a>
          </Card>
        </div>
        <div className='w-full'>
          <Card
            isHoverable={active != 2 ? true : false}
            isPressable
            variant={active == 2 ? 'shadow' : 'flat'}
            className='nav-link '
            onClick={() => setActive(2)}
          >
            <a href='#' className='cursor-none'>
              Education & Experience
            </a>
          </Card>
        </div>
        <div className='w-full'>
          <Card
            isHoverable={active != 4 ? true : false}
            isPressable
            variant={active == 4 ? 'shadow' : 'bordered'}
            className='nav-link bg-gray-100'
            onClick={() => {
              setActive(4);
              router.push('/scene');
            }}
          >
            <a href='#' className='cursor-none'>
              Playground
            </a>
          </Card>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
