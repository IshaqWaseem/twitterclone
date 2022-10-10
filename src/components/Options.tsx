import React, { ReactComponentElement } from "react";
type NavOptions = {
  Icon: () => JSX.Element;
  Text: string;
};
export default function Options({ Icon, Text }: NavOptions) {
  return (
    <>
      <Icon />
      <span style={{ paddingLeft: 13 }}>{Text}</span>
    </>
  );
}
