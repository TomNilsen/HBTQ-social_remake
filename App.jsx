import React, { useState } from "react";
import logo from "./images/logo.png";
import profilePic from "./images/profile-pic.png";
import List from "./pages/List";
import Map from "./pages/Map";
import Create from "./pages/create";
import About from "./pages/About";
import Eventpage from "./pages/Eventpage";

function App() {
  const [content, setContent] = useState(<List info={contentFour} />);

  function contentZero() {
    setContent(<List info={contentFour} />);
    mobileClose();
  }

  function contentOne() {
    setContent(<Map />);
    mobileClose();
  }

  function contentTwo() {
    setContent(<Create />);
    mobileClose();
  }

  function contentThree() {
    setContent(<About />);
    mobileClose();
  }

  function contentFour(e) {
    setContent(<Eventpage id={e.target.id} />);
    mobileClose();
  }

  function contentFive() {
    mobileClose();
    setMenustatus("menu-closed");
    alert('Under construction');
  }

  function logOut() {
    mobileClose();
    setMenustatus("menu-closed");
    alert('Under construction');
  }

  const [menustatus, setMenustatus] = useState("menu-closed");

  function menu() {
    if (menustatus === "menu-closed") {
      setMenustatus("menu-open");
    } else {
      setMenustatus("menu-closed");
    }
  }

  const [mobilemenu, setMobilemenu] = useState("mobile-closed");

  const [overlay, setOverlay] = useState("overlay-closed");

  function mobileOpen() {
    setMobilemenu("mobile-nav");
    setOverlay("overlay");
  }

  function mobileClose() {
    setMobilemenu("mobile-closed");
    setOverlay("overlay-closed");
  }

  return (
    <div className="wrapper">
      <div className={overlay} onClick={mobileClose}></div>
      <header>
        <h1>
          <img src={logo} alt="hbtq-social" />
        </h1>
        <button className="mobile-menu-btn" onClick={mobileOpen}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <nav className="normal-nav">
          <ul>
            <li>
              <button onClick={contentZero}>List</button>
            </li>
            <li>
              <button onClick={contentOne}>Map</button>
            </li>
            <li>
              <button onClick={contentTwo}>Create</button>
            </li>
            <li>
              <button onClick={contentThree}>About</button>
            </li>
          </ul>
        </nav>
        <nav className={mobilemenu}>
          <ul>
            <li className="mobile-header">
              <img src={profilePic} alt="profile photo" />
              <button onClick={mobileClose}>&times;</button>
            </li>
            <li>
              <h2>User name</h2>
            </li>
            <li>
              <button onClick={contentFive}>View profile</button>
            </li>
            <li>
              <button onClick={contentZero}>List</button>
            </li>
            <li>
              <button onClick={contentOne}>Map</button>
            </li>
            <li>
              <button onClick={contentTwo}>Create</button>
            </li>
            <li>
              <button onClick={contentThree}>About</button>
            </li>
            <li>
              <button onClick={logOut}>Log out</button>
            </li>
          </ul>
        </nav>
        <div>
          <img src={profilePic} alt="profile photo" onClick={menu} />
          <ul className={menustatus}>
            <li>
              <h2>User name</h2>
            </li>
            <li>
              <button onClick={contentFive}>View profile</button>
            </li>
            <li>
              <button onClick={logOut}>Log out</button>
            </li>
          </ul>
        </div>
      </header>

      <main>{content}</main>
      <footer>
        <h2>Footer</h2>
        <p>
          Images from <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
