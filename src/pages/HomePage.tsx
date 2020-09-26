import { IndustryExperienceBadge } from "components/IndustryExperienceBadge";
import { JobCard } from "components/JobCard";
import { PageContainer } from "components/PageContainer";
import { JobCategory } from "constants/JobCategory";
import React from "react";

import moment from "moment";

import { SimpleBottomNavigation } from "../components/BottomNavigation";
import jobs from "constants/jobs.json";
import { FontSize } from "constants/FontSize";
import { FontWeight } from "constants/FontWeight";
import { Color } from "constants/Color";
import styled from "styled-components";

export function HomePage() {
  return (
    <PageContainer>
      <PageTitle>Discover Jobs</PageTitle>
      {jobs.map(
        ({
          jobTitle,
          posterName,
          iconPath,
          location,
          postDateTime,
          date,
          startTime,
          endTime,
          jobCategory,
          perHourPay,
        }) => (
          <JobCard
            jobTitle={jobTitle}
            posterName={posterName}
            location={location}
            date={moment(date.toString())}
            startTime={moment(startTime.toString(), "HHmm")}
            endTime={moment(endTime.toString(), "HHmm")}
            postDateTime={moment(postDateTime.toString(), "YYYY-MM-DD HHmm")}
            jobCategory={jobCategory as JobCategory}
            perHourPay={perHourPay}
          />
        )
      )}
      <SimpleBottomNavigation />
    </PageContainer>
  );
}

const PageTitle = styled.p`
  font-size: ${FontSize.HEADER};
  font-weight: ${FontWeight.NORMAL};
  color: ${Color.WHITE};

  font-family: "Viga";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 132%;

  display: flex;
  text-align: start;
  align-items: center;
  letter-spacing: 0.25px;
  text-shadow: 0px 4px 10px #869fb2;
`;
