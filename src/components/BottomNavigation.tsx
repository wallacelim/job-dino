import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import styled from "styled-components";

import logo from "../logo.svg";

export function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        icon={<img src={logo} width={64} height={64} alt="JobDino Icon" />}
      />
      <BottomNavigationAction label="My Jobs" icon={<BusinessCenterIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonOutlineIcon />} />
    </StyledBottomNavigation>
  );
}

export const StyledBottomNavigation = styled(BottomNavigation)`
  height: 98px;
  justify-self: flex-end;
  width: 100vw;
`;
