import MailButton from "../Main/MailButton";
import PhoneButton from "../Main/PhoneButton";

export default function Footer() {
  const thumb = "thumb";
  return (
    <footer id="footer">
      <div className="inner">
        <div className="btn">
          <PhoneButton />
          <MailButton thumb={thumb} />
        </div>
      </div>
    </footer>
  );
}
