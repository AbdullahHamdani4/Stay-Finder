import React from 'react'

 const LoadingScreen=()=> {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-gray-300 border-t-black rounded-full" />
    </div>
  );
}

export default LoadingScreen