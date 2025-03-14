import React from "react";

const BackgroundImage = () => {
  return (
    <div className="absolute top-0 left-0 size-full z-[-1]">
      <img
        src="https://www.shutterstock.com/image-vector/document-management-data-transfer-through-600nw-2471251661.jpg"
        className="object-cover size-full"
        alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;