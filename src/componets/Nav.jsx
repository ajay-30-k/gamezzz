import React, { useState } from "react";
import logo from "../img/logo.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchsearch ,clearsearch,setWarningMessage} from "../actions/Gamesaction";
import { useDispatch,useSelector } from "react-redux";
import { fadeIn } from "../animation";

const Nav = () => {
  const dispatch=useDispatch()
  const [textinput,settextinput]=useState()
  const [searchTerm, setSearchTerm] = useState('');
  const { userChoice } = useSelector((state) => state.games);

  const inputhandle=(e)=>{
    settextinput(e.target.value)

  }
  const submitbuto=(e)=>{
    e.preventDefault();
    if (textinput.trim()) {
      if (userChoice && userChoice.age < 22 && /sex|porn|bitch|witch/i.test(textinput)) {
        dispatch(setWarningMessage("You are not allowed to search for restricted content."));
      } else {
        dispatch(fetchsearch(textinput));
      }
      settextinput('');
  }
}
  const clearsearch=()=>{
    dispatch({type:"CLEAR_SEARCHED"})
  }
  

  const handleClearSearch = () => {
    setSearchTerm('');
    dispatch(clearsearch());
  };
  return (
    <Styledmotionnav variants={fadeIn}initial="hidden" animate="show">
      <Logo onClick={clearsearch}>
        <img src={logo} alt="" />
        <h1>GAMEZZ</h1>
        </Logo>
        <form action="" className="search">
        <input value={textinput} onChange={inputhandle} type="text" placeholder="Search for games..." />
        <button onClick={submitbuto} type="submit">search</button>
        </form>
        
      
    </Styledmotionnav>
  );
};
const Styledmotionnav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    font-weight: bold;
    outline: none;
  }
  button{
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
display: flex;
justify-content: center;
padding: 1rem;
cursor: pointer;
img{
    height: 2rem;
    width: 2rem;
}

`;
export default Nav;
