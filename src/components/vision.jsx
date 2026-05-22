import React from "react";
import styled from "styled-components";


const VisionContainer = styled.div`
    text-align: left;
    max-width: 800px;
    margin: auto;
    margin-bottom: 100px;
    // background-image: url(${process.env.PUBLIC_URL + "/img/logos/ECODAM2024.jpeg"});
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    // height: 450px;
    // width: 190%;
    // position: relative;
`;

const VisionAnchor = styled.div`
    padding: 1px !important;
    background: none !important;
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
        left: 50%;
        transform: translateX(-50%);
    }
`;


const Item = styled.div`
    margin-top: 30px;
    line-height: 1.5;
    text-align: justify;
`;

const StrongText = styled.strong`
    font-weight: bold;
`;

export const Vision = (props) => {
  return (
    <VisionContainer>
      <VisionAnchor id="vision"></VisionAnchor>
      <Title>Welcome to ECODAM 2026!</Title>
      
      <Item>The Faculty of Computer Science at Alexandru Ioan Cuza University of Iași is pleased to welcome participants to the 2026 edition of the Doctoral Summer School in Evolutionary Computing, Optimisation and Data Mining (ECODAM). Since its inaugural edition in 2005, ECODAM has grown into a significant academic event, bringing together yearly doctoral students from Romania, Republic of Moldova and Ukraine, and distinguished academics from across the world. </Item>
      <Item>Over the course of 18 successful editions, the summer school has served as a platform for advanced study, collaboration, and the exchange of ideas in key areas of Computer Science. In its <StrongText>21st year</StrongText>, ECODAM continues to evolve. This edition embraces new and influential fields such as Bioinformatics and Natural Language Processing, reflecting the broader transformations taking place within Computer Science.</Item>
      <Item>We are honored to host returning speakers of international distinction, as well as new invited experts who will contribute to this year's high level academic program. For the third consecutive year, ECODAM also features the Core Bioinformatics Workshop, further broadening the scope and depth of its content. We look forward to a stimulating and productive edition, and we thank all participants (invited speakers, PhD Students and researchers), as well as our sponsors, for contributing to the continued success of this long-standing initiative.</Item>
    </VisionContainer>
  );
};
