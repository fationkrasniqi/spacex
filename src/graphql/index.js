import {ApolloClient, InMemoryCache} from '@apollo/client';
import {GET_SPACE_MISSONS, GET_ROCKET} from "./queries"

export const apolloClient = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),

});

class SpaceService {
    async getSpaceMissions(limit = 10){
        try {
             const response = await apolloClient.query({
                query: GET_SPACE_MISSONS,
                variables: {limit}
             });

             if(!response || !response.data ) 
              throw new Error("Cannot get rocket launches list")
             return response.data.launchesPast
 
        }  catch(err) {
            throw err
        }
    }

    async getRocket(id){
        try {
            const response = await apolloClient.query({
               query: GET_ROCKET,
               variables: {id}
            });

            if(!response || !response.data ) 
             throw new Error("")
            return response.data.rocket

       } catch(err) {
            throw err
       }
    }
}

export default new SpaceService();