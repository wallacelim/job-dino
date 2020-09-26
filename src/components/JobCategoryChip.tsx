import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { Chip } from "@material-ui/core";
import ViewCompact from "@material-ui/icons/ViewCompact";
import LocalDining from "@material-ui/icons/LocalDining";
import Domain from  "@material-ui/icons/Domain";
import { JobCategory } from "constants/JobCategory";
import { Color } from "constants/Color";
import { FontSize } from "constants/FontSize";
import { FontWeight } from "constants/FontWeight";

type Props = {
  jobCategory: JobCategory;
};



export function JobCategoryChip({ jobCategory }: Props) {
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
      style={{ float: "left" }}
      icon={icon}
      label={
        <StyledChipText>
          {jobCategory}
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
