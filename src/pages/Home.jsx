import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadgames } from "../actions/Gamesaction";
import Game from "../componets/Game";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Gamedetial from "../componets/Gamedetial";
import { useLocation } from "react-router";
import Popup from "../componets/Popup";
import { fadeIn } from "../animation";
const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { populargames, newgames, upcoming, searched, userChoice } = useSelector(
    (state) => state.games
  );
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (userChoice.age !== null) {
      setShowPopup(false);
      dispatch(loadgames());
    }
  }, [userChoice.age, dispatch]);

  return (
    <>
      {showPopup && <Popup variants={fadeIn}initial="hidden" animate="show" />}
      {!showPopup && (
        <Gamelist variants={fadeIn}initial="hidden" animate="show">
          <LayoutGroup type='crossfade'>
            <AnimatePresence>{pathId && <Gamedetial pathId={pathId} />}</AnimatePresence>
            {searched.length ? (
              <div className="search">
                <motion.h2>Searched Games</motion.h2>
                <Games variants={fadeIn}initial="hidden" animate="show">
                  {searched.map((game) => (
                    <Game variants={fadeIn}initial="hidden" animate="show"
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                    />
                  ))}
                </Games>
              </div>
            ) : (
              ""
            )}
            <motion.h2 variants={fadeIn}initial="hidden" animate="show">Upcoming Games</motion.h2>
            <Games variants={fadeIn}initial="hidden" animate="show">
              {upcoming.map((game) => (
                <Game variants={fadeIn}initial="hidden" animate="show"
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
            <h2 variants={fadeIn}initial="hidden" animate="show">Popular Games</h2>
            <Games variants={fadeIn}initial="hidden" animate="show">
              {populargames.map((game) => (
                <Game variants={fadeIn}initial="hidden" animate="show"
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
            <motion.h2>New Games</motion.h2>
            <Games variants={fadeIn}initial="hidden" animate="show">
              {newgames.map((game) => (
                <Game variants={fadeIn}initial="hidden" animate="show"
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </LayoutGroup>
        </Gamelist>
      )}
    </>
  );
};

const Gamelist = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
