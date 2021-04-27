import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Card = styled(Link)`
background-color:${(props)=>props.color?props.color:"transparent"};
border-radius:0.3rem;
padding:1rem;
display:flex;
flex-direction:column;
transition:box-shadow 0.5s ease-out;
cursor:pointer;
margin-bottom:1rem;
:hover{
   box-shadow: 1px 1.4px 5px 1px var(--color-hover-blue); 
}
>hr{
   background-color:#ddd;
   opacity:0.4;
}
`;
export const Image = styled.div`
max-width:100%;
margin-bottom:2.5rem;
>img{
//Only for svgs
display:block;
margin:0 auto;
width:300px;
height:300px;
}
`;
export const Details = styled.section`
display:flex;
flex-direction:column;
max-width:325px;
>label{
margin:0 auto;
font-size:22px;
margin-bottom:1rem;
color:${(props)=>props.fontColor?props.fontColor:""};
max-width:95%;
text-align:center;
}
>span{
font-size:18px;
color:${(props)=>props.fontColor?props.fontColor:""};
max-width:95%;
text-align:center;
}
`;