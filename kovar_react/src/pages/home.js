import Cabbit from "../assets/cabbit.jpg"
import CoreNavbar from "../components/navbar"
import "../App.css";
import "../index.css";

export default function home(){
    return( 
    <>
    <div classname="navbar">
        <CoreNavbar/>
    </div>
    <div className="facts-container">
        <img src={Cabbit}></img>
    </div>
    </>
    )
}