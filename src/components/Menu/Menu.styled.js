import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({ theme }) => theme.MidPrimary};
    height: min(60vmin);
    text-align: left;
    padding: 4rem 2rem;
    position: absolute;
    width: min(40vmin);
    top: 45px;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) =>
      open ? "translateX(12%)" : "translateX(-100%)"};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        z-index: 3;
        height: 100vh;
        transform: ${({ open }) =>
          open ? "translateX(0%)" : "translateX(-100%)"};
        top: 0px;
        padding: 8rem 0rem;
}

.menu-items {
    font-size: min(2.25vmin);
    padding: min(1.5vmin);
    text-align: left;
    color: ${({ theme }) => theme.LightPrimary}; 
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.25rem;
        text-align: left;
        padding: 1.5rem 3.45rem;
    }

&:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
}

.box-social{
    display: flex; 
    justify-content: left;
    font-size: 4.5rem;

    .social {
        padding: min(1.5vmin);
        text-align: center;
        font-size: 4.5rem;
        
    a{
        color: ${({ theme }) => theme.LightPrimary};
        padding: 1.5rem 1.5rem 1.5rem 0;
        font-size: min(3vmin);

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    
        @media (max-width: ${({ theme }) => theme.mobile}) {
            text-align: center;
            font-size: 1.5rem;
        }
    
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        padding: 2.5rem 3.5rem;
    }
}



// .hello {

//     @media (max-width: ${({ theme }) => theme.mobile}) {
//         font-size: 1.25rem;
//         text-align: left;
//         paddingRight:  3.45rem;
//     }
  
//   };
`;
