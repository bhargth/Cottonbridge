 import React from 'react'
 import "../Home/Navbar.css"; 
 import { Button, Nav, Navbar} from 'react-bootstrap';
 import {NavLink, Link} from "react-router-dom";
 import mainimage from "../../src/images/mainimage.jpg"
 import farmertoretail from "../../src/images/farmertoretail.jpg"
 import Card from 'react-bootstrap/Card';
 import * as Icon from 'react-bootstrap-icons';
 

 
 

 
 const Navmenu = () => {
  
     return (
        <div>
         <div className='navcontainer'>
          <Navbar bg="white" text="dark" >
         <div className='navcontainer__title'>
        <h1 className='navcontainer__title'>Cotton Bridge</h1>
         </div>
         <div className='navmenu'>
         <Nav className="navmenulist" >
           <ul>
           <li><NavLink exact to = '/farmerhome'>Home</NavLink></li>
           <li><Link to = "/newfarmerabout">About</Link></li>
      <Nav.Link className='navmenuitems' href="#features">Products</Nav.Link>
      <Nav.Link className='navmenuitems' href="#features">Blog</Nav.Link>
      </ul></Nav>
    <Nav className='navmenubtns'>
    <Button className='navmenubtns__register' size="md" style={{backgroundColor: "rgb(12, 181, 12)", borderradius: "4px" , marginRight: "40px", paddingRight: "20px", textAlign: "center"}}>LOGIN</Button>
    <Button className='navmenubtns__register' size="md" style={{backgroundColor: "rgb(12, 181, 12)", borderradius: "4px"}}>REGISTER</Button>
    </Nav>
         </div>
         </Navbar> 
          </div>
          <div className='firstcontainer'>
            <div className='firstcontainercontent'>
           <h2 style={{paddingBottom: "5px"}}>B2B marketplace for the Farmers <br></br>and Buyers to meet</h2>
           <p>providing information/details of other suppliers, who can<br></br> be the suppliers of machineries, fertilizers and all <br></br>other items required</p>
           <Button style={{backgroundColor: "rgb(12, 181, 12)", borderradius: "4px"}}>Learn More</Button>
            </div>
            <div className='firstcontainercontentimg'>
            <img src={mainimage} className="firstcontainercontentimg" alt="mainimage" />
            </div>
             </div>
             <div className='secondcontainer'>
               <div className='secondcontainerimg'>
               <img src={farmertoretail} className="secondcontainerimg" alt="mainimage" />
               </div>
               <div className='secondcontainercontent'>
                <h2 style={{paddingBottom: "5px"}}>About Us</h2>
                <p>Cotton Bridge, a mobile-enabled food distribution and logistics <br></br>platform that allows rural smallholder farmers to get in touch <br></br>with the urban green grocers to make up an efficient, transparent<br></br> and a formal agri-food marketplace.</p>
                <Button style={{backgroundColor: "rgb(12, 181, 12)", borderradius: "4px"}}>Know More</Button>
               </div>
             </div>
             <div className='thirdcontainer'>
               <h2 style={{paddingBottom: "10px", fontWeight: "bolder", fontSize: "35px"}}>Creating opportunities for everyone</h2>
               <p style={{paddingBottom: "10px", fontSize: "18px"}}>Platform enabling increased benefits for farmers, retailers, and consumers.</p>
               <div className='thirdcontainercards'>
               <Card className='thirdcontainercards__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.People color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h5 style={{marginLeft: "30px"}}>Benifits for Farmers</h5>
          <Card.Body class= "fs-6 p-4" >
            <Icon.Check color="rgb(12, 181, 12)" size={30} />20% more Revenue <br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />One-stop-sale<br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />Payment in 24 hours<br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />Transparent Weighing<br></br>
                      </Card.Body>
                    </Card>
                    <Card className='thirdcontainercards__second'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.Shop color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h5 style={{marginLeft: "30px"}}>Convienence for Retailers</h5>
          <Card.Body class= " fs-6 p-4" >
            <Icon.Check color="rgb(12, 181, 12)" size={30} />Competitive Pricing<br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />Doorstep Delivery<br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />High Quality graded Produce<br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />Convienent and Time saving<br></br>
                      </Card.Body>
                    </Card>
                    <Card className='thirdcontainercards__third'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.Basket2Fill color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h5 style={{marginLeft: "30px"}}>Savings for Consumers</h5>
          <Card.Body className= "fs-6 p-4" >
            <Icon.Check color="rgb(12, 181, 12)" size={30} />Hygienically handled produce<br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />Better Quality<br></br>
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />100% Traceable to farm-<br></br>Improves food safety
                      </Card.Body>
                    </Card>
               </div>
             </div>
          </div>
     )
 }
 export default Navmenu