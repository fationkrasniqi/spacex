import React, { useState, useEffect } from 'react';
import './App.css';
import SpaceMission from './graphql';
import axios from 'axios';
import { useParams } from "react-router-dom";
import falcon from "./img/falcon-9.jpg";

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
    let { id } = useParams();

    const loadSpaceMission = async () => {
      console.log(id);
      const spaceMissions = await SpaceMission.getRocket(id);
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
          SpaceX Rocket
        </h2>
       
          <>
            <MDBCard
             
              style={{
                maxWidth: '42rem',
                maxHeight: '44rem',
                paddingBottom: '20px',
                marginBottom: '20px',
                marginRight: '5px',
                backgroundColor: "black"
              }}
            >
              <MDBCardImage
                src={falcon}
                position="top"
                alt={data.name}
              />
              <MDBCardBody>
                <MDBCardTitle>{data.name}</MDBCardTitle>
                <MDBCardText>Country:  {data.country}</MDBCardText>

                {/* <MDBCardText>{props.launch_site.site_name_long}</MDBCardText> */}
                <MDBCardText>{data.description}</MDBCardText>
                <MDBCardText>First Flight: {data.first_flight}</MDBCardText>
                <MDBCardText>Cost per launch: {data.cost_per_launch}</MDBCardText>




              </MDBCardBody>
            </MDBCard>
          </>
       
      </MDBRow>
    </MDBContainer>
  );
}

export default Launched;
