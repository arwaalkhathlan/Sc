import ProfileNavBar from '../components/profileNavBar';
import React from 'react';
import { Button ,DropdownButton,Dropdown} from "react-bootstrap";
import '../css/myCourses.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import ProfileCard from '../components/profileCard';
const MyCourses = () => {
    return ( 
        <><ProfileNavBar />
        


        <main style={{ display: 'flex', alignItems: 'center', minHeight: '50vh' }}>

          <div className="container">

        
            <div className="row gx-5">
              <div className="col-5">
                <ProfileCard/>


             


              </div>
              <div className="col-7">
              
            <DropdownButton className="custom-dropdown"  variant="custom" style={{ marginBottom: '40px', marginTop:'60px'}} id="dropdown-basic-button" title="Course Provider ">
             <Dropdown.Item href="#/action-1">edx</Dropdown.Item>
             <Dropdown.Item href="#/action-2">coursera </Dropdown.Item>
             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton>
          
        
             <DropdownButton  variant="custom" style={{ marginBottom: '40px'}}  title="Course Name">
             <Dropdown.Item href="#/action-1">Advanced Styling with Responsive Design</Dropdown.Item>
             <Dropdown.Item href="#/action-2">ux design fundamentals </Dropdown.Item>
             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton>

             

                
             <Link to="/addedCourse">
             <Button style={{  backgroundColor: '#9A92F3' , border: 'none'}}>Add </Button>{' '}
             
             </Link>
          
         

              </div>
            </div>
          </div>
      </main>
      <Footer />
        
        </>
     );
}
 
export default MyCourses;
