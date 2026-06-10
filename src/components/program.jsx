import React, { useMemo, useState } from "react";
import styled from "styled-components";
import allProgram from "../data/ECODAM_2026_programme.pdf";

const ACCENT = {
  blue: "#3f6798",
  blueDark: "#2f4f78",
  blueSoft: "#dbe8f5",
  bluePale: "#f3f7fc",
  slate: "#1f2937",
  muted: "#64748b",
  border: "#e5eaf1",
  warm: "#c89b3c",
  warmSoft: "#fff7e6",
};

const programDays = [
  {
    date: "Wednesday, June 17",
    location: "Ferdinand Hall",
    sessions: [
      {
        title: "Registration",
        type: "general",
        items: [{ time: "15:00", description: "Registration" }],
      },
      {
        title: "Session 5",
        trackKey: "bio",
        track: "BioInformatics / Applied Machine Learning track",
        items: [
          {
            time: "16:30 – 17:30",
            speaker: "Jung-Hsin Lin",
            affiliation: "Academia Sinica",
            description:
              "Generative AI and Robotics for Biomedical Applications and Drug Discovery",
          },
        ],
      },
      {
        title: "Welcome Dinner",
        type: "general",
        items: [
          {
            time: "18:30",
            description: "Welcome Dinner – Panoramic Restaurant, Unirea Hotel",
          },
        ],
      },
    ],
  },
  {
    date: "Thursday, June 18",
    location: "Ferdinand Hall",
    sessions: [
      {
        title: "Registration",
        type: "general",
        items: [{ time: "09:00", description: "Registration" }],
      },
      {
        title: "Opening Session",
        type: "general",
        items: [
          {
            time: "09:30 – 10:00",
            description: "Opening Session: 21 years with ECODAM",
          },
          { time: "10:00 – 10:15", description: "Coffee break" },
        ],
      },
      {
        title: "Session 2",
        trackKey: "eco",
        track: "ECO-Mining track: Evolutionary Computing, Optimisation and Data Mining",
        items: [
          {
            time: "10:15 – 11:15",
            speaker: "Dan Simovici",
            affiliation: "University of Massachusetts at Boston",
            description: "Compressibility, Mineability and Large Language Models",
          },
          {
            time: "11:15 – 12:15",
            speaker: "Darrell Whitley",
            affiliation: "Colorado State University",
            description:
              "Evolutionary Optimization, Quantum Optimization, Periodicity and Tunneling",
          },
          {
            time: "12:45 – 14:00",
            description: "Lunch – Maiorescu campus restaurant",
          },
        ],
      },
      {
        title: "Session 3",
        trackKey: "eco",
        track: "ECO-Mining track: Evolutionary Computing, Optimisation and Data Mining",
        items: [
          {
            time: "15:00 – 16:00",
            speaker: "Gabriela Ochoa",
            affiliation: "University of Stirling",
            description:
              "Visualising Evolution: A Network-Based Journey through Search Trajectories",
          },
          { time: "16:00 – 16:15", description: "Coffee break" },
          {
            time: "16:15 – 18:00",
            description: "PhD students' 3-minute presentations",
          },
        ],
      },
    ],
  },
  {
    date: "Friday, June 19",
    location: "Ion Simionescu Hall",
    sessions: [
      {
        title: "Session 4",
        trackKey: "eco",
        track: "ECO-Mining track: Evolutionary Computing, Optimisation and Data Mining",
        items: [
          {
            time: "09:30 – 10:30",
            speaker: "Daniela Zaharie",
            affiliation: "West University of Timişoara",
            description:
              "Detecting structural changes in time series: from statistical models to Deep Learning",
          },
          { time: "10:30 – 10:45", description: "Coffee break" },
        ],
      },
      {
        title: "Session 6",
        trackKey: "bio",
        track: "Satellite Workshop: Applied Machine Learning / BioInformatics – Core Bioinformatics Group",
        items: [
          {
            time: "10:45 – 11:15",
            speaker: "Andi Munteanu",
            affiliation: "PhD student, University of Iasi; Intern, Core Bioinformatics Group",
            description:
              "PIGEN: Genetic Algorithms in the context of Gene Regulatory Networks",
          },
          {
            time: "11:15 – 11:45",
            speaker: "Cristian Bulgaru",
            affiliation: "Intern, Core Bioinformatics Group",
            description: "CANARD: the epigenetics angle",
          },
          {
            time: "11:45 – 12:15",
            speaker: "Şerban Doncean",
            affiliation: "PhD student, University of Iasi; Intern, Core Bioinformatics Group",
            description: "FALCON: Gene Regulatory Network driven batch correction",
          },
          {
            time: "12:45 – 14:00",
            description: "Lunch – Maiorescu campus restaurant",
          },
        ],
      },
      {
        title: "Session 7",
        trackKey: "bio",
        track: "Satellite Workshop: Applied Machine Learning / BioInformatics – Core Bioinformatics Group",
        items: [
          {
            time: "15:00 – 15:30",
            speaker: "Ioana Hanus",
            affiliation: "MSc student, University of Iasi; Intern, Core Bioinformatics Group",
            description: "RAVEN: graph properties overlaid on Gene Regulatory Networks",
          },
          {
            time: "15:30 – 16:00",
            speaker: "Samira Enache",
            affiliation: "MSc student, University of Iasi; Intern, Core Bioinformatics Group",
            description: "HERON: defining covariation",
          },
          { time: "16:00 – 16:15", description: "Coffee break" },
          {
            time: "16:15 – 17:15",
            speaker: "Irina Mohorianu",
            affiliation:
              "Head of Bioinformatics / Scientific Computing @ CSCI, University of Cambridge",
            description: "RoSignOL: further tools and future directions",
          },
        ],
      },
      {
        title: "Session 8",
        type: "general",
        items: [{ time: "17:15", description: "Closing session" }],
      },
    ],
  },
];

