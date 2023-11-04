import React from "react";

function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="group p-8 bg-dark rounded-3xl hover:bg-primary transition-all duration-500">
      <div className="text-primary group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className=" mt-2">{description}</p>
    </div>
  );
}

export default ExpertiseCard;
