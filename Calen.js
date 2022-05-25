import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { StyleSheet, Button, View, ImageBackground } from "react-native";
import moment from "moment";

const Calen=() =>{
 const [dateState, setDateState] = useState(new Date());
 const changeDate = (e) => {
   setDateState(e);
 };
 return (
   <ImageBackground
     style={{ height: "100%", width: "100%", position: "absolute" }}
     source={{
       uri: "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
     }}
   >
     <><div align="center">
       <Calendar value={dateState} onChange={changeDate} />
       <p>
         Current selected date is{" "}
         <b>{moment(dateState).format("MMMM Do YYYY")}</b>
       </p> 
       </div>
      
     </>
   </ImageBackground>
 );
}
export default Calen;