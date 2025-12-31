import React, { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "emailjs-com";
import Reveal from "../../Containers/Animations/Reveal";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs

      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message");
      });
  };

  return (
    <Reveal>
      <section className="py-20" id="contact">
        <h1 className="m-auto md:w-1/3 text-[45px] md:text-[50px] font-bold text-center pb-8 bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Contact Me
        </h1>

        <div className="w-full flex flex-col items-center gap-10">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 bg-gray-800 px-8 py-6 rounded-xl"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 h-32 resize-none rounded bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white p-3 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Reveal>
  );
};

export default ContactForm;
