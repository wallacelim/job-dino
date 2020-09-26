import React from "react";
import { useHistory } from 'react-router-dom';

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import styled from "styled-components";
import { Color } from "../constants/Color";

import logo from "../logo.svg";
import darkLogo from "../logo_dark.svg";

export function SimpleBottomNavigation() {
  let history = useHistory();
  const [value, setValue] = React.useState(window.location.pathname);

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(_, newValue) => {
        history.push(newValue)
        setValue(newValue);
      }}
    >``
      <BottomNavigationAction label="Home" value="/home" 
        icon={<JobDinoIcon isSelected={value==="/home"}/>} />
      <BottomNavigationAction label="My Jobs" value="/my_jobs" icon={<StyledBusinessCenterIcon isSelected={value==='/my_jobs'}/>}/>
      <BottomNavigationAction label="Profile" value="/profile" icon={<StyledPersonOutlineIcon isSelected={value=== '/profile'}/>} />
    </StyledBottomNavigation>
  );
}

function JobDinoIcon ({isSelected} : {isSelected: boolean }) {
  return <img src={isSelected ? logo: darkLogo} width={64} height={64} alt="JobDino Icon" style={{
    filter: isSelected? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))': 'none'
  }}/>
} 

type Selectable = {
  isSelected?: boolean;
}

export const StyledBottomNavigation = styled(BottomNavigation)`
  height: 98px !important;
  justify-self: flex-end;
  width: 100vw;
`;

export const StyledBusinessCenterIcon = styled(BusinessCenterIcon)<Selectable>`
  height: 40px !important;
  width: 40px !important;
  color: ${Color.DARK_TERTIARY};
  filter: ${({isSelected = false}) => isSelected ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))': 'none'};
  color: ${({isSelected = false}) => isSelected ? Color.GREEN_PRIMARY : Color.DARK_PRIMARY};
`;

export const StyledPersonOutlineIcon = styled(PersonOutlineIcon)<Selectable>`
  height: 40px !important;
  width: 40px !important;
  color: ${Color.DARK_TERTIARY};
  filter: ${({isSelected = false}) => isSelected ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))': 'none'};
  color: ${({isSelected = false}) => isSelected ? Color.GREEN_PRIMARY : Color.DARK_PRIMARY};
`;

