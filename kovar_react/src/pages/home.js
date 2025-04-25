import Cabbit from "../assets/cabbit.jpg"
import CoreNavbar from "../components/navbar"

export default function Home(){
    return( 
    <>
    <div>
        <CoreNavbar/>
    <img src={Cabbit}></img>
    </div>
    </>
    )
}