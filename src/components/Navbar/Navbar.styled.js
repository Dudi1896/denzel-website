import styled from "styled-components";
import bg from "../../assets/images/bg.svg";

export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border: solid red 2px;
    background-color: #1f1f1f;
    background-image: url(${bg}); 
    background-size: cover;
    z-index: 1;
    width: inherit;
    margin-left: auto;
    margin-right: auto;

    position: ${props => props.sticky ? "none" : "fixed"};
    animation: ${props => props.sticky ? "none" :"moveDown 0.5s ease-in-out"};

    
    @keyframes moveDown {
      from {
        transform: translateY(-5rem);
      }
      to {
        transform: translateY(0rem);
      }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 97vmin;
    }
    
  
    
    img{
      width: 4rem;
      height: 4rem;
      margin-right: 0.5rem;
      animation: rotate 0.7s ease-in-out 0.5s;
    }

    h1{
      margin-right: 8rem;
    }
 
}`;
