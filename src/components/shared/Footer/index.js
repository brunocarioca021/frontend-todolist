import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDev } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer text-center text-md-left font-small pt-4 mt-4">
        <div className="footer_social" >
            <a href="https://github.com/brunocarioca021">
                <FaGithub size="30" color="black"/>
            </a>
           
            <a href="www.linkedin.com/in/bruno-pereira-dutra">
                 <FaLinkedin size="30" color="blue"/>   
            </a>
            <p className="footer_copyright">Made with by <FaDev/> Bruno Dutra</p>
        </div>
    </footer>
    )
}
export default Footer;