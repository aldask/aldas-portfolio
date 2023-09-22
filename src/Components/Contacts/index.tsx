import React from "react";
import ContactsBox from "./ContactsBox/ContactsBox";
import ContactsBoxContent from "./ContactsBoxContent/ContactsBoxContent";
import ContactsButtons from "./ContactButtons/ContactsButtons";

const Contacts: React.FC = () => {
  return (
    <ContactsBox>
      <ContactsBoxContent
        title="Connect With Me!"
        subTitle="Let's Start a Conversation!"
      >
        <p>
          If you're looking for engaging discussions or professional inquiries,
          don't hesitate to get in touch via LinkedIn. And don't forget to
          explore my resume. Additionally, you can find all my projects on my
          GitHub profile
        </p>
        <ContactsButtons
          linkedinUrl="https://www.linkedin.com/in/aldas-k-2ab99b1b4/"
          resumeUrl="https://drive.google.com/file/d/1qjs28XAAT3LQBLIF5OlzRb1YqFK0w4YX/view?usp=sharing"
          githubUrl="https://github.com/aldask"
        />
      </ContactsBoxContent>
    </ContactsBox>
  );
};

export default Contacts;
