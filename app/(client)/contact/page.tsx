import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
