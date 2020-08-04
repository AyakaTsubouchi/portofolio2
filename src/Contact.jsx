import React from "react";

const Contact = (props) => {
  const duration = props.aosSetting.duration;
  return (
    <>
      <div className="contact">
        <div data-aos="fade-up" data-aos-duration={duration}>
          <h1 className="section-title">CONTACT</h1>
          <p>Feel free to contact me</p>
         <h3>ayakawell@gmail.com</h3>
          
        </div>
        <div data-aos="fade-up" data-aos-duration={duration}>
          <div className="contact-contents">
            <a href="https://www.linkedin.com/in/ayaka-tsubouchi-b0474718a/" target="_blank">
              <i class="fab fa-linkedin" />
            </a>
            <a href="https://www.instagram.com/ayakaru1122/" target="_blank">
              <i class="fab fa-instagram-square" />
            </a>

            <a href="https://twitter.com/tUsUNjoU2wU0mZD" target="_blank">
              <i class="fab fa-twitter-square" />
            </a>
            <a href="https://github.com/" target="_blank">
             <i class="fab fa-github-square"></i>
            </a>
            <a href="mailto:ayakawell@gmail.com" target="_blank">
              <i class="fas fa-envelope-square" />
            </a>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default Contact;
