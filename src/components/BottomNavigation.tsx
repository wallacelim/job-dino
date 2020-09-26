import React from "react";
import { useHistory } from 'react-router-dom';

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import styled from "styled-components";
import { Color } from "../constants/Color";

import logo from "../logo.svg";

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
        icon={<img src={logo} width={64} height={64} alt="JobDino Icon" />} />
      <BottomNavigationAction label="My Jobs" value="/my_jobs" icon={<StyledBusinessCenterIcon />}/>
      <BottomNavigationAction label="Profile" value="/profile" icon={<StyledPersonOutlineIcon />} />
    </StyledBottomNavigation>
  );
}

export const StyledBottomNavigation = styled(BottomNavigation)`
  height: 98px !important;
  justify-self: flex-end;
  width: 100vw;
`;

export const StyledBusinessCenterIcon = styled(BusinessCenterIcon)`
  height: 40px !important;
  width: 40px !important;
  color: ${Color.DARK_TERTIARY};
`;

export const StyledPersonOutlineIcon = styled(PersonOutlineIcon)`
  height: 40px !important;
  width: 40px !important;
  color: ${Color.DARK_TERTIARY};
`;