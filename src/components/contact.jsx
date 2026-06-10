import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 45px 0 35px;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  color: rgba(255, 255, 255, 0.75);
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin-top: 0;
  margin-bottom: 15px;
  padding-bottom: 15px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    background: rgba(255, 255, 255, 0.3);
    height: 4px;
    width: 60px;
    bottom: 0;
    left: 0;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 30px;
`;

const ContactLabel = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 12px;
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
`;

const CampusMap = styled.img`
  width: 500px;
  height: 520px;
  object-fit: contain;
  transition: transform 0.3s;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 410px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 480px;
    border: none;
    margin-top: -70px;
  }
`;

const Footer = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const iframeHtml = `
  <iframe 
    src="https://www.google.com/maps/d/u/0/embed?mid=1MfPvgzi8MeqdEnLBV6dvyxUR7u5OU7c&ehbc=2E312F&noprof=1&ll=47.175376, 27.579017&z=14.9" 
    style="border: 0;" 
    allowfullscreen
    frameborder="0"
  ></iframe>
`;

export const Contact = () => {
  return (
    <div>
      <Section id="contact">
        <Container>
          <ContactInfo>
            <SectionTitle>Contact Info</SectionTitle>

            <ContactItem>
              <ContactLabel>
                <i className="fa fa-map-marker"></i> Address
              </ContactLabel>
              <ContactText>
                16, General Henri Berthelot Street, 700483 - Iasi, Romania
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactLabel>
                <i className="fa fa-envelope-o"></i> Email
              </ContactLabel>
              <ContactText>summer-school@info.uaic.ro</ContactText>
            </ContactItem>
          </ContactInfo>

          <CampusMap
            src={process.env.PUBLIC_URL + "/img/logos/map_univ_eng.png"}
            alt="University campus map"
          />
        </Container>
      </Section>

      <IframeContainer dangerouslySetInnerHTML={{ __html: iframeHtml }} />

      <Footer id="footer">
        <div className="container">
          <p>&copy; 2026 Ecodam Summer School</p>
        </div>
      </Footer>
    </div>
  );
};
