import { JobCard } from "components/JobCard";
import { PageContainer } from "components/PageContainer";
import { JobCategory } from "constants/JobCategory";
import React, { useState } from "react";

import moment from "moment";

import { Alert, AlertTitle } from "@material-ui/lab";

import { SimpleBottomNavigation } from "../components/BottomNavigation";
import jobs from "../mockData/jobs.json";
import { FontSize } from "constants/FontSize";
import { FontWeight } from "constants/FontWeight";
import { Color } from "constants/Color";
import styled from "styled-components";

export function HomePage() {
  const [appliedJobTitle, setAppliedJobTitile] = useState("");
  const flashSuccessfulApplicationAlert = async (jobTitle: string) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 300));
    setAppliedJobTitile(jobTitle);
    setTimeout(() => setAppliedJobTitile(""), 2000);
  };

  return (
    <PageContainer>
      {appliedJobTitle && (
        <StyledAlert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully applied for <strong>{appliedJobTitle}</strong>
        </StyledAlert>
      )}
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
            handleApply={flashSuccessfulApplicationAlert}
            jobTitle={jobTitle}
            posterName={posterName}
            location={location}
            date={moment(date.toString())}
            startTime={moment(startTime.toString(), "HHmm")}
            endTime={moment(endTime.toString(), "HHmm")}
            postDateTime={moment(postDateTime.toString(), "YYYY-MM-DD HHmm")}
            jobCategory={jobCategory as JobCategory}
            perHourPay={perHourPay}
            icon={
              <img
                width={100}
                height={100}
                src={iconPath}
                alt="No Icon Available"
              />
            }
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

const StyledAlert = styled(Alert)`
  position: absolute;
  top: 15%;
`;