const trackMeta = {
  eco: {
    label: "ECO-Mining",
    subtitle: "Evolutionary Computing, Optimisation and Data Mining",
  },
  bio: {
    label: "BioInformatics / Applied Machine Learning",
    subtitle: "\u00A0",
  },
};

const chronologicalGlance = [
  {
    date: "Wednesday, June 17",
    location: "",
    items: [
      { time: "15:00", title: "Registration", location: "Ferdinand Hall" },
      { time: "16:30", title: "Session 5", location: "Ferdinand Hall" },
      {
        time: "18:30",
        title: "Welcome Dinner",
        location: "Panoramic Restaurant (Unirea Hotel)",
      },
    ],
  },
  {
    date: "Thursday, June 18",
    location: "Ferdinand Hall",
    items: [
      { time: "09:00", title: "Registration" },
      { time: "09:30", title: "Opening Session" },
      { time: "10:15", title: "Session 2" },
      { time: "15:00", title: "Session 3" },
      { time: "16:15", title: "Students’ 3-minute presentations" },
    ],
  },
  {
    date: "Friday, June 19",
    location: "Ion Simionescu Hall",
    items: [
      { time: "09:30", title: "Session 4" },
      { time: "10:45", title: "Session 6" },
      { time: "15:00", title: "Session 7" },
      { time: "17:15", title: "Closing Session" },
    ],
  },
];


const GlanceList = styled.div`
  display: grid;
  gap: 0;
`;

const GlanceItem = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #edf2f7;
  line-height: 1.6;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const GlanceDescription = styled.span`
  color: ${ACCENT.slate};
  font-weight: 700;
`;

const GlanceLocation = styled.span`
  color: ${ACCENT.muted};
  font-style: italic;
  font-weight: 600;
`;

const GlanceSession = styled.strong`
  color: ${ACCENT.slate};
`;

const SectionContainer = styled.section`
  padding: 100px 20px;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
`;

const ProgramContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  color: ${ACCENT.slate};
`;

const ProgramAnchor = styled.div`
  padding: 1px !important;
  background: none !important;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 46px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  border-radius: 999px;
  background: ${ACCENT.blueSoft};
  color: ${ACCENT.blueDark};
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: clamp(34px, 5vw, 50px);
  font-weight: 900;
  color: #333333;
  text-align: center;
  margin: 0 0 34px;
  line-height: 1.1;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 84px;
    height: 4px;
    border-radius: 999px;
    background: ${ACCENT.blue};
    left: 50%;
    bottom: -16px;
    transform: translateX(-50%);
  }
`;

const Intro = styled.p`
  max-width: 720px;
  margin: 0 auto;
  color: ${ACCENT.muted};
  font-size: 17px;
  line-height: 1.7;
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  font-family: "Raleway", sans-serif;
  font-size: clamp(18px, 2.4vw, 28px);
  font-weight: 400;
  color: ${ACCENT.blue};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 34px 0;
