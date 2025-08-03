import React from "react";
import "../index.css";

const About = () => {
  return (
    <>
      <section className="bg-brand-about pt-16 pb-4 px-6 text-white">
        {/* Girl Image Centered and Sized */}
        <div className="flex justify-center items-center">
          <img
            src="/images/girl.png"
            alt="Person writing notes"
            className="w-[480px] h-auto max-h-[400px] object-contain"
          />
        </div>

        {/* Sticky Notes Section */}
        <div className="max-w-7xl mx-auto mt-12 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5">
          {[
            {
              title: "Your Thoughts, Your Lock, Your Notebook.",
              content:
                "Every note you write stays encrypted, protected, and visible only to you because privacy isn’t a feature, it’s a promise.",
            },
            {
              title: "From Desk to Mobile, Your Notebook in Your Pocket.",
              content:
                "Carry your notebook wherever you go, iNotebook syncs your notes in the cloud, instantly.",
            },
            {
              title: "Designed to Be Effortless.",
              content:
                "Write. Save. Edit. Delete. iNotebook keeps it simple so you can focus on your ideas. No Clutter, Just Clarity.",
            },
          ].map((note, index) => (
            <div
              key={index}
              className="relative bg-sticky_note text-brand-light p-6 pt-10 rounded-xl shadow-xl min-h-[180px] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-12 h-5 bg-yellow-300 rounded-md shadow-md rotate-2 z-10" />
              <h3 className="text-lg font-bold mb-2">{note.title}</h3>
              <p className="text-sm font-medium">{note.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
