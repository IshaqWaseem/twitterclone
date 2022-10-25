import React, { ReactComponentElement } from "react";
type NavOptions = {
  Icon: () => JSX.Element;
  Text: string;
};
export default function Options({ Icon, Text }: NavOptions) {
  return (
    <div className="hover:bg-gray-100">
      <Icon />
      <span style={{ paddingLeft: 13 }}>{Text}</span>
    </div>
  );
}