`;

const ToggleButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? ACCENT.blue : ACCENT.border)};
  background: ${({ $active }) => ($active ? ACCENT.blue : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : ACCENT.slate)};
  border-radius: 999px;
  padding: 11px 18px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 12px 24px rgba(37, 99, 235, 0.20)" : "0 8px 18px rgba(31, 41, 55, 0.06)"};

  &:hover {
    border-color: ${ACCENT.blue};
  }
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1fr 1.25fr 1.9fr;
  gap: 18px;
  margin: 0 auto 34px;
  max-width: 1180px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const SummaryCard = styled.div`
  min-height: 104px;
  border: 1px solid ${ACCENT.border};
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.9);
  padding: 18px 20px;
  box-shadow: 0 14px 30px rgba(31, 41, 55, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  white-space: nowrap;
`;

const SummaryNumber = styled.span`
  color: ${ACCENT.blue};
  font-family: "Raleway", sans-serif;
  font-size: clamp(32px, 2.5vw, 38px);
  font-weight: 700;
  line-height: 1;
  margin-right: 10px;
`;

const SummaryNumberGhost = styled(SummaryNumber)`
  visibility: hidden;
`;

const SummaryLabel = styled.span`
  color: ${ACCENT.blueDark};
  font-family: "Raleway", sans-serif;
  font-size: clamp(16px, 1.2vw, 19px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 0.005em;
`;

const DayCard = styled.article`
  border: 1px solid ${ACCENT.border};
  border-radius: 26px;
  padding: 30px;
  margin-bottom: 28px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 18px 45px rgba(31, 41, 55, 0.08);

  @media (max-width: 640px) {
    padding: 22px;
  }
`;

const DayHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${ACCENT.border};

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const DayTitle = styled.h3`
  margin: 0 0 8px;
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  font-weight: 900;
  color: ${ACCENT.slate};
`;

const Location = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${ACCENT.muted};
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(180deg, ${ACCENT.blueSoft}, ${ACCENT.blue});
  }
`;

const SessionBlock = styled.section`
  position: relative;
  padding-left: 30px;
  margin-bottom: 26px;

  &::before {
    content: "";
    position: absolute;
    left: 1px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: #ffffff;
    border: 4px solid ${ACCENT.blue};
    box-shadow: 0 0 0 6px ${ACCENT.bluePale};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SessionTitle = styled.h4`
  margin: 0 0 7px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: ${ACCENT.blueDark};
`;

const Track = styled.p`
  display: inline-flex;
  margin: 0 0 14px;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${ACCENT.bluePale};
  font-size: 14px;
  font-style: italic;
  color: ${ACCENT.blueDark};
`;

const SessionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SessionItem = styled.li`
  display: grid;
  grid-template-columns: 138px 1fr;
  gap: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #edf2f7;
  line-height: 1.6;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const Time = styled.strong`
  color: ${ACCENT.blue};
  white-space: nowrap;
`;

const Speaker = styled.strong`
  color: ${ACCENT.slate};
`;

const Affiliation = styled.span`
  color: ${ACCENT.muted};
`;

const TalkTitle = styled.span`
  color: ${ACCENT.slate};
`;

const TrackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrackCard = styled.article`
  border: 1px solid ${ACCENT.border};
  border-radius: 28px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 18px 45px rgba(31, 41, 55, 0.08);
`;

const TrackHeader = styled.header`
  padding: 24px;
  background: linear-gradient(135deg, #2f4f78 0%, #3f6798 100%);
  color: #ffffff;
`;

const TrackTitle = styled.h3`
  margin: 0 0 8px;
  font-family: "Raleway", sans-serif;
  font-size: 23px;
  font-weight: 900;
  color: #ffffff;
`;

const TrackSubtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.5;
`;

const TrackBody = styled.div`
  padding: 22px 24px 24px;
`;

const TrackSession = styled.div`
  padding: 17px 0;
  border-bottom: 1px solid #edf2f7;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const TrackSessionMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 9px;
  border-radius: 999px;
  background: ${ACCENT.bluePale};
  color: ${ACCENT.blueDark};
  font-size: 12px;
  font-weight: 800;
`;

const EmptyNote = styled.p`
  margin: 0;
  color: ${ACCENT.muted};
`;

const renderDescription = (item) => {
  if (!item.speaker) {
    return item.description;
  }

  return (
    <>
      <Speaker>{item.speaker}</Speaker>
      {item.affiliation && <Affiliation> ({item.affiliation})</Affiliation>}
      {": "}
      <TalkTitle>“{item.description}”</TalkTitle>
    </>
  );
};

const getTrackSessions = () => {
  const grouped = { eco: [], bio: [] };

  programDays.forEach((day) => {
    day.sessions.forEach((session) => {
      if (!session.trackKey) return;

      grouped[session.trackKey].push({
        ...session,
        date: day.date,
        location: day.location,
      });
    });
  });

  return grouped;
};

export const Program = () => {
  const [view, setView] = useState("chronological");
  const trackSessions = useMemo(() => getTrackSessions(), []);

  const allTalks = programDays.reduce(
    (count, day) =>
      count +
      day.sessions.reduce(
        (sessionCount, session) =>
          sessionCount + session.items.filter((item) => item.speaker).length,
        0
      ),
    0
  );

  return (
    <SectionContainer>
      <ProgramContainer>
        <ProgramAnchor id="program" />

        <Header>
          <Title>ECODAM 2026 Programme</Title>

          <DownloadLink href={allProgram} target="_blank" rel="noopener noreferrer">
            (Download detailed program & abstracts)
          </DownloadLink>
        </Header>

        <SummaryGrid>
          <SummaryCard>
            <SummaryNumber>3</SummaryNumber>
            <SummaryLabel>days</SummaryLabel>
          </SummaryCard>

          <SummaryCard>
            <SummaryNumber>6</SummaryNumber>
            <SummaryLabel>sessions</SummaryLabel>
          </SummaryCard>

          <SummaryCard>
            <SummaryNumber>{allTalks}</SummaryNumber>
            <SummaryLabel> invited speakers and workshop speakers</SummaryLabel>
          </SummaryCard>

          <SummaryCard>
            <SummaryLabel>PhD students' 3-minute presentations</SummaryLabel>
          </SummaryCard>
        </SummaryGrid>

        <Controls aria-label="Programme view selector">
          <ToggleButton
            type="button"
            $active={view === "chronological"}
            onClick={() => setView("chronological")}
          >
            A chronological glance
          </ToggleButton>

          <ToggleButton
            type="button"
            $active={view === "tracks"}
            onClick={() => setView("tracks")}
          >
            Track-based view
          </ToggleButton>
        </Controls>

        {view === "chronological" && (
	  <>
	    {chronologicalGlance.map((day) => (
	      <DayCard key={day.date}>
		<DayHeader>
		  <div>
		    <DayTitle>{day.date}</DayTitle>
		    {day.location && <Location>{day.location}</Location>}
		  </div>
		</DayHeader>

		<GlanceList>
		  {day.items.map((item) => (
			  <GlanceItem key={`${day.date}-${item.time}-${item.title}`}>
			    <Time>{item.time}</Time>
			    <GlanceDescription>
			      {item.title}
			      {item.location && (
				<>
				  {" – "}
				  <GlanceLocation>{item.location}</GlanceLocation>
				</>
			      )}
			    </GlanceDescription>
			  </GlanceItem>
			))}
		</GlanceList>
	      </DayCard>
	    ))}
	  </>
	)}

        {view === "tracks" && (
          <TrackGrid>
            {Object.entries(trackMeta).map(([trackKey, meta]) => (
              <TrackCard key={trackKey}>
                <TrackHeader>
                  <TrackTitle>{meta.label}</TrackTitle>
                  <TrackSubtitle>{meta.subtitle}</TrackSubtitle>
                </TrackHeader>

                <TrackBody>
                  {trackSessions[trackKey]?.length ? (
                    trackSessions[trackKey].map((session) => (
                      <TrackSession key={`${trackKey}-${session.date}-${session.title}`}>
                        <TrackSessionMeta>
                          <Pill>{session.date}</Pill>
                          <Pill>{session.location}</Pill>
                          <Pill>{session.title}</Pill>
                        </TrackSessionMeta>

                        <SessionList>
                          {session.items.map((item) => (
                            <SessionItem key={`${item.time}-${item.description}`}>
                              <Time>{item.time}</Time>
                              <span>{renderDescription(item)}</span>
                            </SessionItem>
                          ))}
                        </SessionList>
                      </TrackSession>
                    ))
                  ) : (
                    <EmptyNote>No sessions available for this track.</EmptyNote>
                  )}
                </TrackBody>
              </TrackCard>
            ))}
          </TrackGrid>
        )}
      </ProgramContainer>
    </SectionContainer>
  );
};
