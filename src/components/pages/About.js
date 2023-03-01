import Particle from './Particle.js';
import imgg from '../imgg.jpg';
import '../../App.css';
import { Link } from "react-router-dom"


export default function About() {

  return (
      <div className="grid lg:grid-cols-2">
       <div className='grid lg:grid-rows-2 lg:ml-10 mt-10 gap-10'>
        <div className='row-span-2'>
            <h1 className='mb-10 font-serif lg:text-8xl text-2xl font-extrabold ml-4 text-gray-600'>
            A Fun And Engaging Test of Memory App
            </h1>
            <p className='text-xl  text-gray-800'>
                Test your memory skills and cognitive abilities with our app, With ascending difficulty levels and easy-to-use controls, you can tailor the app to your specific needs and goals. 
                <br></br>Enjoy!
            </p>
        </div>
        <div className='hover:cursor-pointer row-span-1 justify-self-center lg:mr-40'>
        <Particle />
        <Link to="/react-app/About" >
            <button className='lg:absolute w-60 hover:bg-emerald-700 ease-in duration-300 shadow-lg shadow-gray-800 row-span-1 bg-emerald-900 lg:p-6 p-4 text-white font-serif text-xl lg:text-2xl font-bold rounded-full'>
                Start
            </button>
          </Link>
        </div>
       </div>
       <img  className="img brightness-75 row-span-3 hidden lg:block" src={imgg} alt="img"/>
    </div>
  );
}
