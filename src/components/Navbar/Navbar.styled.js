import styled from "styled-components";
import bg from "../../assets/images/bg.svg";

export const StyledNavbar = styled.nav.attrs(props => ({className: props.className,}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.0rem 1.5rem 1.0rem 1.5rem;
  position: absolute;
  z-index: 1;
  width: 100%;

  background: #333;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 1px #222;
  animation: moveDown 0.5s ease-in-out;


.navbar--logo {
  width: min(5.0vmin);
  height: min(5.0vmin);
  margin: 0.5rem;
  animation: rotate 0.7s ease-in-out 0.5s;
}

@keyframes moveDown {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0rem);
  }
}
`;

// export const StyledNavbar = styled.nav`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding-left: 20px;
//     padding-right: 20px;
//     border: solid red 2px;
//     background-color: #1f1f1f;
//     background-image: url(${bg}); 
//     background-size: cover;
//     z-index: 1;
//     width: inherit;
//     margin-left: auto;
//     margin-right: auto;

//     position: ${props => props.sticky ? "none" : "fixed"};
//     animation: ${props => props.sticky ? "none" :"moveDown 0.5s ease-in-out"};

    
//     @keyframes moveDown {
//       from {
//         transform: translateY(-5rem);
//       }
//       to {
//         transform: translateY(0rem);
//       }
//     }

//     @media (max-width: ${({ theme }) => theme.mobile}) {
//         width: 97vmin;
//     }
    
  
    
//     img{
//       width: 4rem;
//       height: 4rem;
//       margin-right: 0.5rem;
//       animation: rotate 0.7s ease-in-out 0.5s;
//     }

//     h1{
//       margin-right: 8rem;
//     }
 
// }`;