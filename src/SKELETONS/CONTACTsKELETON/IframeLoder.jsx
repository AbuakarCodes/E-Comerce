import React from "react";

function IframeLoder() {
  return (
    <>
      <div className="flex items-center justify-center w-[50%] h-[100%] absolute">
        <div class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-10 flex justify-center items-center text-yellow-700"></div>
      </div>
    </>
  );
}

export default IframeLoder;
