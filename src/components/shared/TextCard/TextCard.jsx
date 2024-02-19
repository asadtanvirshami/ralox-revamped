import React from "react";

const TextCard = () => {
  return (
<div class="relative max-w-md mx-auto bg-gray-800 bg-opacity-30 rounded-lg overflow-hidden shadow-lg">

  <img src="logo.png" alt="Logo" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white p-1"/>

  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-200 text-base">
      This is a sample card with a charcoal background and low opacity. You
      can add any content here and the text will remain visible.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-700 bg-opacity-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2">
      #tag1
    </span>
    <span class="inline-block bg-gray-700 bg-opacity-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2">
      #tag2
    </span>
    <span class="inline-block bg-gray-700 bg-opacity-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
      #tag3
    </span>
  </div>
</div>


  );
};

export default TextCard;
