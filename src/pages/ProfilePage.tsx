import { Avatar } from "@material-ui/core";
import React from "react";

import styled from 'styled-components';

import { Color } from "constants/Color";
import { SimpleBottomNavigation } from "components/BottomNavigation";
import { FontSize } from "constants/FontSize";
import { FontWeight} from "constants/FontWeight";
import { PageContainer } from "components/PageContainer";
import CreateIcon from "@material-ui/icons/Create";
import StarIcon from "@material-ui/icons/StarRate";
import { IndustryExperienceBadge } from "components/IndustryExperienceBadge";
import { JobCategory } from "constants/JobCategory";
import { IndustryExperienceLevel } from "constants/IndustryExperienceLevel";
import { JobCategoryChip } from "components/JobCategoryChip";

const PROFILE_DESCRIPTION_TEXT = "Hello! I am an undergrad at NUS looking to gather some part-time job experience while I am schooling. I’ve spent the last few months working in the F&B Service and Hospitality areas, and I am  currently looking to expand my experience and knowledge in the Logistics space!"

export function ProfilePage() {

    return <PageContainer partialGradient={true} >
        <StyledCreateIcon />
        <StyledAvatar alt="Profile Picture" src="https://ca.slack-edge.com/T017QKTL7V4-U01A8BAF2MU-ba6152e66272-512"/>
        <ProfileNameText>Cai Peng Fei</ProfileNameText>
        <StyledStarIcon />
        <RatingText>4.9</RatingText>
        <SectionHeaderText top={392}>Badge(s)</SectionHeaderText>
        <SectionHeaderText top={518}>Area(s) of Interest (Current)</SectionHeaderText>
        <SectionHeaderText top={602}>Details</SectionHeaderText>
        <ProfileDescriptionText>{PROFILE_DESCRIPTION_TEXT}</ProfileDescriptionText>
        <PositionedContainer top={420} left={33}>
            <IndustryExperienceBadge jobCategory={JobCategory.FOOD_AND_BEVERAGE} level={IndustryExperienceLevel.ADVANCED} />
        </PositionedContainer>
        <PositionedContainer top={546} left={33}>
            <JobCategoryChip jobCategory={JobCategory.LOGISTICS} />
        </PositionedContainer>
        <PositionedContainer top={462} left={175}>
            <IndustryExperienceBadge jobCategory={JobCategory.LOGISTICS} level={IndustryExperienceLevel.BEGINNER} />
        </PositionedContainer>
        <PositionedContainer top={462} left={33}>
            <IndustryExperienceBadge jobCategory={JobCategory.HOSPITALITY} level={IndustryExperienceLevel.BEGINNER} />
        </PositionedContainer>
        <ProfileDetailsText>
            <b>Age:</b> 23
            <br/>
            <b>Gender:</b> Male 
            <br/>
            <b>Citizenship:</b> Singapore Citizen
            <br/>
            <b>Highest Level of Education:</b> Bachelor’s in Engineering (Material Science)
        </ProfileDetailsText>
        <SimpleBottomNavigation />
    </PageContainer>
}

const StyledAvatar = styled(Avatar)`
    margin-top: 66px;
    height: 120px !important;
    width: 120px !important;
`

const StyledCreateIcon = styled(CreateIcon)`
    position: absolute;
    top: 48px;
    right: 26px;
    height: 35px !important;
    width: 35px !important;
    color: ${Color.WHITE};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const ProfileNameText = styled.p`
    position: absolute;
    margin: 0;
    top: 196px;
    font-size: ${FontSize.TITLE};
    line-height: 25px;
    font-weight: ${FontWeight.BOLD};
    color: ${Color.DARK_SECONDARY};
`

const ProfileDescriptionText = styled.p`
    position: absolute;
    top: 249px;
    line-height: 20px;
    padding: 0 44px;
    font-size: ${FontSize.BODY};
    font-weight: ${FontWeight.NORMAL};
    color: ${Color.DARK_QUATERNARY};
`

const StyledStarIcon = styled(StarIcon)`
    position: absolute;
    top: 224px;
    left: 182px;
    width: 24px;
    height: 24px;
    color: ${Color.ORANGE};
`

const RatingText = styled.p`
    position: absolute;
    margin: 0;
    line-height: 20px;
    text-align: center;
    top: 226px;
    right: 182px;
    font-size: ${FontSize.BODY};
    font-weight: ${FontWeight.BOLD};
    color: ${Color.DARK_QUATERNARY};
`

type TopPositioned = {
    top: number;
}

type LeftPositioned = {
    left: number;
}

const SectionHeaderText = styled.p<TopPositioned>`
    position: absolute;
    top: ${({top}) => `${top}px`};
    margin: 0;
    left: 34px;
    line-height: 25px;
    padding: 0;
    font-size: ${FontSize.BODY_LARGE};
    font-weight: ${FontWeight.BOLD};
    color: ${Color.DARK_SECONDARY};
`

const PositionedContainer = styled.div<TopPositioned & LeftPositioned>`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    left: ${({ left })=> `${left}px`};
`

const ProfileDetailsText = styled.p`
    position: absolute;
    letter-spacing: 0.25px;
    margin: 0;
    text-align:start;
    top: 624px;
    left: 34px;
    line-height: 25px;
    padding: 0;
    font-size: ${FontSize.BODY};
    font-weight: ${FontWeight.NORMAL};
    color: ${Color.DARK_QUATERNARY};

`