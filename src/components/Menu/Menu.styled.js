import styled from "styled-components";

export const StyledMenu = styled.nav.attrs(props => ({className: props.className,}))`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({ theme }) => theme.MidPrimary};
    height: min(50vmin);
    text-align: left;
    padding: 5rem 2rem;
    position: absolute;
    width: min(40vmin);
    top: 45px;
    right: 0;
    transition: transform 0.3s ease-in-out;
    position: fixed;
    transform: ${({ open }) =>
      open ? "translateX(-12%)" : "translateX(100%)"};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        z-index: 3;
        height: 100vh;
        transform: ${({ open }) =>
          open ? "translateX(0%)" : "translateX(100%)"};
        top: 0px;
        padding: 10rem 0rem;
        position: fixed;
}

.menu-items {
    font-size: min(2.25vmin);
    padding: min(1.5vmin);
    text-align: left;
    color: ${({ theme }) => theme.LightPrimary}; 
    text-decoration: none;
    transition: color 0.3s linear;

    a{
        color: inherit;
        text-decoration: none;
    }

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
    justify-content: center;
    font-size: min(2.75vmin);
    margin-top: min(5vmin);

    .social {
        @media (max-width: ${({ theme }) => theme.mobile}) {
            padding: 0rem 3.6rem;
        }

        a{
            color: ${({ theme }) => theme.LightPrimary};
            padding: min(3.5vmin);

            &:hover {
                color: ${({ theme }) => theme.primaryHover};
            }
        
            @media (max-width: ${({ theme }) => theme.mobile}) {
                font-size: 1.5rem;
            }
        }

    }
}
`;
