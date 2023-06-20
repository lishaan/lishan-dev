"use client";

import Link from "next/link";
import { send } from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setSending] = useState(false);

  function onChangeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.currentTarget.value;

    setMessage(value.slice(0, 500));
  }

  async function sendEmail() {
    setSending(true);

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      if (!name || !email || !message) {
        throw new Error("Please fill in all fields!");
      }

      const emailRegex = /\S+@\S+\.\S+/;

      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address!");
      }

      if (name.length < 4) {
        throw new Error("Your name should be at least 4 characters long");
      }

      if (message.length < 20) {
        throw new Error("Your message should be at least 20 characters long");
      }

      await toast.promise(
        send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
        {
          loading: "Sending Email...",
          success: <b>Email sent!</b>,
          error: (
            <b>{"Couldn't send email. Please contact me directly instead."}</b>
          ),
        },
        {
          style: {
            borderRadius: "6px",
            background: "#27272a",
            color: "#fafafa",
          },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (_error) {
      const error = _error as Error;
      toast.error(error.message, {
        style: {
          borderRadius: "6px",
          background: "#27272a",
          color: "#fafafa",
        },
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="flex flex-col justify-center items-center h-full min-h-screen p-8 ">
      <h2 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text mb-10 pb-2">
        Contact
      </h2>
      <div className="max-w-4xl text-center text-md">
        <p className="mb-4">
          {"Have a project in mind? I would love to hear from you!"}
        </p>
        <p className="mb-4">
          {"Fill out the form below or directly send me an email at "}
          <Link
            href="mailto:lishan.dev@outlook.com"
            className="text-yellow-300 hover:text-yellow-400 transition"
          >
            lishan.dev@outlook.com
          </Link>
          {"."}
        </p>
      </div>
      {/* message form with styled inputs and buttons using tailwind */}
      <form className="flex flex-col max-w-md w-full text-md mt-8">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-zinc-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="What should I call you?"
            id="name"
            className="bg-zinc-600 border-zinc-600 border-2 rounded p-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col my-6">
          <label htmlFor="email" className="text-zinc-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Where can I reach you?"
            id="email"
            className="bg-zinc-600 border-zinc-600 border-2 rounded p-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-zinc-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="What's on your mind?"
            className="bg-zinc-600 border-zinc-600 border-2 rounded p-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition"
            value={message}
            onChange={onChangeMessage}
          />
          <span className="mt-2 text-sm flex justify-end">
            {message.length} / 500
          </span>
        </div>
        <button
          type="button"
          className="bg-zinc-600 border-zinc-600 border-2 rounded p-2 hover:bg-yellow-300 hover:text-zinc-950 duration-300 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent mt-4 disabled:opacity-50 disabled:cursor-not-allowed transition"
          onClick={sendEmail}
          disabled={isSending}
        >
          Send
        </button>
      </form>
    </section>
  );
}
