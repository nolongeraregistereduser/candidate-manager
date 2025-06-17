"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/candidates');
  }, [router]);
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <h1 className="text-2xl font-bold text-gray-800 mt-4">Loading...</h1>
        <p className="mt-2 text-gray-600">Redirecting to candidates list</p>
      </div>
    </div>
  );
}
