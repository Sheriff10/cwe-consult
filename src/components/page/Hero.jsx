import React from "react";
import { Button } from "../reusables";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <main className="py-24 min-h-screen  flex items-center justify-center">
      <div className="px-4 w-full max-w-4xl mx-auto">
        <p className="mb-2 font-semibold">
          Hey there, Welcome to{" "}
          <span className="text-primary">Crypto Wealth Embassy</span>
        </p>
        <h1 className=" text-3xl md:text-6xl md:leading-6xl font-SuprapowerSE font-bold ">
          <span>Your Guide to the Crypto Universe.</span>
          <span className="block mt-2">I Explore. I Innovate. I Connect.</span>
        </h1>
        <div className="mt-8">
          <p className="text-sm">
            Welcome to my digital haven. I'm Crypto Wealth Embassy, your go-to
            expert in blockchain, Solidity development, Marketing wizardry, and
            WP Writing . With a passion for transforming complexity into
            clarity, I'm here to guide you through the fascinating world of
            cryptocurrency.
          </p>
          <p className="text-sm mt-4">
            Join me on a journey through my crypto endeavors, discover my areas
            of expertise, and feel free to reach out anytime.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <ScrollLink to="contact" smooth={true}>
              <Button
                text={"Hire Me"}
                bgColor={"bg-[#a13523]"}
                hoverColor={"hover:bg-[#5c241c]"}
                textColor={"text-[#fff]"}
              />
            </ScrollLink>
            <ScrollLink to="about" smooth={true}>
              <Button
                text={"About Me"}
                bgColor={"bg-[#fff]"}
                hoverColor={"hover:bg-[#e5e5e5]"}
                textColor={"text-[#a13523]"}
              />
            </ScrollLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
