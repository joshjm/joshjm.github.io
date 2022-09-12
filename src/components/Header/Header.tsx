import { Link } from "react-router-dom"
import styled from "styled-components";
import { Selfie } from "./Selfie";
import { SiteTitle } from "./SiteTitle";

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #282c34;
    color: white;
    a {
        color: white;
        text-decoration: none;
        padding: 0.5rem;
    }
`;
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #282c34;
    color: white;
    a {
        color: white;
        text-decoration: none;
    }
`;
const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #282c34;
    color: white;
    min-height: 6vh;
    font-size: calc(10px + 1vmin);
    text-align: center;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <Selfie />
                <SiteTitle/>
            </LogoContainer>
            <LinkContainer>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </LinkContainer>
        </StyledHeader>

    )
}