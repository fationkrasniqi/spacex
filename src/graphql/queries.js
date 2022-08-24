import gql from "graphql-tag";

export const GET_SPACE_MISSONS = gql `
    query getSpaceMissions($limit: Int!){
        launchesPast(limit: $limit){
            mission_name
            launch_site{
                site_name_long
            }
            links {
                flickr_images
            }
            rocket{
                rocket_name
                rocket {
                    id
                }
            }
            ships{
                image
            }
            id
        }
    }
`;

export const GET_ROCKET = gql `
    query getRocket($id: ID!){
        rocket(id: $id){
            id
            active
            boosters
            company
            cost_per_launch
            country
            description
            diameter {
              feet
              meters
            }
            engines {
              engine_loss_max
              layout
              version
              number
              propellant_1
              propellant_2
            }
            first_flight
            first_stage {
              burn_time_sec
              engines
              fuel_amount_tons
              reusable
              thrust_sea_level {
                kN
                lbf
              }
              thrust_vacuum {
                kN
                lbf
              }
            }
            height {
              feet
              meters
            }
            landing_legs {
              material
              number
            }
            mass {
              kg
              lb
            }
            name
            payload_weights {
              id
              kg
              lb
              name
            }
            stages
            success_rate_pct
            type
            wikipedia
            second_stage {
              burn_time_sec
              engines
              fuel_amount_tons
            }
        }
    }
`;