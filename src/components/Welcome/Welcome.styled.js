import styled from "styled-components";
import bg from "../../assets/images/bg.svg"

export const StyledWelcome = styled.div`
    background-image: url(${bg}); 
    background-color: #1f1f1f;
    background-attachment: fixed;
    background-size: cover;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;  
    width: min(200vmin);
    } 

    img{
        width: 9rem;
        height: 9rem;
        margin-right: 0.5rem;
        animation: rotate 0.7s ease-in-out 0.5s;
        border: 2px solid ${({ theme }) => theme.PrimaryColor};
        border-radius: 100%;
    }

    button {
        background: ${({ theme }) => theme.LightPrimary};
        color: ${({ theme }) => theme.PrimaryColor};
        font-size: 2em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 35px;
    }
}
`;
