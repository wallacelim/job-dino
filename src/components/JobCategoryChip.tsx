import React from "react";

import styled from "styled-components";

import { Chip } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { JobCategory } from "constants/JobCategory";
import { Color } from "constants/Color";
import { FontSize } from "constants/FontSize";
import { FontWeight } from "constants/FontWeight";

type Props = {
  jobCategory: JobCategory;
};

export function JobCategoryChip({ jobCategory }: Props) {
  return (
    <Chip
      color="secondary"
      icon={<FaceIcon />}
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
