import React, { useEffect } from "react";
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
          <li className="header-btn" style={{ backgroundColor: "red", height: "7px", width: "7px", margin:"0 6px" }}></li>
          Kumara
        </h2>
        <div className="nav__links">
          {!menu ? (
            <>
              <Button
                className="nav__link bg-w"
                onClick={() => console.log(window.screen.width, menu)}
              >
                About
              </Button>
              <Button className="nav__link bg-w">skills</Button>
              <Button className="nav__link bg-w">projects</Button>
              <Button className="nav__link bg-w">contact</Button>
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
          <Button
            className="nav__link bg-w"
            onClick={() => console.log(window.screen.width, menu)}
          >
            About
          </Button>
        </Menu.Item>
        <Menu.Item as="a">
          <Button className="nav__link bg-w">skills</Button>
        </Menu.Item>
        <Menu.Item as="a">
          <Button className="nav__link bg-w">projects</Button>
        </Menu.Item>
        <Menu.Item as="a">
          <Button className="nav__link bg-w">contact</Button>
        </Menu.Item>
      </Sidebar>
    </>
  );
}
