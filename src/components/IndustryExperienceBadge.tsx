import React from 'react';

import styled from 'styled-components';

import { Chip } from '@material-ui/core';
import FaceIcon from "@material-ui/icons/Face"
import { JobCategory } from 'constants/JobCategory';
import { IndustryExperienceLevel } from 'constants/IndustryExperienceLevel';
import { Color } from 'constants/Color';
import { FontSize } from 'constants/FontSize';

type Props = {
    jobCategory: JobCategory;
    level: IndustryExperienceLevel;
}

export function IndustryExperienceBadge({jobCategory, level} : Props) {
    return <Chip 
        color="secondary"  
        icon={<FaceIcon/>} 
        label={<StyledChipText>{jobCategory} {level}</StyledChipText>}
    />
}

const StyledChipText = styled.p`
    font-weight: 600;
    font-size: ${FontSize.BODY};
    color: ${Color.WHITE}
`

