"use client"; 

import { useState, useRef } from "react";
import Banner from "../../components/banner/banner";

export default function SubscriptionsPage() {
  const [email, setEmail] = useState("");
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const isFormValid = email.trim() !== "";

  return (
    <div>
      <Banner title="NARROW MARGIN" link="/"></Banner>

      <div className="w-[65%] lg:w-[35%] mx-auto sm:text-2xl mt-[50vh] transform -translate-y-[45%] flex flex-col items-center gap-4 text-center transition-all duration-1000 ease-in-out font-family:Arial Narrow, Arial, sans-serif">
        <form action="https://formsubmit.co/narrowmarginquarterly@gmail.com" method="POST">
          <h4>Enter your email below to be notified when our issue launches.</h4>
          <input type="hidden" name="_subject" value="New Subscriber!" />
          <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none uppercase text-base bg-transparent border-b-[1.5px] border-[#282828] mb-8 py-2"
          />
          <button 
              type="submit" 
              ref={submitButtonRef}
              className="mt-4 text-base uppercase font-bold bg-transparent text-[#282828] border-none cursor-pointer hover:text-tertiary transition-colors duration-200 ${isFormValid ? 'opacity-100' : 'opacity-0'}"
              disabled={!isFormValid}
          >
              Send
          </button>
        </form>
      </div>
    </div>
  );
}
