import styled from "styled-components";
import bg from "../../assets/images/bg.svg"

export const StyledWelcome = styled.div`
    background-image: url(${bg}); 
    background-color: cream;
    background-attachment: fixed;
    background-size: cover;
    height: 85vh;
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
}
`;
