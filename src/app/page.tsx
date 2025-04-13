import connectMongoDB from '../../mongodb';
import React, { useEffect } from 'react';
import foodBackground from "./assets/food_background.png";
import Image from 'next/image';



export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/assets/food_background.png')",
        

      }}
    >
      
      <div className="flex justify-center">
        <div className="bg-red-600 text-white opacity-95 text-center rounded-md py-4 px-6 max-w-xl w-full shadow-lg">
          <h1 className="text-2xl font-bold">
            Sign up now to start reaching your health goals!
          </h1>
        </div>
      </div>



      {/* Main Content Cards and Images */} 
      <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white opacity-80 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-black">Hit your fitness goals!</h2>
          <p className="text-gray-700">
          Your diet is the foundation of any successful fitness journey. At DawgDiet, we make staying on track simple, fun, and actually effective—so you can fuel your goals without the guesswork. Whether you’re bulking, cutting, or just trying to eat better, we’ve got your back every step of the way.
          </p>

        </div>



        {/* Image 1 */}
        <div>
          <img
            src="/assets/FlexedArm.png"
            alt="Hover Display"
            className="w-full h-auto rounded-full shadow-md"
          >
          </img>

        </div>



        {/* Image 2 */}
        <div>
          <img
            src="/assets/ChickenWing.png"
            alt="Hover Display"
            className="w-full h-auto rounded-full shadow-md"
          >
          </img>

        </div>



        {/* Card 2 */}
        <div className="bg-white opacity-80 p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-black text-center">Track your calories</h2>
          <p className="text-gray-700 text-center">
          Tracking your calories is a key step toward looking and feeling your best. With DawgDiet, logging meals is quick and easy—whether you’re in the dining hall or cooking at home.
          </p>
        </div>



        {/* Card 3 */}
        <div className="bg-white opacity-80 p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-black text-center">Our Goal</h2>
          <p className="text-gray-700 text-center">
          At DawgDiet, we’re here to make living a healthy, balanced, and enjoyable lifestyle in college simple. Our mission is to build a supportive UGA community where students feel confident in their food choices—without the stress.
          </p>
        </div>
        


        {/* Image 3 */}
        <div>
          <img
            src="/assets/Group.png"
            alt="Hover Display"
            className="w-full h-auto rounded-full shadow-md"
          >
          </img>
        </div>
        


      </div>
    </div>
  );
}

