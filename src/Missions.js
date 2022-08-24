import React, {useState, useEffect} from 'react';
import './App.css';
import SpaceMission from './graphql';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import { Link, resolvePath } from 'react-router-dom';


function Missions(props) {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  };
  useEffect(() => {
    loadSpaceMission();
  },[]);
  console.log("data", data);
  return (
    <div className='container'>
    <MDBContainer style={{
        display: "grid",
        gridTemplateColumns: "resolvePath(1,2fr)",
      margin: "auto",
      padding: "15px",
      maxWidth: "720px",
      aligContent: "center",
      
    }}>
      <MDBRow>
        <h2 style={{
          alignContent: "center",
          textAlign: "center",
          paddingBottom: "100px"
        }}>SpaceX</h2>
      {data.map((item,index) =>
      <>
<Link to={'/launched/' + item.id}>
<MDBCard key={index} style={{maxWidth: "42rem", maxHeight: "44rem", paddingBottom: "20px", marginBottom: "20px", marginRight: "5px"}}>
         <MDBCardImage src={item && item.ships[0] && item.ships[0].image
         ? item.ships[0].image : "https://www.universetoday.com/wp-content/uploads/2011/03/IMG_4650a_STS-133_Ken-Kremer.jpg"
         }
         position="top"
         alt={item.mission_name}
         />
         <MDBCardBody>
          <MDBCardTitle>
          {item.mission_name}
          </MDBCardTitle>
          <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
         </MDBCardBody>
      </MDBCard>
      </Link>
      </>
      )}
      </MDBRow>

 
     
    </MDBContainer>
    </div>
  );
}

export default Missions;
