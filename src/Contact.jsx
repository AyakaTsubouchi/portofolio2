import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact container">
        <h1 className="section-title">CONTACT</h1>
        <p>Feel free to contact me</p>
        <div className="contact_contents">
          <a href="https://www.linkedin.com/in/ayaka-tsubouchi-b0474718a/">
            <i class="fab fa-linkedin" />
          </a>
          <a href="https://www.instagram.com/ayakaru1122/">
            <i class="fab fa-instagram-square" />
          </a>

          <a href="https://twitter.com/tUsUNjoU2wU0mZD">
            <i class="fab fa-twitter-square" />
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"></script>
          <i class="fas fa-envelope-square"></i>
        </div>
      </div>
    </>
  );
};

export default Contact;
