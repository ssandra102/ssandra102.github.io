import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faInstagram,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './styles/handles.css';


export default function SocialLinks() {
  return (
    <div className=" social-container">

      {/* LinkedIn */}
      <a className="linkedin social" href="https://linkedin.com/in/sandraskaria" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 hover:text-blue-800 text-3xl transition-all" />
      </a>

      {/* GitHub */}
      <a className="github social" href="https://github.com/ssandra102" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-gray-600 text-3xl transition-all" />
      </a>

      {/* Medium */}
      <a className="medium social" href="https://medium.com/@sandraskaria" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} className="text-black hover:text-gray-700 text-3xl transition-all" />
      </a>

      {/* Pinterest */}
      <a className="pinterest social" href="https://pinterest.com/ssandraaaaaa" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faPinterest} className="text-red-500 hover:text-red-700 text-3xl transition-all" />
      </a>

      {/* Email */}
      <a className="envelop social" href="mailto:sandra10skaria@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-700 hover:text-gray-900 text-3xl transition-all" />
      </a>
    </div>
  );
}
