import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header-section">
        <div className="header-logo">
          <Link href="http://localhost:3000/">
            <h1>F88</h1>
          </Link>
        </div>
        <div className="header-container">
          <Link href="http://localhost:3000/">
            <p className="header-homepage">Trang chủ</p>
          </Link>
          <p className="header-contact">Liên Hệ</p>
          <FontAwesomeIcon icon={faUser} className="header-icon" />
        </div>
      </div>
    </div>
  );
}
