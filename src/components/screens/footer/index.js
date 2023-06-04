import React from "react";
import cn from "classnames";
import styles from "./footerProduct.css";

const ProductFooter = () => {
  return (
    <>
      <div className={cn(["footer_box"], "container-fluid my-5")}>
        <footer className="text-center text-lg-start text-white">
          <div className="container-fluid p-4 pb-0">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  About MechGrow
                </h6>
                <p>
                  At Mechgrow India, you won’t only find what you need; you’ll
                  get the best quality at a fair price. With years of experience
                  in the industry.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <a className="text-white">ESD Products</a>
                </p>
                <p>
                  <a className="text-white">Kaasutools</a>
                </p>
                <p>
                  <a className="text-white">SMT Product</a>
                </p>
                <p>
                  <a className="text-white">Cutters & Pillers</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-white">Your Account</a>
                </p>
                <p>
                  <a className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a className="text-white">Help</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> E-138, delta-1, Greater
                  Noida,Uttar Pradesh
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  contact@MechgrowIndia.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +91-8404882358
                </p>
              </div>
            </div>

            <hr className="my-3" />

            <section className="p-1 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    <a
                      className="text-white text-decoration-none"
                      href="https://mdbootstrap.com/"
                    >
                      Copyright © 2020 MechgrowIndia.com
                    </a>
                  </div>
                </div>

                <div
                  className={cn(
                    ["social_links"],
                    "col-md-5 col-lg-4 ml-lg-0 text-center text-md-end"
                  )}
                >
                  <a role="button">
                    <i class="fa-brands fa-facebook fa-xl"></i>
                  </a>

                  <a role="button">
                    <i class="fa-brands fa-twitter fa-xl"></i>
                  </a>

                  <a role="button">
                    <i class="fa-brands fa-google fa-xl"></i>
                  </a>
                  <a role="button">
                    <i class="fa-brands fa-instagram fa-xl"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductFooter;
