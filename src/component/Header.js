import React from "react";
import "./Header.css";

const Header = () => {
  const main_header_nav_bar_items = ["Get app |", "Store & Event|", "Gift Card |", "Help |"];
  const main_header_nav_bar = main_header_nav_bar_items.reverse().map((a) => (
    <li>
      <a href="#">{a}</a>
    </li>
  ));

  const primary_nav_bar_items = ["Categories", "Brands", "Luxe", "Nykaa Fashion", "Beauty Advice"];
  const primary_nav_bar = primary_nav_bar_items.reverse().map((a) => (
    <li>
      <a href="#">{a}</a>
    </li>
  ));
  const category_items = ["Nykaa", "Cosmetics", "Liquid Lipstick", "Face Masks", "Hand sanitiseres", "Lipstick", "Fragrance", "Pop Ups", "Men", "Mom & Baby"];
  const categories = category_items.map((a) => (
    <li>
      <a href="#">{a}</a>
    </li>
  ));

  const row_flex = { display: "flex", flexDirection: "row", justifyContent: "space-evenly" };

  return (
    <div>
      <header>
        <div id="main-header">
          <div id="navbar">
            <nav>
              <ul style={{ ...row_flex, justifyContent: "end", alignItems: "center", padding: "5px" }}>{main_header_nav_bar}</ul>
            </nav>
          </div>
          <div style={{ ...row_flex, alignItems: "center" }}>
            <img style={{ height: "60px", width: "150px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoFK_ddoOSSAYUp9M0ZnoPr-fpUg68HcMXy2pAhtJ&s" alt="logoimg" />
            <ul style={{ ...row_flex }}>{primary_nav_bar}</ul>
            <select
              style={{
                fontWeight: "bold",
                color: "rgb(54, 51, 51);",
                border: "none",
                backgroundColor: "rgb(243, 243, 243)",
                height: "40px",
                padding: "2px",
                borderRadius: "4px",
              }}
            >
              <option>Search on Nykaa</option>
              <option>Nykaa Cosmetics</option>
              <option>Nykaa Cosmetics Liquid Lipstick</option>
              <option>Face Masks</option>
              <option>Hand sanitizers</option>
              <option>Lipstick</option>
            </select>
            <div style={{ ...row_flex, justifyContent: "space-between", alignItems: "center" }}>
              <button
                style={{
                  width: "100px",
                  color: "white",
                  padding: "10px",
                  backgroundColor: "rgb(252, 39, 121)",
                  border: "none",
                  borderRadius: "9px",
                }}
              >
                Sign in
              </button>
              <div style={{ paddingLeft: "20px" }}>
                <i className="fa-solid fa-bag-shopping fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr style={{ backgroundColor: "black", margin: 0 }}></hr>
      <ul style={{ ...row_flex, justifyContent: "center", alignItems: "center", margin: "20px" }}>{categories}</ul>
    </div>
  );
};

export default Header;
