import React from "react";
import "./Cookie_Policy.css";
import Header from "../Header/Header";
import Footer from "../Footer";

export default function Cookie_Policy() {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="heading_main">
          <h1>Cookie Policy</h1>
          <p>
            This Cookie Policy explains how LaRace ("we" or "us") uses cookies
            and similar tracking technologies on our website. By using our
            website, you consent to the use of cookies as described in this
            policy.
          </p>
        </div>
        <div>
          <ul className="Privacy_list">
            <li>
              <li>
                {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
                <span className="text_reg">
                  <strong className="Security">1):What are Cookies: </strong>{" "}
                  Cookies are small text files that are placed on your device
                  (computer, tablet, or mobile) when you visit a website. They
                  are widely used to make websites work more efficiently and
                  provide a better browsing experience. Cookies can also enable
                  website owners to track user activities and gather information
                  about their preferences.
                </span>
              </li>
              <h2>2):Types of Cookies We Use</h2>
              <ol className="Second_listy_privacy">
                <li>
                  <span className="Personal">Strictly Necessary Cookies</span>:{" "}
                  <span className="text_reg">
                    These cookies are essential for the operation of our website
                    and enable you to navigate and use its features. They are
                    usually set in response to your actions, such as filling out
                    forms or accessing secure areas of the site. Without these
                    cookies, certain services may not be available to you.
                  </span>
                </li>
                <li>
                  <span className="Personal">
                    Analytical/Performance Cookies
                  </span>
                  :{" "}
                  <span className="text_reg">
                    These cookies collect information about how visitors use our
                    website, such as which pages they visit most often and if
                    they encounter any errors. We use this data to improve the
                    performance and functionality of our website and to
                    understand how visitors interact with it.
                  </span>
                </li>
                <li>
                  <span className="Personal">Functionality Cookies</span>:
                  <span className="text_reg">
                    These cookies allow our website to remember choices you make
                    (such as your preferred language or region) and provide
                    enhanced features. They may also be used to provide services
                    you have requested, such as remembering your login
                    credentials or preferences.
                  </span>
                </li>
                <li>
                  <span className="Personal">
                    Targeting/Advertising Cookies
                  </span>
                  :
                  <span className="text_reg">
                    These cookies are used to deliver targeted advertisements
                    relevant to your interests based on your browsing habits.
                    They may also be used to measure the effectiveness of
                    advertising campaigns. These cookies are typically placed by
                    third-party advertising networks with our permission.
                  </span>
                </li>
              </ol>
            </li>

            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">3):Third-Party Cookies:</strong> We
                may allow third-party service providers, such as analytics or
                advertising companies, to use cookies on our website. These
                cookies are subject to the respective privacy policies of these
                third parties, and we have no control over or access to the
                information collected by these cookies.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">4):Managing Cookies:</strong> You
                can control and manage cookies through your browser settings.
                Most web browsers allow you to refuse or accept cookies, delete
                existing cookies, and set preferences for certain websites.
                However, please note that disabling or deleting cookies may
                affect the functionality and performance of our website.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">5):Updates to this Cookie:</strong>{" "}
                Policy We may update this Cookie Policy from time to time to
                reflect changes in our practices or legal obligations. Any
                updates will be posted on this page, and the revised policy will
                take effect immediately.
              </span>
            </li>
           
          </ul>
        </div>
        <div className="heading_main">
          <p>
          If you have any questions or concerns about our use of cookies, please contact us at: info@larace.live.
          </p>
          <p>By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy.</p>
          <p>Last updated: 26/05/2023</p>
        </div>
      </div>
    <Footer/>
    </div>

  );
}
