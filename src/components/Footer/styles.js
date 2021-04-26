import styled from "styled-components";

export const FooterStyles = styled.footer`
display: flex;
  /* justify-content: space-around; */
  align-items: center;
  min-height: 80px;
  height:auto;
  background-color: var(--color-soft-blue);
  padding: 0px 1rem 0px 1rem;
  justify-content:space-between;
  width:100%;
    >div{
        width:100%;
        padding:1rem;
        display:flex;
        flex-direction:column;
        padding:1.3rem 0rem 0rem 1rem;
     

        >label{
        font-size:18px;
        color: var(--color-primary);
        text-align:center;
        }
        >a{
        padding:0.3rem;
        margin-top:1rem;
        margin-bottom:0.5rem;
        width:30%;
        margin:0 auto !important;
        color:white !important;
        justify-content:center;
        text-align:center;
        border:1px solid var(--color-hover-blue);
        margin-bottom:1rem !important;
    }
   
    }
@media(max-width:995px){
  padding:1rem 1rem 0.5rem 1rem;
  justify-content:baseline;
  >div{
      width:100%;
        padding:0.5rem 0.5rem 0rem 0.5rem;
        >label{
        font-size:15px;
        color: white !important;
        }

        >a{
        padding:0.3rem;
        margin-top:1rem;
        margin-bottom:0.5rem;
        width:100%;
        color:white !important;
        justify-content:center;
        text-align:center;
        border:1px solid var(--color-hover-blue);
          
    }

    }
  
}

`;