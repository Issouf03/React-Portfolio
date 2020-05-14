import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { NavLink} from 'reactstrap';
import "./style.css";

function Footer() {
  return (
    <footer className="footer d-flex flex-row justify-content-between align-items-center pl-2 bg-dark ml-auto">
      <div className="text-success">
        <h5>Issouf Kiema Copyright 2020</h5>
      </div>
      <div className="gitlin d-flex flex-row">
      <NavLink className="m-2" href="https://github.com/Issouf03" target="_blank"><FontAwesomeIcon icon={faGithub} size = '2x' /></NavLink>
      <NavLink className="m-2" href="https://www.linkedin.com/in/issouf-kiema-b3929478/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size = '2x'/></NavLink>
      </div>
    </footer>
  );
}

export default Footer;
