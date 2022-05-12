import React from 'react';
import { Link } from 'react-router-dom';
import "../Home/footer.css";
import * as Icon from 'react-bootstrap-icons';


const Footer = () => {
  return (
      <footer className= 'sticky-top text-dark pt-5 pb-3'>
      <div className='footercontainer'>
       <div className='footercontainer_company'>
         <h4 className='footercontainer_title'>Company</h4>
       <p ><Link  className='fclink' to="/About">About us</Link></p>
       <p ><Link  className='fclink' to="/About">Products</Link></p>
       <p ><Link  className='fclink' to="/About">Blog</Link></p>
        </div>
       <div className='footercontainer_resources'>
       <h4 className='footercontainer_title'>Resources</h4>
       <p ><Link  className='fclink' to="/About">FAQ</Link></p>
       <p ><Link  className='fclink' to="/About">Media</Link></p>
       <p ><Link  className='fclink' to="/About">Reach us</Link></p>
       </div>
       <div className='footercontainer_connect'>
       <h4 className='footercontainer_title'>Connect with us</h4>
       <div className='footercontainer_connecticons'>
       <p><Icon.Facebook color="rgb(12, 181, 12)" size={30} enableBackground= "rgb(12, 181, 12)" /></p>
       <p><Icon.Twitter color="rgb(12, 181, 12)" size={30} /></p>
       <p><Icon.Instagram color="rgb(12, 181, 12)" size={30} /></p>
       <p><Icon.Linkedin color="rgb(12, 181, 12)" size={30} /></p>
       </div>
       </div>
      </div>

      </footer>
  )
};

export default Footer;



