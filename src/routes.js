import React from "react";
import { Redirect, Routes, Route, BrowserRouter, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import GuestBooking from "./components/GuestBooking/GuestBooking";
import GuestMain from "./GuestMain";
import CateringMain from "./CateringMain";
import GenInfo from "./GenInfoMain";
import RoomPriceMain from "./RoomPriceMain";
import GenerateBillsMain from "./GenerateBillsMain";

function initializeRoutes() {
  console.log("hello");
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/catering" element={<CateringMain />} />
        <Route exact path="/geninfo" element={<GenInfo />} />
        <Route exact path="/room/priceupdate" element={<RoomPriceMain />} />
        <Route exact path="/generatebills" element={<GenerateBillsMain />} />
        <Route exact path="/" element={<GuestMain />}></Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

export default initializeRoutes;
