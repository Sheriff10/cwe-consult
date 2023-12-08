import React from "react";
import {
  FaBitcoin,
  FaCode,
  FaDollarSign,
  FaBullseye,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";
import { ExpertiseCard, TitleTag } from "../reusables";

function Expertise() {
  const expertiseList = [
    {
      icon: <FaBitcoin size={58} />,
      title: "Crypto Trader",
      description: "Expert in cryptocurrency trading strategies.",
    },
    {
      icon: <FaCode size={58} />,
      title: "Solidity Developer",
      description: "Proficient in blockchain development using Solidity.",
    },
    {
      icon: <FaSearch size={58} />,
      title: "Project Advisor",
      description: "Skilled in providing project guidance and overseeing project management.",
    },
    {
      icon: <FaBullseye size={58} />,
      title: "Promoter",
      description: "Skilled in cryptocurrency promotion strategies.",
    },
    {
      icon: <FaFileAlt size={58} />,
      title: "WP Writer",
      description: "Experienced writer in the WordPress ecosystem.",
    },
  ];

  return (
    <section className="bg-neutral-950 py-16" id="expertise">
      <div className="container mx-auto px-4">
        <TitleTag title={"Expertise"} />
        <p className="text-lg font-semibold  mb-10">My areas of Expertise</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseList.map((expertise, index) => (
            <ExpertiseCard
              key={index}
              icon={expertise.icon}
              title={expertise.title}
              description={expertise.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
