import React, { useState, useEffect } from 'react';
import './App.css';
import SpaceMission from './graphql';
import axios from 'axios';
import { useParams } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';

function Launched ()  {
    const [data, setData] = useState([]);

    const loadSpaceMission = async () => {
      const spaceMissions = await SpaceMission.getSpaceMission(10);
      setData(spaceMissions);
    };
    useEffect(() => {
      loadSpaceMission();
    },[]);
    console.log("data", data)


    
   

  return (
    <MDBContainer
      style={{
        margin: 'auto',
        padding: '15px',
        maxWidth: '720px',
        aligContent: 'center',
      }}
    >
      <MDBRow>
        <h2
          style={{
            alignContent: 'center',
            textAlign: 'center',
            paddingBottom: '100px',
          }}
        >
          SpaceX
        </h2>
       
          <>
            <MDBCard
             
              style={{
                maxWidth: '22rem',
                maxHeight: '24rem',
                paddingBottom: '20px',
                marginBottom: '20px',
                marginRight: '5px',
              }}
            >
              <MDBCardImage
                src={
                  data.img
                }
                position="top"
                alt={data.mission_name}
              />
              <MDBCardBody>
                <MDBCardTitle>{data.mission_name}</MDBCardTitle>
                {/* <MDBCardText>{props.launch_site.site_name_long}</MDBCardText> */}
              </MDBCardBody>
            </MDBCard>
          </>
       
      </MDBRow>
    </MDBContainer>
  );
}

export default Launched;
