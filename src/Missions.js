import React, {useState, useEffect} from 'react';
import './App.css';
import SpaceMission from './graphql';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import { Link, resolvePath } from 'react-router-dom';


function Missions(props) {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMissions(10);
    setData(spaceMissions);
  };
  useEffect(() => {
    loadSpaceMission();
  },[]);
  console.log("data", data);
  return (
    <div className='container'>
    <MDBContainer style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "720px",
      aligContent: "center",
      
    }}>
      <MDBRow>
        <h2 style={{
          alignContent: "center",
          textAlign: "center",
          paddingBottom: "50px"
        }}>SpaceX</h2>
      {data.map((item,index) =>
      <>
<Link to={'/launched/' + item.rocket.rocket.id}>
<MDBCard 
key={index} style={{maxWidth: "42rem", maxHeight: "44rem", paddingBottom: "20px", marginBottom: "20px", marginRight: "5px", backgroundColor:"black"}}>
         <MDBCardImage src={item.links.flickr_images.length > 0 ? item.links.flickr_images[0] :  "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/04/falcon_9_crew_dragon_getting_readied_for_the_launch_of_crew-23/23275313-2-eng-GB/Falcon_9_Crew_Dragon_getting_readied_for_the_launch_of_Crew-2_pillars.jpg"
        //  ? item.links.flickr_images[0] : "https://www.universetoday.com/wp-content/uploads/2011/03/IMG_4650a_STS-133_Ken-Kremer.jpg"
         }
         position="top"
         alt={item.mission_name}
         style={{widows: 100,height: 500}}
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
