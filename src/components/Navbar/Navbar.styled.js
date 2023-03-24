import styled from "styled-components";

export const StyledNavbar = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  left: 0;
  top: 0;
  justify-content: space-between;
  padding: 1rem 1.5rem 1rem 1.5rem;
  position: absolute;
  z-index: 1;
  width: 100%;
  position: fixed;
  animation: moveDown 1.2s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    top: 0;
    left: 0;
  }

  .navbar--logo {
    width: max(7vmin);
    height: max(7vmin);
    margin: 1.2rem 0.5rem 0.5rem 4.5rem;
    animation: rotate 0.7s ease-in-out 1.2s;
    z-index: 9;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: max(7vmin);
      width: max(7vmin);
      margin: 1.8rem 0rem 0rem 2rem;
      z-index: 9;
    }
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
