// actions/Gamesaction.jsx
import axios from "axios";
import { populergamesurl, newgameurl, upcominggamesurl, gamesearcgurl } from "../API";

// Action types
export const FETCH_GAMES = "FETCH_GAMES";
export const FETCH_SEARCHED = "FETCH_SEARCHED";
export const CLEAR_SEARCHED = "CLEAR_SEARCHED";
export const SET_USER_CHOICE = "SET_USER_CHOICE";
export const SET_WARNING_MESSAGE = "SET_WARNING_MESSAGE"; // Define new action type

// Load games
export const loadgames = () => async (dispatch, getState) => {
  const { userChoice } = getState().games; // Accessing from 'games' state slice

  const filterGames = (games) => {
    if (userChoice && userChoice.age < 22) {
      return games.filter(
        (game) => !/sex|porn|bitch|witch/i.test(game.name)
      );
    }
    return games;
  };

  const populardata = await axios.get(populergamesurl());
  const upcomingdata = await axios.get(upcominggamesurl());
  const newgamedata = await axios.get(newgameurl());

  dispatch({
    type: FETCH_GAMES,
    payload: {
      populargames: filterGames(populardata.data.results),
      upcoming: filterGames(upcomingdata.data.results),
      newgames: filterGames(newgamedata.data.results),
    },
  });
};

// Search games
export const fetchsearch = (game_name) => async (dispatch) => {
  const searchgames = await axios.get(gamesearcgurl(game_name));
  dispatch({
    type: FETCH_SEARCHED,
    payload: {
      searched: searchgames.data.results,
    },
  });
};

// Clear search
export const clearsearch = () => {
  return {
    type: CLEAR_SEARCHED,
  };
};

// Set user choice
export const setUserChoice = (age, showAdultGames) => ({
  type: SET_USER_CHOICE,
  payload: { age, showAdultGames },
});

// Set warning message
export const setWarningMessage = (message) => ({
  type: SET_WARNING_MESSAGE,
  payload: message,
});
