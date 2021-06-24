import React from "react";
import classes from "./Body.module.css";
import Monday from "../Days/Monday";
import Tuesday from "../Days/Tuesday";
import Wednesday from "../Days/Wednesday";
import Thursday from "../Days/Thursday";
import Friday from "../Days/Friday";
import Saturday from "../Days/Saturday";
import Sunday from "../Days/Sunday";

const Body = props => {
  // console.log(props.sendRecipe.length)
  // let test=[1,2,3,4,5,6,7,8,9];
  const datas = props.sendRecipe;
  let mon = [],
    tue = [],
    wed = [],
    thr = [],
    fri = [],
    sat = [],
    sun = [];

  // Empty Previous data
  mon = [];
  tue = [];
  wed = [];
  thr = [];
  fri = [];
  sat = [];
  sun = [];

  for (let i = 0; i < datas.length; i++) {
    if (i <= 2) {
      mon.push(datas[i]);
    } else if (i >= 3 && i <= 5) {
      tue.push(datas[i]);
    } else if (i >= 6 && i <= 8) {
      wed.push(datas[i]);
    } else if (i >= 9 && i <= 11) {
      thr.push(datas[i]);
    } else if (i >= 12 && i <= 14) {
      fri.push(datas[i]);
    } else if (i >= 15 && i <= 17) {
      sat.push(datas[i]);
    } else if (i >= 18 && i <= 20) {
      sun.push(datas[i]);
    }
  }
  // console.log(mon, tue, wed, thr, fri, sat, sun);

  return (
    <div className={classes.body}>
      <Monday sendRecipe={mon} />
      <Tuesday sendRecipe={tue} />
      <Wednesday sendRecipe={wed} />
      <Thursday sendRecipe={thr} />
      <Friday sendRecipe={fri} />
      <Saturday sendRecipe={sat} />
      <Sunday sendRecipe={sun} />
    </div>
  );
};

export default Body;
