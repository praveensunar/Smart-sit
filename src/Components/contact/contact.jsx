import "./contact.css"
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import Navbar from '../Navbar/Navbar';


export default function Contact(){

    return(
        <div>
            <Navbar />
            <section>
        <div className="contact">
            
            <div className="contact-banner">
                    <h1>Contact Us</h1>
                <form>
                <div className="inputform"><input type="text" placeholder="Full Name*"/><FaUser /></div>
                  <div className="inputform"><input type="email" placeholder="Email Address*"/><MdOutlineMailOutline /></div>
                  <div className="inputform"><input type="text" placeholder="Phone Number*" /><FaPhoneAlt /></div>
                  <div className="inputform"><input type="text" placeholder="Company"/><FaLaptop /></div>
                  <div className="inputform"><textarea name="" id="" placeholder="How can I help you?"/><IoIosHelpCircleOutline /></div>
                    <h2>What services are you interested in?</h2>
                <div className="servicebox">
                    <div className="box">
                        <input type="checkbox" />
                            <img src="ppc-marketing.png" alt="" />
                            <label>Pay Per Click Marketing</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" />
                            <img src="seo.png" alt="" />
                            <label>Search Engine Optimization</label>

                    </div>
                    <div className="box">
                        <input type="checkbox" />
                       <img src="web-design.png" alt="" />
                       <label>Website Design &amp;Development</label>

                    </div>
                    <div className="box">
                        <input type="checkbox" />
                        <img src="email-marketing.png" alt="" />
                        <label>Email &amp; SMS Marketing</label>

                    </div>
                    <div className="box">
                        <input type="checkbox" />
                        <img src="social-media.png" alt="" />
                        <label>Social Media Management</label>

                    </div>
                    <div className="box">
                        <input type="checkbox" />
                        <img src="more.png" alt="" />
                        <label>Others</label>
                    </div>
                </div>
                <div className="submitbtn">
                <button type="submit">Get Started</button>
                <div className="Icon"> <FaAngleRight /></div> 
                </div>
                </form>
            </div>
            
        </div>
        </section>

        <section className="video">
    <video 
        preload="none" 
        controls 
        autoPlay 
        muted 
        playsInline 
        loop 
        poster="https://www.smartsites.com/media/smartsites-full-service-digital-agency.jpg"
        style={{ width: "100%", objectFit: "fill" }}
    >
        <source 
            src="https://www.smartsites.com/media/award-winning-web-design-company-1.webm" 
            type="video/webm" 
        />
        Your browser does not support the video tag.
    </video>
</section>


        <section className="follow">
            <h1>Follow SmartSites</h1>
            <ul>
                <li>
                    <a href="">
                    <img src="twitter.png" alt="" />  
                    </a>
                    <h2>Follow Us</h2>
                    <p>to get the latest!</p>
                </li>
                <li>
                    <a href="">
                    <img src="instagram.png" alt="" /> 
                    </a>
                    <h2>Join Us</h2>
                    <p>and follow our story!</p>
                </li>
                <li>
                    <a href="">
                    <img src="facebook.png" alt="" />
                    </a>
                    <h2>Like Us</h2>
                    <p>to stay in touch!</p>
                </li>
                <li>
                    <a href=""><img src="linkedin.png" alt="" /></a>
                    <h2>Connect Us</h2>
                    <p>company & industry news!</p>
                </li>
                <li>
                    <a href="">
                        <img src="pinterest.png" alt="" />
                    </a>
                    <h2>Pin Us</h2>
                    <p>recent photos</p>
                </li>
                <li>
                    <a href="">
                    <img src="web.png" alt="" />
                    </a>
                    <h2>Subscribe</h2>
                    <p>to our feed!</p>
                </li>
            </ul>
        </section>
        </div>
    );
}