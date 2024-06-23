import React from 'react'
import {styled,createGlobalStyle} from "styled-components";
import {motion}from'framer-motion';
const Globalstyle = createGlobalStyle  `
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgrey;
        }
    }
    body{
        width:100%;
    }
    h2{
        font-size:3rem;
        color:#ff6767
    }
    h3{
        font-size:1.3rem;
        padding:1.5rem 0rem;
        color:#333;

    }
    P{
        font-size:1.2rem;
        line-height:200%;
        color:#696969;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    img{
        display:block;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
      }
`

export default Globalstyle