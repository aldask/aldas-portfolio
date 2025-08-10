interface ContactsButtonsProps {
  linkedinUrl: string;
  resumeUrl: string;
  githubUrl: string;
}

export default function ContactsButtons({
  linkedinUrl,
  resumeUrl,
  githubUrl,
}: ContactsButtonsProps) {
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
      <button className="github">
        <a href={githubUrl} target="_blank">
          GitHub
        </a>
      </button>
    </div>
  );
}
