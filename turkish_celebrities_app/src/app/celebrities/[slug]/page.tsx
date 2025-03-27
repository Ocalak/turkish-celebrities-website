"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Celebrity {
  name: string;
  profession: string;
  platform: string;
  supportType: string;
  description: string;
  imageUrl: string;
}

export default function CelebrityDetail() {
  const params = useParams();
  const [celebrity, setCelebrity] = useState<Celebrity | null>(null);
  const [loading, setLoading] = useState(true);
  const slug = params?.slug as string;

  useEffect(() => {
    const fetchCelebrity = async () => {
      try {
        const response = await fetch('/api/celebrities');
        const data = await response.json();
        
        // Find the celebrity that matches the slug
        const foundCelebrity = data.celebrities.find((celeb: Celebrity) => 
          encodeURIComponent(celeb.name.toLowerCase().replace(/\s+/g, '-')) === slug
        );
        
        if (foundCelebrity) {
          setCelebrity(foundCelebrity);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching celebrity details:', error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchCelebrity();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <Link href="/celebrities" className="text-blue-500 hover:underline">
              &larr; Back to All Celebrities
            </Link>
          </div>
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Loading celebrity details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!celebrity) {
    return (
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <Link href="/celebrities" className="text-blue-500 hover:underline">
              &larr; Back to All Celebrities
            </Link>
          </div>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Celebrity Not Found</h1>
            <p className="text-xl">The celebrity you're looking for doesn't exist in our database.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <Link href="/celebrities" className="text-blue-500 hover:underline">
            &larr; Back to All Celebrities
          </Link>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500">Image placeholder for {celebrity.name}</div>
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{celebrity.name}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Professional Information</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Profession:</span> {celebrity.profession}</p>
                  <p><span className="font-medium">Platform:</span> {celebrity.platform}</p>
                  <p><span className="font-medium">Type of Support:</span> {celebrity.supportType}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Government Support</h2>
                <p className="text-gray-700">{celebrity.description}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Social Media Activity</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="italic text-gray-600">
                  This section would display recent social media posts from {celebrity.name} showing support for the Turkish government.
                  In a production environment, this would be populated with real data from Twitter and Instagram APIs.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Public Statements</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="italic text-gray-600">
                  This section would include quotes and public statements made by {celebrity.name} in support of the Turkish government.
                  In a production environment, this would be populated with verified statements from news sources and interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
