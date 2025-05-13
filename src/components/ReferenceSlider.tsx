import React from "react";

const ReferenceSlider = () => {
  // 12 referans kutusu oluşturuyoruz
  const references = Array.from({ length: 12 }, (_, i) => `Reference ${i + 1}`);

  return (
    <div className="w-full border-t border-b bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 overflow-x-auto">
        {references.map((ref, index) => (
          <div
            key={index}
            className="min-w-[100px] px-4 py-2 text-sm text-gray-700 bg-white rounded-lg shadow hover:bg-green-100 cursor-pointer text-center flex-shrink-0"
          >
            {ref}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferenceSlider;
