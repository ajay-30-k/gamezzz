const base_url = "https://api.rawg.io/api/";
const api_key = '1a05bb334f3a4cf39f34d2602431cb1c';

// Dynamic month updater
const getcurrentmonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getcurrentday = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentyear = new Date().getFullYear();
const currentmonth = getcurrentmonth();
const currentday = getcurrentday();
const currentdate = `${currentyear}-${currentmonth}-${currentday}`;

const lastyear = `${currentyear - 1}-${currentmonth}-${currentday}`;
const nextyear = `${currentyear + 1}-${currentmonth}-${currentday}`;

// Popular games
const popular_games = `games?key=${api_key}&dates=${lastyear},${currentdate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?key=${api_key}&dates=${currentdate},${nextyear}&ordering=-added&page_size=12`;
const new_games = `games?key=${api_key}&dates=${lastyear},${currentdate}&ordering=-released&page_size=12`;

// Game details and screenshots
// export const gamedetailsurl = (game_id) => {
//   return `${base_url}games/${game_id}?key=${api_key}
//   `;
// };
export const gamedetailsurl = (game_id) => {
  return `${base_url}games/${game_id}?key=${api_key}`;
};

export const gamescreenshoturl = (game_id) => {
  return `${base_url}games/${game_id}/screenshots?key=${api_key}`;
};

export const populergamesurl = () => {
  return `${base_url}${popular_games}`;
};

export const upcominggamesurl = () => {
  return `${base_url}${upcoming_games}`;
};

export const newgameurl = () => {
  return `${base_url}${new_games}`;
};
export const gamesearcgurl = (game_name) => {
  return `${base_url}games?search=${game_name}&page_size=12&key=${api_key}`;
};