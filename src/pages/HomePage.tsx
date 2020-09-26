import { IndustryExperienceBadge } from "components/IndustryExperienceBadge";
import { JobCard } from "components/JobCard";
import { PageContainer } from "components/PageContainer";
import { JobCategory } from "constants/JobCategory";
import React from "react";

import moment from "moment";

import { SimpleBottomNavigation } from "../components/BottomNavigation";
import jobs from "constants/jobs.json";

export function HomePage() {
  return (
    <PageContainer>
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
