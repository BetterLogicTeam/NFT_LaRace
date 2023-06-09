import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer";

export default function Terms_and_Conditions() {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="heading_main">
          <h1>Terms and Conditions</h1>
          <p>
            Please read these terms and conditions carefully before using the
            LaRace website and platform.
          </p>
        </div>
        <div>
          <ul className="Privacy_list">
            <li>
              <li>
                {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
                <span className="text_reg">
                  <strong className="Security">1. Acceptance of Terms: </strong>{" "}
                  By accessing and using the LaRace website and platform, you
                  agree to be bound by these terms and conditions. If you do not
                  agree with any part of these terms, please refrain from using
                  our services.
                </span>
              </li>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">2.User Eligibility:</strong> To use
                the LaRace website and platform, you must be at least 18 years
                old or have the legal age of majority in your jurisdiction. By
                using our services, you represent and warrant that you meet
                these eligibility requirements.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">3.Account Registration:</strong>
                To access certain features and services, you may need to create
                an account. You are responsible for maintaining the
                confidentiality of your account credentials and for all
                activities that occur under your account. You agree to provide
                accurate and up-to-date information during the registration
                process.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">
                  4. Intellectual Property Rights:
                </strong>{" "}
                : The content, design, and intellectual property rights of the
                LaRace website and platform are owned by LaRace. You agree not
                to reproduce, distribute, modify, or create derivative works of
                any materials without our prior written consent.
              </span>
            </li>
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">5. User Conduct</strong> : You
                agree to use the LaRace website and platform for lawful purposes
                only. You must not engage in any activities that may violate
                applicable laws, infringe upon the rights of others, or disrupt
                the functioning of our services.
              </span>
            </li>{" "}
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">
                  6. Privacy and Data Protection:
                </strong>{" "}
                We are committed to protecting your privacy and handling your
                personal information in accordance with our Privacy Policy. By
                using our services, you consent to the collection, use, and
                storage of your personal data as described in our Privacy
                Policy.
              </span>
            </li>{" "}
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">7. Limitation of Liability</strong>{" "}
                : LaRace shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising out of or
                in connection with your use of the website and platform. We make
                no warranties or representations about the accuracy,
                reliability, or completeness of the content and services
                provided.
              </span>
            </li>{" "}
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">
                  8. Modifications to Terms and Services
                </strong>{" "}
                : LaRace reserves the right to modify or terminate these terms
                and conditions, as well as any features or services, at any time
                without prior notice. It is your responsibility to review the
                terms periodically. Continued use of the website and platform
                after any modifications constitutes your acceptance of the
                revised terms.
              </span>
            </li>{" "}
            <li>
              {/* <span className="Personal">Non-Personal Information</span>:{" "} */}
              <span className="text_reg">
                <strong className="Security">
                  9. Governing Law and Jurisdiction
                </strong>{" "}
                : These terms and conditions shall be governed by and construed
                in accordance with the laws of Jurisdiction. Any disputes
                arising from or relating to these terms and conditions shall be
                subject to the exclusive laws of the courts in your
                (jurisdiction).
              </span>
            </li>
          </ul>
        </div>
        <div className="heading_main">
          <p>
            If you have any questions or concerns regarding these terms and
            conditions, please contact us at: info@larace.live.
          </p>
          <p>
            By using the LaRace website and platform, you acknowledge that you
            have read, understood, and agree to be bound by these terms and
            conditions.
          </p>
        
        </div>
      </div>
      <Footer/>
    </div>
  );
}
