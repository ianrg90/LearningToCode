import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {

  return (
    <React.Fragment>
        <header className = {classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartButton onClick = {props.onOpen}/>
        </header>
        <div className = {classes["main-image"]}>
            <img src= {mealsImage} alt="food at the table" />
        </div>
    </React.Fragment>
  );
}

export default Header;
