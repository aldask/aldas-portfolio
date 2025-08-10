import { type ReactNode } from "react";

interface ContactsBoxContentProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

export default function ContactsBoxContent({
  title,
  subTitle,
  children,
}: ContactsBoxContentProps) {
  return (
    <div className="contacts__content">
      <div className="contacts__content__title">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        {children}
      </div>
    </div>
  );
}
