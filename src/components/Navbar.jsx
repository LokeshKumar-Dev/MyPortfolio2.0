import React, { useEffect } from "react";
import { Link } from "react-scroll";
import {
  Grid,
  Checkbox,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";

export default function Navbar() {
  const [visible, setVisible] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  useEffect(() => {
    var sw = window.screen.width;
    if (sw < 800) {
      setMenu(true);
    }
  }, []);

  return (
    <>
      <section className="nav bg-w">
        <h2 className="nav__logo ft-b">
          Lokesh
          <li
            className="header-btn"
            style={{
              backgroundColor: "red",
              height: "7px",
              width: "7px",
              margin: "0 6px",
            }}
          ></li>
          Kumara
        </h2>
        <div className="nav__links">
          {!menu ? (
            <>
              <Link
                className="navigation__body-link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                style={{ color: "inherit" }}
              >
                <Button
                  className="nav__link bg-w"
                  onClick={() => console.log(window.screen.width, menu)}
                >
                  About
                </Button>
              </Link>
              <Link
                className="navigation__body-link"
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                style={{ color: "inherit" }}
              >
                <Button className="nav__link bg-w">Projects</Button>
              </Link>
              <Link
                className="navigation__body-link"
                to="Skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                style={{ color: "inherit" }}
              >
                <Button className="nav__link bg-w">Skills</Button>
              </Link>
              <Link
                className="navigation__body-link"
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                style={{ color: "inherit" }}
              >
                <Button className="nav__link bg-w">Contact</Button>
              </Link>
            </>
          ) : (
            <Icon
              onClick={() => setVisible((v) => !v)}
              name="bars"
              className="nav__link-icon"
            />
          )}
        </div>
      </section>

      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        direction="right"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
        className="nav__links-sidebar bg-w"
      >
        <Menu.Item as="a">
          <Link
            className="navigation__body-link"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            style={{ color: "inherit", display: "block", width: "100%" }}
          >
            <Button className="nav__link w-100 bg-w">About</Button>
          </Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link
            className="navigation__body-link"
            to="Skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            style={{ color: "inherit", display: "block", width: "100%" }}
          >
            <Button className="nav__link w-100 bg-w">Skills</Button>
          </Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link
            className="navigation__body-link"
            to="Projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            style={{ color: "inherit", display: "block", width: "100%" }}
          >
            <Button className="nav__link w-100 bg-w">Projects</Button>
          </Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link
            className="navigation__body-link"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            style={{ color: "inherit", display: "block", width: "100%" }}
          >
            <Button className="nav__link w-100 bg-w">Contact</Button>
          </Link>
        </Menu.Item>
      </Sidebar>
    </>
  );
}
