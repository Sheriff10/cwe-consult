import React from "react";

function TitleTag({ title }) {
  return (
    <div className="px-4 py-1.5 text-base bg-lightGray text-black font-medium inline-block rounded mb-4">
      {title}
    </div>
  );
}

export default TitleTag;
