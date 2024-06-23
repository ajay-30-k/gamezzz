import React from "react";
import styled from "styled-components";
import {motion}from'framer-motion';
import { fadeIn } from "../animation";
// redux
import {useDispatch,useSelector} from'react-redux'
import {loaddetail}from'../actions/Deatailaction'
import { Link } from 'react-router-dom';
const Game = ({name,relesed,image,id}) => {
  const stringpathId=id.toString()
    // loaddetail
    const dispatch=useDispatch()
    const loadetailhandle=()=>{
      document.body.style.overflow="hidden"
      dispatch(loaddetail(id));
    }
  return (<Styledgame variants={fadeIn}initial="hidden" animate="show" layoutId={stringpathId} onClick={loadetailhandle}>
    <Link to={`/game/${id}`}>
    <motion.h3 variants={fadeIn}initial="hidden" animate="show" layoutId={`title${stringpathId}`}>{name}</motion.h3>
    <motion.p variants={fadeIn}initial="hidden" animate="show" layoutId={`des${stringpathId}`}>{relesed}</motion.p>
    <motion.img variants={fadeIn}initial="hidden" animate="show" layoutId={`image${stringpathId}`} src={image} alt="" srcset="" />
    </Link>
  </Styledgame>
  );
};
const Styledgame=styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
text-align: center;
border-radius: 1rem;
cursor: pointer;
   img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
   } 
`

export default Game;
