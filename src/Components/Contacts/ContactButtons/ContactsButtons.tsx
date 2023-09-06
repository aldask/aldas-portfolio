import React from "react";

interface ContactsButtonsProps {
  linkedinUrl: string;
  resumeUrl: string;
}

const ContactsButtons: React.FC<ContactsButtonsProps> = ({
  linkedinUrl,
  resumeUrl,
}) => {
  return (
    <div className="contacts__content__buttons">
      <button className="linkedin">
        <a href={linkedinUrl} target="_blank">
          LinkedIn
        </a>
      </button>
      <button className="resume">
        <a href={resumeUrl} target="_blank">
          Resume
        </a>
      </button>
    </div>
  );
};

export default ContactsButtons;
