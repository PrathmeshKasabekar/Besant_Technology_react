import React from "react";
import { Routes, Route } from "react-router-dom";

// import Student from "./Day2/Student";
// import MapProductes from "./Day2/MapProducts";
import MovieBooking from "./Day3/MovieBooking";
import Day4 from "./Day4/Day4";
import Day5 from "./Day5/day5";
import Day6 from "./Day6/Day6";
import Day7 from "./Day7/Day7";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import ProductView from "./Productss/ProductView";
import NormalComponent from "./Day8/NormalComponent";
import Day9 from "./Day8file2/HOC2";
import Main9 from "./Day9/Main9";

import Param from "./Productss/Param";
import Day8 from "./Day8/HOC";
import Day10 from "./Day10/Day10";

const Router = () => {
  const students = [
    { name: "Ranjit", age: "20", isStudent: true },
    { name: "Rahul", age: 22, isStudent: true },
    { name: "Priya", age: 21, isStudent: false },
  ];

  const Moviedata = [
    {
      name: "Captain America",
      des: "The Winter soldier",
      imageurl:
        "https://c4.wallpaperflare.com/wallpaper/328/294/532/iron-man-and-captain-america-civil-war-movie-hd-desktop-wallpaper-preview.jpg",
      desc: "Steve Rogers teams up with Natasha Romanoff to battle a powerful enemy.",
    },
  ];

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/prod/:prodId" element={<Param />} />
        {/* <Route
          path="/student"
          element={
            <>
              {students.map((item, index) => (
                <Student
                  key={index}
                  name={item.name}
                  age={item.age}
                  isStudent={item.isStudent}
                />
              ))}
            </> */}
        {/* } */}
        {/* /> */}

        <Route path="/product" element={<Products />} />

        <Route path="/movie" element={<MovieBooking obj={Moviedata} />} />

        <Route path="/dayfour" element={<Day4 />} />
        <Route path="/dayfive" element={<Day5 />} />
        <Route path="/daysix" element={<Day6 />} />
        <Route path="/dayseven" element={<Day7 />} />
        <Route path="/productview" element={<ProductView />} />
        <Route path="/hoc1" element={<Day8 />} />
        <Route path="/hoc2" element={<Day9 />} />
        <Route path="/daynine" element={<Main9 />} />
        <Route path="/dayten" element={<Day10 />} />
      </Routes>
    </div>
  );
};

export default Router;
