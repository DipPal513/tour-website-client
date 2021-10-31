import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mb-4">
        <div className="container">
          <h2 className="h1-responsive fw-bold text-uppercase text-center my-4">
            contact <span className = 'text-warning'>us</span>
          </h2>

          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control mb-3"
                        placeholder = "Your name"
                      />
                     
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder = "Your email"
                      />
                      
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0 my-4">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder= "Subject"
                      />
                     
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="6"
                        className="form-control md-textarea mt-3"
                        placeholder = 'Your message'
                      ></textarea>
                     
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-start">
                <button className="btn btn-warning btn-bg mt-3">Send Messege</button>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>San Francisco, CA 94126, USA</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@dippal.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
