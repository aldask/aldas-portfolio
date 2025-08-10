import { type ReactNode } from "react";

interface ContactsBoxProps {
  children: ReactNode;
}

export default function ContactsBox({ children }: ContactsBoxProps) {
  return (
    <section className="contacts">
      <div className="hero-container">{children}</div>
    </section>
  );
}
