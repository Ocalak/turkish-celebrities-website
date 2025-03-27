"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Celebrity {
  name: string;
  profession: string;
  platform: string;
  supportType: string;
  description: string;
  imageUrl: string;
}

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState<Celebrity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll simulate loading the data
    const fetchCelebrities = async () => {
      try {
        // In production, this would be a fetch call to an API endpoint
        // For development, we're importing the JSON directly
        const response = await fetch('/api/celebrities');
        const data = await response.json();
        setCelebrities(data.celebrities);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching celebrities:', error);
        setLoading(false);
      }
    };

    fetchCelebrities();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-6xl w-full">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Turkish Celebrities Supporting the Government</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Loading celebrities data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrities.map((celebrity, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500">Image placeholder</div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{celebrity.name}</h2>
                  <p className="text-gray-600 mb-2">{celebrity.profession}</p>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Platform:</span>
                    <span>{celebrity.platform}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Support Type:</span>
                    <span>{celebrity.supportType}</span>
                  </div>
                  <p className="mt-4">{celebrity.description}</p>
                  <Link 
                    href={`/celebrities/${encodeURIComponent(celebrity.name.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="mt-4 inline-block text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
