import React from "react";
import { Button, TitleTag } from "../reusables";

function Contact() {
  return (
    <section className="py-16 bg-accent" id="contact">
      <div className="container mx-auto px-4">
        <TitleTag title={"Contact Me"} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
          <div>
            <p className="text-lg font-semibold mb-2">Get in touch</p>
            <p>
              If you're looking to explore partnership opportunities,
              promotional activities, or interested in hiring my services,
              please don't hesitate to use the contact form below. I'm excited
              to connect with you and discuss potential collaborations,
              marketing strategies, or any projects you have in mind.
            </p>
          </div>

          <form action="mailto:cwembassy.cwe@gmail.com">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="px-4 py-1.5 border border-white bg-transparent w-full outline-none rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="px-4 py-1.5 border border-white bg-transparent w-full outline-none rounded"
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              className="px-4 py-1.5 border border-white bg-transparent w-full outline-none rounded my-4 resize-none"
            />
            <Button
              text={"Send"}
              bgColor={"bg-[#fff]"}
              hoverColor={"hover:bg-[#e5e5e5]"}
              textColor={"text-[#a13523]"}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
