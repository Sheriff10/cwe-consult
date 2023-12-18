import React from "react";
import SWE from "../../assets/images/swe.jpg";
import { Button, TitleTag } from "../reusables";
import { FaTelegram, FaTwitter } from "react-icons/fa";

function About() {
   const telegramUrl = "https://t.me/CWEmbassy_DTG";
   const twitterUrl = "https://twitter.com/CWEmbassy";

   return (
      <section className=" py-16" id="about">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
               <div>
                  <TitleTag title={"About Me"} />
                  <p className="text-lg font-semibold  mb-2">
                     Meet Crypto Wealth Embassy
                  </p>
                  <div className="flex flex-col gap-6">
                     <p>
                        Crypto Wealth Embassy is the founder of Defitiger token
                        ($DTG), a decentralized meme asset driven by a
                        community of Decentralized Finance enthusiasts with a
                        unique love for Felines. He's also a founding member of
                        the Sir Mapy and Co (SMC) DAO.
                     </p>
                     <p>
                        He provides consultancy services through CWE Consult,
                        offering expertise in blockchain technology,
                        cryptocurrency projects, project whitepapers,
                        tokenomics, marketing strategies, and project
                        management. His availability extends to comprehensive
                        consultations within the blockchain and cryptocurrency
                        space. Clients can seek guidance on various aspects of
                        their projects, including strategic planning, technical
                        aspects, and effective project management practices
                     </p>
                     <p>
                        He's a firm believer in leveraging
                        opportunities in the Web 3.0 space for growth and
                        personal development.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                     <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Button
                           text={"Telegram"}
                           icon={<FaTelegram />}
                           bgColor={"bg-[#a13523]"}
                           hoverColor={"hover:bg-[#5c241c]"}
                           textColor={"text-[#fff]"}
                        />
                     </a>
                     <a
                        href={twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
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
                  <img
                     src={SWE}
                     alt="swe"
                     className="rounded-xl md:float-right"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default About;
