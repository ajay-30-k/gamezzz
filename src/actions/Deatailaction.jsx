import axios from 'axios';
import { gamedetailsurl,gamescreenshoturl, gamesearcgurl } from '../API';
export const loaddetail=(id)=>async(dispatch)=>{
    dispatch({
        type:"LOADING_DETAIL"
    })
    const detalidata= await axios.get(gamedetailsurl(id))
    const screenshotdata= await axios.get(gamescreenshoturl(id))
try{
    dispatch({
        type:"GET_DETAIL",
        payload:{
            game:detalidata.data,
            screen:screenshotdata.data
        }
    })
 } catch (error) {
        console.error("Error fetching game details or screenshots", error);
      }

}



// Action to fetch search results


  // Filter games based on age and agreement
 

