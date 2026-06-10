import React from "react";
import styled from "styled-components";

const Section = styled.div`
    padding: 100px 0 40px;
    // color: rgba(255, 255, 255, 0.75);
    background: #f8f8f8;
`;

const Container = styled.div`
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Title = styled.h2`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: rgb(51, 51, 51) !important;
    text-align: center;
    position: relative;
    display: inline-block;

    &::after {
        position: absolute;
        content: "";
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
        height: 4px;
        width: 60px;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Editions = () => {
    return (
        <Section id="editions">
            <Title>ECODAM Previous Editions</Title>
            <br/>
            <br/>
            <Container>
                <a href="https://events.info.uaic.ro/summer-school/2025/" target="_blank" rel="noopener noreferrer">
                    ECODAM 2025
                </a>
            </Container>
            <Container>
                <a href="https://events.info.uaic.ro/summer-school/2024/" target="_blank" rel="noopener noreferrer">
                    ECODAM 2024
                </a>
            </Container>
            <Container>
                <a href="https://profs.info.uaic.ro/vlad.radulescu/summerschool/public/" target="_blank" rel="noopener noreferrer">
                    ECODAM 2006 - 2023
                </a>
            </Container>
        </Section>
    );
};
