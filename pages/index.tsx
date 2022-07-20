import type { NextPage } from 'next';
import CustomCursor from '../components/CustomCursor.js';
import Scene from '../components/scene';

const Home: NextPage = () => {
  return (
    <div className='w-full'>
      <CustomCursor />
      <Scene />
    </div>
  );
};

export default Home;
