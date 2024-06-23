import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import React from "react";
// icon importing
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import logo from "../img/logo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import { fadeIn } from "../animation";
// rating import
import starempty from "../img/star-empty.png";
import fullstar from "../img/star-full.png";
const Gamedetial = ({ pathId }) => {
  const navigate = useNavigate();
  // exit detail
  const exitdetailelement = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  // platform
  const getplatform = (platform) => {
    switch (platform) {
      case "PlayStation 4" || "PlayStation 5":
        return playstation;
      case "Nintendo Switch":
        return nintendo;
      case "Xbox Series S/X" || "Xbox One":
        return xbox;
      case "PC" || "LinuxPC":
        return steam;
      case "iOS" || "macOS":
        return apple;

      default:
        return gamepad;
    }
  };
//   star-rating
const getstars=()=>{
    const stars=[];
    const rating=Math.floor(game.rating)
    for (let i = 0; i <=5; i++) {
        if (i<=rating) {
            stars.push(<img key={i}alt="star"src={fullstar}></img>)
            
        }else{
            stars.push(<img key={i}alt="star"src={starempty}></img>)
        }
        
        
    }
    return stars
}
  const { screen, game, isloading } = useSelector((state) => state.detail);
  // console.log(game)
  // console.log(screen)
  return (
    <>
      {!isloading && (
        <Cardshadaw variants={fadeIn}initial="hidden" animate="show" className="shadow" onClick={exitdetailelement}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}{getstars()}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game?.platforms?.map((data) => (
                    <img
                      layoutId={`title${pathId}`}
                      key={data.platform.id}
                      src={getplatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img variants={fadeIn}initial="hidden" animate="show"
                layoutId={`image${pathId}`}
                src={game.background_image}
                alt=""
              />
            </Media>
            <Description variants={fadeIn}initial="hidden" animate="show">
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results?.map((screen) => (
                <img src={screen.image} key={screen.id} alt="" />
              ))}
            </div>
          </Detail>
        </Cardshadaw>
      )}
    </>
  );
};
const Cardshadaw = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: irem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default Gamedetial;
