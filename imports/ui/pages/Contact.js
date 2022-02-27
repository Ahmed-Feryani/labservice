import Layout from "../components/layout/Layout";
import "./contact.css";
import React from "react";
const Contact = () => {
  return (
    <Layout>
      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span style={{ color: "rgb(37, 151, 244)", fontWeight: "700" }}>
            contact
          </span>{" "}
          Us{" "}
        </h1>
        <div className="row">
          <iframe
            title="gafsa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3694.3307252668956!2d8.791907480713478!3d34.41978289118972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ac5ec88270035d!2sPlace%20Pasteur!5e0!3m2!1sen!2sin!4v1641765760190!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <form>
            <h3>get in touch</h3>
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="phone" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              placeholder="message"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <input type="submit" defaultValue="send message" className="btna" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
