import { useState } from "react";
import Container from "@/components/Container";

const initialState = {
  name: "",
  email: "",
  instagram: "",
  type: "",
  event: "",
  date: "",
  budget: "",
  description: "",
};

const contact = () => {
  const [form, setForm] = useState(initialState);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log("Sending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      // console.log("Response received");
      if (res.status === 200) {
        // console.log("Response succeeded!");
        setForm(initialState);
      }
    });
  };

  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 mb-8 px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6">
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <div className="flex flex-col">
            <span className="text-gray-800">Full Name</span>
            <input
              type="text"
              className="text-"
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800">Email</span>
            <input
              type="email"
              className="text-"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800">Instagram Handle</span>
            <input
              type="text"
              className="text-gray-800"
              value={form.instagram}
              onChange={(e) => setForm({ ...form, instagram: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800">Type</span>
            <select
              type="form-select"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="photo">Photo</option>
              <option value="film">Film</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800">Event</span>
            <select
              type="form-select"
              value={form.event}
              onChange={(e) => setForm({ ...form, event: e.target.value })}
            >
              <option value="wedding">Wedding</option>
              <option value="portraits">Portraits</option>
              <option value="promotional">Promotional</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800">When is your event</span>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800">What is your Budget?</span>
            <select
              type="form-select"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
            >
              <option value="$500-$1000">$500-$1000</option>
              <option value="$1000-$1500">$1000-$1500</option>
              <option value="$1500-$2000">$1500-$2000</option>
              <option value="$2000-$2500">$2000-$2500</option>
              <option value="$2500+">$2500+</option>
            </select>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800">Tell me about your event</span>
            <textarea
              type="form-textarea"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col items-start">
            <button
              onClick={submitForm}
              className="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default contact;
