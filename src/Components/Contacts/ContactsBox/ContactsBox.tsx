import React, { ReactNode } from 'react';

interface ContactsBoxProps {
  children: ReactNode;
}

const ContactsBox: React.FC<ContactsBoxProps> = ({ children }) => {
  return (
    <section className="contacts">
      <div className="hero-container">
        {children}
      </div>
    </section>
  );
}

export default ContactsBox;