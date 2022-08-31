import styled from "styled-components";

export const StyledWelcome = styled.div`
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;   

    img{
        width: 9rem;
        height: 9rem;
        margin-right: 0.5rem;
        animation: rotate 0.7s ease-in-out 0.5s;
        border: 2px solid red;
        border-radius: 100%;
    }

    button {
        background: ${(props) => (props.primary ? "palevioletred" : "white")};
        color: ${(props) => (props.primary ? "white" : "palevioletred")};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    }
}
`;
