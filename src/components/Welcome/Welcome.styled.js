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
    text-align: center;  
    width: 100%;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        justify-content: center;
    }


.container {
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 2px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      justify-content: center;
  }

  .box {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 5vw;

    .title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;

      .block {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
      }

      h1 {
        font-family: "Segoe UI";
        color: ${({ theme }) => theme.PrimaryColor};
        font-size: max(8vmin);
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;
        }
      }
    }

    .role {
      width: 90%;
      position: relative;
      display: flex;
      align-items: center;
      height:  min(10vmin);
      margin-top: 1px;

      .block {
        width: 0%;
        height: inherit;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0%;
        font-weight: 900;
        font-family: "Segoe UI";
        color: ${({ theme }) => theme.DarkPrimary};
        font-size: max(3vmin);
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}


@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
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


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: ${({ theme }) => theme.DarkPrimary};
    border: 1px solid red;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.DarkPrimary};
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: max(1.25vmin);
    height: max(1.25vmin);
    background: ${({ theme }) => theme.DarkPrimary};
    border: 0px solid #222;
    bottom: 13px;

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
