import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
    padding: 50px 20px;
    background: #f8f8f8;
    max-width: 100vw;
`;

const ResponsiveContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;

    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

const Title = styled.h2`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: #333333 !important;
    text-align: center;
    position: relative;
    display: inline-block;
    margin-bottom: 40px;

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

const MembersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`;

const Card = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s, transform 0.2s;
    width: 100%;
    margin-bottom: 20px;
    text-decoration: none;
    color: inherit;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
        text-decoration: none;
        color: inherit;
    }
`;

const ProfileImageContainer = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid #f0f0f0;
    overflow: hidden;
    background: linear-gradient(to left, #5ca9fb 0%, #6372ff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const YearLabel = styled.div`
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    line-height: 1.2;
`;

const Name = styled.h4`
    margin-block: 15px 10px !important;
    font-size: 18px;
    color: #333;
    text-align: center;
`;

const School = styled.p`
    text-align: center;
    font-size: 14px;
    color: #888;
    margin: 0 !important;
`;

const editions = [
    {
        label: "ECODAM 2025",
        year: "2025",
        description: "18th Edition",
        image: null,
        href: "https://events.info.uaic.ro/summer-school/",
    },
    {
        label: "ECODAM 2024",
        year: "2024",
        description: "17th Edition",
        image: null,
        href: "https://events.info.uaic.ro/summer-school/2024/",
    },
    {
        label: "ECODAM 2006–2023",
        year: "2006–\n2023",
        description: "Archive Editions",
        image: null,
        href: "https://profs.info.uaic.ro/vlad.radulescu/summerschool/public/",
    },
];

const EditionCard = ({ edition }) => (
    <Card href={edition.href} target="_blank" rel="noopener noreferrer">
        <ProfileImageContainer>
            {edition.image ? (
                <ProfileImage src={edition.image} alt={edition.label} />
            ) : (
                <YearLabel>{edition.year}</YearLabel>
            )}
        </ProfileImageContainer>
        <Name>{edition.label}</Name>
        <School>{edition.description}</School>
    </Card>
);

export const Editions = () => {
    return (
        <TeamContainer id="editions">
            <ResponsiveContainer>
                <Title>Previous ECODAM Editions</Title>
                <MembersContainer>
                    {editions.map((edition, i) => (
                        <EditionCard key={i} edition={edition} />
                    ))}
                </MembersContainer>
            </ResponsiveContainer>
        </TeamContainer>
    );
};
