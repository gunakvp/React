import React from "react";

const Content = (props) => {
  return (
    <section className="content">
      <h1>Get Started with AI</h1>
      <p>
        Begin your journey to build the perfect website using our AI, designed
        to craft tailored content, images, and layouts based on your specific
        prompts. This intuitive tool streamlines the creation process, allowing
        you to focus on your vision. Once the initial design is generated,
        effortlessly refine and modify every element through our user-friendly
        app. Embrace the opportunity to create a professional online presence
        that reflects your ideas and resonates with your audience, all while
        enjoying a seamless editing experience.
      </p>
      <p>{props.Title}</p>
    </section>
  );
};

export default Content;
