import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="" />
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Adress"
                  aria-label="Your Email Adress"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscripe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                Kukand <br />
                PinCode 170300
              </address>
              <a
                className="text-white mt-4 d-block mb-1"
                href="tel:+998 90 545 7275"
              >
                + 998 90 777 7777
              </a>
              <a
                className="text-white mt-3 d-block mb-0"
                href="mailto:tolkinjonovvaliyorbek02@gmail.com"
              >
                tolkinjonovvaliyorbek02@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href='!#'><BsLinkedin className="fs-4" /></a>
                <a className="text-white" href='!#'><BsInstagram className="fs-4" /></a>
                <a className="text-white" href='!#'><BsYoutube className="fs-4" /></a>
                <a className="text-white" href='!#'><BsGithub className="fs-4" /></a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link className="text-white py-2 mb-1">Refund Policy</Link>
              <Link className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
              <Link className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">FAQ</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Headphone</Link>
              <Link className="text-white py-2 mb-1">Tablet</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy {new Date().getFullYear()}; Powered by Developer`s Corner{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
