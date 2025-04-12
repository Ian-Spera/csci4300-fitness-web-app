import connectMongoDB from '../../mongodb';
import React, { useEffect } from 'react';

export default function Home() {
  connectMongoDB();
  return (
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">Home</h1>
              <p className="text-lg mb-6">This is the home page for an unauthenticated user. </p>
              <button></button>
              </div>
  )
}

