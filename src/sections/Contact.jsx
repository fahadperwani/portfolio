import React from "react";
import { IoMail } from "react-icons/io5";

function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center flex-col gap-2 p-10 h-[90vh] justify-center dark:bg-black dark:text-gray-300"
    >
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-3xl sm:text-4xl">Tell me about your project</p>
      <p className="text-xl font-bold text-gray-600">
        Let's create something 🤟
      </p>
      <div className="flex items-center text-lg gap-1 text-gray-700">
        <IoMail />
        <a href="mailto:youremail@example.com">fahadpeerwani1@gmail.com</a>
      </div>
      <form action="" className="flex flex-col gap-2 w-[300px] items-center">
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          autoComplete="off"
          className="bg-slate-600 text-white p-2 border-teal-800 border-2 outline-none w-full"
        />
        <input
          type="email"
          placeholder="Email"
          name="#mail"
          required
          autoComplete="off"
          className="bg-slate-600 text-white p-2 border-teal-800 border-2 outline-none w-full"
        />
        <textarea
          name="message"
          id=""
          placeholder="Message"
          className="bg-slate-600 text-white p-2 border-teal-800 border-2 outline-none w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-slate-600 text-white p-2 px-4 rounded-md active:scale-95"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
