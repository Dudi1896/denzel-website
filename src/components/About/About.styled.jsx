import styled from "styled-components";

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100vh;   
    width: 99vw;
    padding: 2rem;
    border: 2px solid red;
    text-align: justify;
    margin: auto;
    color: ${({ theme }) => theme.PrimaryColor};

}

`;