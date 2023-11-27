import React from "react";
import SWE from "../../assets/images/swe.jpg";
import { Button, TitleTag } from "../reusables";
import { FaTelegram, FaTwitter } from "react-icons/fa";

function About() {
  const telegramUrl = "https://t.me/CWEmbassy";
  const twitterUrl = "https://twitter.com/CWEmbassy";

  return (
    <section className=" py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <TitleTag title={"About Me"} />
            <p className="text-lg font-semibold  mb-2">
              Meet CWE Consult
            </p>
            <div className="flex flex-col gap-6">
              <p>
                Crypto Wealth Embassy is the founder of Defitiger token ($DTGI),
                a decentralized meme asset driven by a community of
                Decentralized Finance enthusiasts with a unique love for
                Felines. He's also a founding member of the Sir Mapy and Co
                (SMC) DAO.
              </p>
              <p>
                Popularly known on X as WE, he's a Web 3 marketing strategist,
                writer, crypto spaces host, and a solidity developer. He has
                built great influence in this space and has ambassadorial deals
                for crypto projects.
              </p>
              <p>
                He has helped in onboarding Nigerians and Africans to the crypto
                industry, teaching and adding value to investors. He's a firm
                believer in leveraging opportunities in the Web 3.0 space for
                growth and personal development.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  text={"Telegram"}
                  icon={<FaTelegram />}
                  bgColor={"bg-[#a13523]"}
                  hoverColor={"hover:bg-[#5c241c]"}
                  textColor={"text-[#fff]"}
                />
              </a>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  text={"Twitter"}
                  icon={<FaTwitter />}
                  bgColor={"bg-[#a13523]"}
                  hoverColor={"hover:bg-[#5c241c]"}
                  textColor={"text-[#fff]"}
                />
              </a>
            </div>
          </div>

          <div>
            <img src={SWE} alt="swe" className="rounded-xl md:float-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
