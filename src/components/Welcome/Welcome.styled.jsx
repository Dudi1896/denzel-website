import styled from "styled-components";
import bg from "../../assets/images/bg.svg";

export const StyledWelcome = styled.div`
    background-image: url(${bg}); 
    background-color: cream;
    background-attachment: fixed;
    background-size: cover;
    height: 87vh;
    display: flex;
    justify-content: right;
    align-items: center;
    text-align: center;  
    width: 99vw;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        justify-content: center;
    }

    img{
        width: 20rem;
        margin-right: 15.5rem;
        animation: rotate 0.7s ease-in-out 0.5s;
        background-color: cream;
        border-radius: 10%;
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            margin: 0;
            justify-content: center;
        }
    }

    button {
        background: ${({ theme }) => theme.LightPrimary};
        color: ${({ theme }) => theme.PrimaryColor};
        font-size: 2em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 3px solid ${({ theme }) => theme.PrimaryColor};
        border-radius: 35px;
    }


    

        :root {
        --dark #111
        --light #fefefe
        --color var(--dark)
        --bg var(--light)
        }

        @media (prefers-color-scheme: dark) {
        --color white
        --bg black
        }

        body {
        background-color black
        display flex
        align-items center
        justify-content center
        border: 2px white green
        min-height 100vh
        font-size 3.5rem
        font-weight bold
        }

        p {
        max-width 350px
        letter-spacing -9px
        border 2px solid red
        }

        {
        &[data-scroll='in']
        [data-char]:after
            animation-name glitch-switch
        }

        {
        .reveal--2 [data-char]:after
        animation-iteration-count var(--count)
        }


        p:nth-of-type(1) {
        position absolute
        opacity 0
        }

        {
        .word
        position relative
        display inline-block
        }

        [data-char] {
        color transparent
        position relative
        }

        &:after {
        --txt attr(data-char)
        animation-duration .2s
        animation-delay .5s
        animation-timing-function steps(1)
        animation-fill-mode backwards
        content var(--txt)
        color var(--color)
        position absolute
        left 0
        top 0
        }

        @keyframes glitch-switch {
        0%
        content var(--char-0)
        10%
        content var(--char-1)
        20%
        content var(--char-2)
        30%
        content var(--char-3)
        40%
        content var(--char-4)
        50%
        content var(--char-5)
        60%
        content var(--char-6)
        70%
        content var(--char-7)
        80%
        content var(--char-8)
        90%
        content var(--char-9)
        100%
        content var(--txt)
        }



}
`;
