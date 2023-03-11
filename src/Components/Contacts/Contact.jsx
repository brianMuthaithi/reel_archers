import { useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Contact = () => {
  AOS.init();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://reelarchers.azurewebsites.net/sendmail",
        { name, email, message }
      );
      res.status === 200 && window.alert("Email send successful!");
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  const data = useMemo(
    () => [
      { name: "Address", text: "P.O. BOX 3407-00100, Nairobi" },
      { name: "Hours", text: "Monday - Saturday: 8:00 AM - 5:00 PM" },
      { name: "Phone", text: "+254 701123511" },
      { name: "Email", text: "info@reelarcherstudios.com" },
    ],
    []
  );

  return (
    <section className="contacts py-10 lg:py-24 h-max text-white px-2 xl:py-16">
      <div
        className="flex flex-col px-2 mx-auto max-w-5xl md:flex-row xl:max-w-7xl md:space-x-10 xl:px-0"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="space-y-5 md:w-1/2">
          <div className="space-y-3">
            <h2 className="font-semibold text-4xl">Contact Us</h2>
            <p className="xl:text-lg">
              If you want to hire our team of experts for your next project or
              have any questions, we are always ready to help.
            </p>
            <ul className="list-disc pl-10 italic xl:text-lg">
              <li>Get started quickly</li>
              <li>Get experienced architects</li>
              <li>Get your work delivered on time</li>
              <li>Get the best price quotes</li>
            </ul>
          </div>
          <div className="space-y-2 border-t border-dashed pt-5 xl:text-lg">
            {data.map((contact, i) => (
              <div key={i}>
                <h2 className="font-semibold text-2xl">{contact.name}</h2>
                <p>{contact.text}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          action="#"
          className="border bg-white p-5 mt-10 text-gray-700 rounded-lg space-y-5 md:mt-0 md:p-10 md:w-1/2"
        >
          <label className="block">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              className="w-full bg-transparent outline-none border py-3 px-2 rounded"
            />
          </label>
          <label className="block">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              className="w-full bg-transparent outline-none border py-3 px-2 rounded"
            />
          </label>
          <label className="block">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              type="text"
              placeholder="Your Message"
              rows={window.screen.width > 768 ? "7" : "3"}
              className="w-full bg-transparent outline-none border p-2 rounded"
            />
          </label>
          <label className="block">
            <input
              onClick={(e) => handleSubmit(e)}
              type="submit"
              value="Submit"
              className="w-1/4 text-white bg-navColor outline-none border p-2 rounded cursor-pointer"
            />
          </label>
        </form>
      </div>
    </section>
  );
};

export default Contact;
