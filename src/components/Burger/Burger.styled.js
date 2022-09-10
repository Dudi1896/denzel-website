import styled from "styled-components";

export const StyledBurger = styled.button.attrs(props => ({className: props.className,}))`
    position absolute;
    top: 2.5%;
    right: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: max(4.0vmin);

    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
    position:fixed;
    color: ${({ theme }) => theme.DarkPrimary};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 2.5%;
        right: 2.5rem;
        height: max(7.0vmin);
    }

    &:focus {
    outline: none;
    }
     
    div {
        width: max(4.0vmin);
        height: 0.25rem;
        background: ${({ theme, open }) => open ? theme.DarkPrimary : theme.PrimaryColor};
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



 