import Services from '../Components/service/Servicepage';
import Digital from "./DigitalMarket/Digital-marketing";
import Navbar from './Navbar/Navbar';
export default function Home(){
    return(
        <div>
            <Navbar />
            <Services />
            <Digital /> 
        </div>
    )
}