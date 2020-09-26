import { IndustryExperienceBadge } from "components/IndustryExperienceBadge";
import { IndustryExperienceLevel } from "constants/IndustryExperienceLevel";
import { JobCategory } from "constants/JobCategory";
import React from "react";

import styled from "styled-components";

import { SimpleBottomNavigation } from "../components/BottomNavigation";

import { Color } from "../constants/Color";

export function HomePage() {
  return (
    <AppContainer>
      <IndustryExperienceBadge
        level={IndustryExperienceLevel.BEGINNER}
        jobCategory={JobCategory.FOOD_AND_BEVERAGE}
      />
      <SimpleBottomNavigation />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
  background-color: ${Color.WHITE};
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
