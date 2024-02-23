import ProfileNavBar from '../components/profileNavBar';
import ProfileCard from '../components/profileCard';
import Footer from '../components/Footer';
import { Button,DropdownButton,Dropdown} from "react-bootstrap";

const AddedCourse = () => {
    return ( 
        <>


        <ProfileNavBar/>


        <main style={{ display: 'flex', alignItems: 'center', minHeight: '50vh' }}>

          <div className="container">
            <div className="row gx-5">
              <div className="col-3">
                <ProfileCard/>
              </div>
              <div className="col-7">
                <h3>Advanced Styling with Responsive Design</h3>

                <DropdownButton variant="custom"style={{ marginBottom: '40px', marginTop:'60px'}} id="dropdown-basic-button" title="Assessments ">
                  <Dropdown.Item href="#/action-1">Week 2: Create a Responsive Stylesheet</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">week 4: final project photo gallery  </Dropdown.Item>
                </DropdownButton>

             
             <div class="form-group">
    <label style={{ marginBottom: '8px'}} for="projectLink">Project Link</label>
    <input style={{ marginBottom: '20px'}} type="projectLink" class="form-control" id="projectLink" ></input>
  </div>


        <div className="col">
        <Button style={{  backgroundColor: '#9A92F3' , border: 'none'}}>Upload Project</Button>{' '}
        </div>
             

              </div>
            </div>
          </div>
      </main>

      <Footer/>

        </>
     );
}
 
export default AddedCourse;