import styled from "styled-components";

export const StyledBurger = styled.button.attrs(props => ({className: props.className,}))`
    top: 5%;
    right: 5.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: max(5.0vmin);
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
    position: fixed;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 5%;
        right: 2.5rem;
        height: max(7.0vmin);
        position: ${({ open }) => open ? "fixed" : "absolute"};
    }
     
    div {
        width: max(5.0vmin);
        height: 0.25rem;
        background: ${({ theme, open }) => open ? theme.LightPrimary : theme.DarkPrimary};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;   

        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: max(6.5vmin);
        }
        
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



 