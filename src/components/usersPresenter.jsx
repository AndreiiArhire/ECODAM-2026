import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
    width: 100%;
    margin-bottom: 20px;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const ComingSoonText = styled.div`
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: #666;
    font-size: 20px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: #f2f2f2;
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid #f0f0f0;
    overflow: hidden;

`;

const ProfileImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const Name = styled.h4`
    text-align: center;
    margin-block: 15px 10px !important;
    font-size: 18px;
    color: #333;
`;

const University = styled.p`
    text-align: center;
    font-size: 14px;
    color: #666;
    line-height: 24px;
    margin: 0 !important;
`;

const Location = styled.p`
    text-align: center;
    font-size: 14px;
    color: #888;
    line-height: 24px;
    margin: 0 !important;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 14px;
`;

const SocialLink = styled.a`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #3f6798;
    background: #f3f7fc;
    border: 1px solid #dbe8f5;
    font-size: 18px;
    transition: all 0.2s ease;
    text-decoration: none;

    &:hover {
        color: #ffffff;
        background: #3f6798;
        border-color: #3f6798;
        transform: translateY(-2px);
    }
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

const TeamContainer = styled.div`
    // margin-top: 50px;
    padding: 100px 20px;
    background: #f8f8f8;
`;

const Section = styled.div`
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

const MembersContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
`;

const UserCard = ({ user }) => {
  return (
    <Card className="col-md-4">
      <ImageContainer>
        <ProfileImage
          src={user.img || "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}
          alt={`${user.firstName} ${user.lastName}`}
          style={!user.img ? { marginTop: "15px", scale: "1.1" } : undefined}
        />
      </ImageContainer>

      <Name>{user.firstName} {user.lastName}</Name>
      {user.university && <University className="text-muted">{user.university}</University>}
      {user.location && <Location className="text-muted">{user.location}</Location>}

      {(user.linkedin || user.scholar) && (
        <SocialLinks>
          {user.linkedin && (
            <SocialLink
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label={`${user.firstName} ${user.lastName} LinkedIn`}
            >
              <FaLinkedin />
            </SocialLink>
          )}

          {user.scholar && (
            <SocialLink
              href={user.scholar}
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
              aria-label={`${user.firstName} ${user.lastName} Google Scholar`}
            >
              <SiGooglescholar />
            </SocialLink>
          )}
        </SocialLinks>
      )}
    </Card>
  );
};

export const UsersPresenter = ({id, title, data, isToBeSorted = false}) => {
  return (
    <TeamContainer id={id}>
      <ResponsiveContainer>
        <Section>
          <Title>{title}</Title>
          {data ? (
            <MembersContainer>
              {data
                .sort((a, b) => isToBeSorted ? a.lastName.localeCompare(b.lastName) : 1)
                .map((user, i) => (
                <UserCard key={`${user.firstName}-${i}`} user={user}/>
              ))}
            </MembersContainer>
          ) : <ComingSoonText>Coming soon!</ComingSoonText>}
        </Section>
      </ResponsiveContainer>
    </TeamContainer>
  );
};
