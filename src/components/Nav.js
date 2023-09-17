import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGithub, faDev } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div>
      <nav>
        <h1>King</h1>

        <ul>
          <li>Walls</li>
          <li>Menu</li>
          <li>About</li>

          <FontAwesomeIcon className="github" icon={faGithub} />
          <FontAwesomeIcon className="dev-to" icon={faDev} />
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
