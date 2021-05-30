import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { ButtonCustom } from "../common";
import icons from "./icons";
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "white",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bmItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "25%",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  navLists: {
    background: "green",
  },
};

export default function (props) {
  const { data,logoutHandling ,handleModal} = props;
  return (
    <Menu styles={styles}>
      <ul>
        {data.map((navdata, id) => {
          let Icon = icons[id];
          return (
            <Link key={id} to={navdata.path} className="link-txt-header">
              {" "}
              <li>
                {<Icon style={{ fontSize: 30, marginRight: "5px" }} />}
                {navdata.title}
              </li>
            </Link>
          );
        })}
             <ButtonCustom
             onClick={handleModal}
          text="Post booktter"
          styling={{ backgroundColor: "white" ,marginTop:"10px"}}
        />
      </ul>
      <div>
   
        <ButtonCustom
          text="Log out"
          onClick={logoutHandling}
          styling={{
            backgroundColor: "white",
            width: "50%",
            borderRadius: "30px",
            margin:"auto"

          }}
        />
          {/* <ButtonCustom
          text="Settings"
          styling={{
            backgroundColor: "white",
            width: "50%",
            borderRadius: "30px",
            margin:"auto"

          }}
        /> */}
      </div>
    </Menu>
  );
}
