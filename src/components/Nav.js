import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { faGithub, faDev } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className='nav-bar'>
      <nav>
        <h1 className='nav-head'>King</h1>

        <ul className='nav-ul '>
          <li className='nav-li hover-underline-animation'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-li hover-underline-animation'>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li className='nav-li hover-underline-animation'>
            <Link to='/Menu'>Menu</Link>
          </li>
          <li className='nav-li hover-underline-animation'>
            <Link to='/About'>About</Link>
          </li>

          {/* <FontAwesomeIcon className="github" icon={faGithub} />
          <FontAwesomeIcon className="dev-to" icon={faDev} /> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
