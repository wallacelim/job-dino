import React from "react";
import { JobCardContainer } from "./JobCardContainer";
import { Moment } from "moment";
import { JobCategory } from "constants/JobCategory";
import logo from "../../logo.svg";
import { Grid } from "@material-ui/core";

import styled from "styled-components";
import { FontSize } from "constants/FontSize";
import { Color } from "constants/Color";
import { FontWeight } from "constants/FontWeight";
import moment from "moment";
import { JobCategoryChip } from "components/JobCategoryChip";
import { useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";

type Props = {
  index: number;
  jobTitle: string;
  posterName: string;
  startTime: Moment;
  endTime: Moment;
  postDateTime: Moment;
  date: Moment;
  perHourPay: number;
  jobCategory: JobCategory;
  location: string;
  icon?: any;
  handleApply: (jobTitle: string, id: number) => void;
};

export function JobCard({
  index,
  jobTitle,
  posterName,
  icon,
  location,
  postDateTime,
  date,
  startTime,
  endTime,
  jobCategory,
  perHourPay,
  handleApply,
}: Props) {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (!down && Math.abs(mx) > 200) {
      set({
        x: Math.sign(mx) * 500,
        y: my,
      });
      if (mx > 0) {
        return handleApply(jobTitle, index);
      }
      return;
    }
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <JobCardContainer {...bind()} style={{ x, y, transform: `rotateZ(${Math.max(-5, -index)}deg)` }}>
      <GridContainer
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <FixedHeightGridItem item xs={4}>
          {icon ?? (
            <img src={logo} alt="JobDino Logo" height={100} width={100} />
          )}
        </FixedHeightGridItem>
        <FixedHeightGridItem item xs={8}>
          <JobTitleText>{jobTitle}</JobTitleText>
        </FixedHeightGridItem>
        <FixedHeightGridItem item xs={4} />
        <FixedHeightGridItem item xs={8}>
          <JobDescription>
            {location}
            <br />
            {date.format("dddd, DD MMM YYYY")}
            <br />
            {startTime.format("ha")} to {endTime.format("ha")}
          </JobDescription>
        </FixedHeightGridItem>
        <FixedHeightGridItem height="100px" item xs={12} />
        <FixedHeightGridItem item xs={12}>
          <JobDescription>
            {posterName}
            <br />
            Posted {postDateTime.from(moment())}
          </JobDescription>
        </FixedHeightGridItem>
        <FixedHeightGridItem item xs={6}>
          <JobCategoryChip jobCategory={JobCategory.FOOD_AND_BEVERAGE} />
        </FixedHeightGridItem>
        <FixedHeightGridItem item xs={6}>
          <JobCompensationText>${perHourPay} / Hour</JobCompensationText>
        </FixedHeightGridItem>
      </GridContainer>
    </JobCardContainer>
  );
}

const GridContainer = styled(Grid)`
  padding: 30px 25px;
`;

type FixedHeightGridItemProps = React.ComponentProps<typeof Grid> & {
  height?: string;
};

const FixedHeightGridItem = styled(Grid)<FixedHeightGridItemProps>`
  height: ${({ height = "auto" }) => height};
`;

const JobTitleText = styled.p`
  text-align: start;
  padding: 0 40px 0 10px;
  font-size: ${FontSize.TITLE};
  font-weight: ${FontWeight.SEMI_BOLD};
  color: ${Color.DARK_PRIMARY};
`;

const JobDescription = styled.p`
  margin-top: 0px;
  padding-left: 10px;
  font-size: ${FontSize.BODY};
  font-weight: ${FontWeight.NORMAL};
  color: ${Color.DARK_QUATERNARY};
  text-align: start;
`;

const JobCompensationText = styled.p`
  font-size: ${FontSize.EMPHASIS};
  font-weight: ${FontWeight.BOLD};
  color: ${Color.GREEN_PRIMARY};
  text-align: end;
`;
