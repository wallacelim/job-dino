import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { Chip } from "@material-ui/core";
import { JobCategory } from "constants/JobCategory";
import ViewCompact from "@material-ui/icons/ViewCompact";
import LocalDining from "@material-ui/icons/LocalDining";
import Domain from  "@material-ui/icons/Domain";
import { IndustryExperienceLevel } from "constants/IndustryExperienceLevel";
import { Color } from "constants/Color";
import { FontSize } from "constants/FontSize";
import { FontWeight } from "constants/FontWeight";

type Props = {
  jobCategory: JobCategory;
  level: IndustryExperienceLevel;
};

export function IndustryExperienceBadge({ jobCategory, level }: Props) {

  const [icon, setIcon] = useState<JSX.Element | undefined>()

  useEffect(() => {
    switch(jobCategory) {
      case JobCategory.FOOD_AND_BEVERAGE:
        return setIcon(() => <LocalDining/>);
      case JobCategory.HOSPITALITY:
        return setIcon(() => <Domain/>);
      case JobCategory.LOGISTICS:
        return setIcon(() => <ViewCompact/>);
      default:
        throw new Error(`Invalid JobCategory: ${jobCategory}`);
    }
  }, [jobCategory])

  return (
    <Chip
      color="secondary"
      icon={icon}
      label={
        <StyledChipText>
          {jobCategory} {level}
        </StyledChipText>
      }
    />
  );
}

const StyledChipText = styled.p`
  font-weight: ${FontWeight.BOLD};
  font-size: ${FontSize.BODY};
  color: ${Color.WHITE};
`;
