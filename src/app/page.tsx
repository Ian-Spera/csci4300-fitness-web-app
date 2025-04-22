import connectMongoDB from '../config/mongodb';
import React, { useEffect } from 'react';
import foodBackground from "./assets/food_background.png";
import Image from 'next/image';
import { connect } from 'http2';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  connectMongoDB();
  return (
    <SessionProvider>
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

      {/* Grouped Pairs of Card and Image */}
      <div className="mt-8 flex flex-col gap-8">
        {/* Pair 1 */}
        <div className="flex items-center justify-center gap-[50px]">
          {/* Card 1 */}
          <div className="h-[300px] w-[350px] bg-white opacity-80 p-6 rounded-lg shadow-md text-center flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2 text-black">Hit your fitness goals!</h2>
            <p className="text-gray-700">
              Your diet is the foundation of any successful fitness journey. At DawgDiet, we
              make staying on track simple, fun, and actually effective—so you can fuel your
              goals without the guesswork. Whether you’re bulking, cutting, or just trying to
              eat better, we’ve got your back every step of the way.
            </p>
          </div>

          {/* Image 1 */}
          <div>
            <img
              src="/assets/FlexedArm.png"
              alt="Flexed Arm"
              className="w-[300px] h-[300px] rounded-full shadow-md"
            />
          </div>
        </div>

        {/* Pair 2 */}
        <div className="flex items-center justify-center gap-[50px]">
          {/* Card 2 */}
          <div className="h-[300px] w-[350px] bg-white opacity-80 p-6 rounded-md shadow-lg text-center flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2 text-black">Track your calories</h2>
            <p className="text-gray-700">
              Tracking your calories is a key step toward looking and feeling your best. With
              DawgDiet, logging meals is quick and easy—whether you’re in the dining hall or
              cooking at home.
            </p>
          </div>

          {/* Image 2 */}
          <div>
            <img
              src="/assets/ChickenWing.png"
              alt="Chicken Wing"
              className="w-[300px] h-[300px] rounded-full shadow-md"
            />
          </div>
        </div>

        {/* Pair 3 */}
        <div className="flex items-center justify-center gap-[50px]">
          {/* Card 3 */}
          <div className="h-[300px] w-[350px] bg-white opacity-80 p-6 rounded-md shadow-lg text-center flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2 text-black">Our Goal</h2>
            <p className="text-gray-700">
              At DawgDiet, we’re here to make living a healthy, balanced, and enjoyable
              lifestyle in college simple. Our mission is to build a supportive UGA community
              where students feel confident in their food choices—without the stress.
            </p>
          </div>

          {/* Image 3 */}
          <div>
            <img
              src="/assets/Group.png"
              alt="Group"
              className="w-[300px] h-[300px] rounded-full shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    </SessionProvider>
  );
}