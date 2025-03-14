import React from "react";
import "../styles/Sidebar.css"; // Import the CSS file
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Sliders } from "lucide-react";
import { MdCheckBox } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="sidebar">

      <button className="sidebar-btn"></button>
      <AnchorLink href="#projects">
        <button>
          Projects
        </button>
      </AnchorLink>
      <AnchorLink href="#blog">
        <button>
          Blogs
        </button>
      </AnchorLink>

    </div>
  );
};

export default Sidebar;
