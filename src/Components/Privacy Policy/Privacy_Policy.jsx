import React from "react";
import "./Privacy_Policy.css";
import Header from "../Header/Header";
import Footer from "../Footer";

export default function Privacy_Policy() {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="heading_main">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how LaRace ("we" or "us") collects,
            uses, and protects the personal information of individuals who visit
            our website and use our platform. We are committed to ensuring the
            privacy and security of your personal information. By accessing our
            website or using our platform, you agree to the terms of this
            Privacy Policy.
          </p>
        </div>
        <div>
          <ul className="Privacy_list">
            <li>
              <h2>1): Information We Collect</h2>
              <ol className="Second_listy_privacy">
                <li>
                  <span className="Personal">Personal Information</span>:{" "}
                  <span className="text_reg">
                    When you register an account or interact with our platform,
                    we may collect personal information such as your name, email
                    address, contact details, and payment information. We use
                    this information to provide our services, process
                    transactions, and communicate with you.
                  </span>
                </li>
                <li>
                  <span className="Personal">Non-Personal Information</span>:{" "}
                  <span className="text_reg">
                    We may also collect non-personal information such as
                    demographic data, device information, and website usage
                    statistics. This information is used to improve our services
                    and enhance your experience on our platform.
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="mt-3">
                2): How We Use Your Information We use the collected information
                for the following purposes
              </h2>
              <ul className="UnOrder_list">
                <li>To provide and personalize our services</li>
                <li>To process transactions and manage your account</li>
                <li>
                  To communicate with you regarding updates, news, and
                  promotions
                </li>
                <li>To improve our platform, services, and user experience</li>
                <li>To analyse usage data and perform statistical analysis</li>
                <li>To enforce our terms of service and protect our rights</li>
              </ul>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
              <strong className="Security">3): Data Security:</strong> We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or alteration. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
              <strong className="Security">4): Data Retention:</strong> We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless a longer retention period is required by law.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
              <strong className="Security">5):Third-Party Disclosure:</strong> We may share your personal information with third-party service providers that assist us in delivering our services, processing payments, or analysing website usage. These service providers are obligated to protect your information and only use it for the purposes specified by us.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
              <strong className="Security">6):Your Rights</strong> You have the right to access, update, and delete your personal information. You can also withdraw your consent to the processing of your information or request a copy of the data we hold about you. Please contact us using the details provided below to exercise your rights.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
              <strong className="Security">7):Updates to this Privacy Policy</strong> We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on our website, and the revised policy will take effect immediately.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
              <strong className="Security">8):Contact Us</strong> If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at: info@larace.live.
              </span>
            </li>
          </ul>
        </div>
        <div className="heading_main">

        <p>By accessing our website or using our platform, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>
        <p>Last updated: 26/05/2023</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
