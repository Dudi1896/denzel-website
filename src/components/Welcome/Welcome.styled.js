import styled from "styled-components";
import bg from "../../assets/images/herobg_auto_x2_colored_light_ai.jpg";


export const StyledWelcome = styled.div`
  background-image: url(${bg});
  background-attachment: fixed;
  background-size: cover;
  height: 87vh;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    padding-top: 20px;
  }

  .container {
    width: 99vw;
    display: flex;
    padding: 2px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      justify-content: center;
      margin-top: 40px;
    }

    .box {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 5vw;

      h1 {
        font-family: "Segoe UI";
        color: ${({ theme }) => theme.PrimaryColor};
        font-size: max(10vmin);
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;
      }
    }

    p {
      animation: secFadeIn 2s forwards;
      animation-delay: 3.2s;
      opacity: 0%;
      font-weight: 900;
      font-family: "Segoe UI";
      color: ${({ theme }) => theme.DarkPrimary};
      font-size: max(4vmin);
      text-transform: uppercase;
      letter-spacing: 5px;
    }
  }

  @keyframes mainFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  @keyframes secFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;
