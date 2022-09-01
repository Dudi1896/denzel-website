import styled from "styled-components";

export const StyledBurger = styled.button`
    position absolute;
    top: 2.7%;
    right: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: min(4.5vmin);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 3.5%;
        right: 2rem;
    }

    &:focus {
    outline: none;
    }
     
    div {
        width: min(4.5vmin);
        height: 0.25rem;
        background: ${({ theme, open }) => open ? theme.DarkPrimary : theme.PrimaryColor};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        
    
        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }
        
        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }   
      }
    }`;



 