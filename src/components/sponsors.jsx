import React from "react";
import styled from "styled-components";

const SponsorSection = styled.div`
    max-width: 100vw;
    padding: 60px 200px;
    text-align: center;
    background-color: white !important;
`;

const Container = styled.div`
    max-width: 800px;
    margin: auto;
`;

const SectionTitle = styled.div`
    margin-bottom: 40px;
`;

const Title = styled.h2`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: rgb(51, 51, 51);
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
        left: 50% !important;
        transform: translateX(-50%) !important;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s;
    width: 400px;
    max-width: 100%;
    text-align: center;
    margin: auto auto 40px;

    &:hover {
        box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
    }
`;

const SponsorLogo = styled.img`
    width: 300px;
    height: 240px;
    transition: transform 0.3s;
    object-fit: contain;

    &:hover {
        transform: scale(1.1);
    }
`;

const SponsorTitle = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #333;
`;

export const Sponsors = () => {
  return (
    <SponsorSection id="sponsorship">
      <Container>
        <SectionTitle>
          <Title>Sponsorship</Title>
        </SectionTitle>
        <Card>
          <a
            href="https://www.bitdefender.ro" id="sponsors"
          >
            <SponsorLogo src={process.env.PUBLIC_URL + "/img/logos/bitdefender_logo.png"} alt="Bitdefender logo"/>
          </a>
            <SponsorTitle>Sponsor</SponsorTitle>
        </Card>
        <Card>
          <a
            href="https://www.hotelunirea.ro/ro/" id="sponsors"
          >
            <SponsorLogo src={process.env.PUBLIC_URL + "/img/logos/hotel_unirea_icon.jpg"} alt="Bitdefender logo"/>
          </a>
            <SponsorTitle>Hospitability partner</SponsorTitle>
        </Card>
      </Container>
    </SponsorSection>
);
};
