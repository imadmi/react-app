import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Etudiants from '../etudiants.jpg';
import '../../App.css';


const Contact = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

  return (
    <div className="grid grid-cols-6 gap-10 items-center">
    <div className='col-span-1'>
    </div>
    <div className=" col-span-2 body my-4 p-6 bg-white rounded-md ">
      <h2 className="text-4xl  mb-10 mt-20  font-serif  font-extrabold  text-gray-600">
        Contact Us
      </h2>
      <form>
        <div className="mt-10">
          <label htmlFor="name" className="label absolute w-4/12 h-16  hover:trans block text-slate-500 hover:text-gray-700 hover:font-bold mb-2 ml-4 mt-2 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"

            className="input border rounded-md py-2 px-3 w-full "
          />
        </div>
        <div className="mt-10">
          <label htmlFor="email" className="label absolute w-4/12 h-16  hover:trans  block text-slate-500 hover:text-gray-700 hover:font-bold mb-2 ml-4 mt-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mt-10">
          <label htmlFor="message" className="label absolute w-4/12 h-40  hover:trans block text-slate-500 hover:text-gray-700 hover:font-bold mb-2 ml-4 mt-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="input border rounded-md py-2 px-3 w-full h-32 resize-none"
          ></textarea>
        </div>


        <div className="flex justify-center items-center mt-6">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={ratingValue}>
            <input
            className='appearance-none '
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star inline justify-center"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p className=' justify-center ml-2 '>
        {whichemoji(rating)}
      </p>
    </div>
         <div className='mt-6 flex justify-center items-center'>
            <button
            type="submit"
            className=" hover:bg-emerald-700 ease-in w-40 duration-300 shadow-lg shadow-gray-800 row-span-1 bg-emerald-900 text-white font-bold py-2 px-4 rounded-xl"
            >
            Submit
            </button>
        </div>
      </form>
    </div>
    <div className='col-span-2  '>
        <img className=' rounded-2xl shadow-md'
        src={Etudiants} alt="students img" >
        </img>
    </div>
    <div className='col-span-1'>
    </div>
    </div>
  );
};

function whichemoji(props) {
    if (props === 1) {
      return (
        <div>
          <p>☹️</p>
        </div>
      );
    } 
    else if (props === 2) {
      return (
        <div>
          <p>🙁</p>
        </div>
      );
    }
    else if (props === 3) {
      return (
        <div>
          <p>🙂</p>
        </div>
      );
    }
    else if (props === 4) {
      return (
        <div>
          <p>😊</p>
        </div>
      );
    }
    else if (props === 5) {
      return (
        <div>
          <p className='text-gray-700 font-serif'>🤩 Thank you</p>
        </div>
      );
    }
  }

export default Contact;
