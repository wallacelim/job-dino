import React from "react";
import MaterialUIButton from "@material-ui/core/Button";

type Props = {
  textContent: string;
  clickHandler: () => void;
}

export function Button({ textContent, clickHandler }: Props) {
  return (
    <MaterialUIButton
      onClick={clickHandler}
      variant="contained"
      color="secondary"
    >
      {textContent}
    </MaterialUIButton>
  );
}
