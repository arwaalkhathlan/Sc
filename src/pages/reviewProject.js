import ProfileNavBar from '../components/profileNavBar';
import ProfileCard from '../components/profileCard';
import Footer from '../components/Footer';
import { Button } from "react-bootstrap";

const ReviewProject = () => {
  return (
    <>
      <ProfileNavBar />

      <main style={{ display: 'flex', alignItems: 'center', minHeight: '50vh' }}>

        <div className="container">
          <div className="row gx-5">
            <div className="col-3">
              <ProfileCard />
            </div>
            <div className="col d-flex flex-column align-items-center">
              <p style={{ marginTop: '100px', textAlign: 'center' }}>
                You have to pass the assessment in order to be able to review the project
              </p>
              <Button style={{ backgroundColor: '#9A92F3', border: 'none', marginTop: '10px' }}>Go to Assessment</Button>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

export default ReviewProject;
