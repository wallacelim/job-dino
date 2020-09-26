import styled from "styled-components";
import { Color } from "constants/Color";
import { animated } from "react-spring";

export const JobCardContainer = styled(animated.div)`
  position: absolute;
  top: 250px;
  width: 334px;
  height: 421px;
  background: ${Color.WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2),
    1px 10px 10px rgba(69, 90, 100, 0.5);
  border-radius: 24px;
`;
