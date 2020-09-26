import styled from "styled-components";
import { Color } from "constants/Color";

type Props = {
  partialGradient?: boolean;
};

export const PageContainer = styled.div<Props>`
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: ${({ partialGradient = false }) =>
    partialGradient
      ? `linear-gradient(360deg, ${Color.WHITE} 84.9%, ${Color.GREEN_SECONDARY} 99.48%)`
      : `linear-gradient(360deg, ${Color.WHITE} 0%, ${Color.GREEN_SECONDARY} 99.48%)`};
`;
