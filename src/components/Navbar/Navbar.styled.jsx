import styled from "styled-components";

export const StyledNavbar = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem 1rem 1.5rem;
  position: absolute;
  z-index: 1;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  animation: moveDown 0.5s ease-in-out;

  .navbar--logo {
    width: max(4vmin);
    height: max(4vmin);
    margin: 0.5rem;
    animation: rotate 0.7s ease-in-out 0.5s;
    z-index: 9;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: max(7vmin);
      width: max(7vmin);
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
