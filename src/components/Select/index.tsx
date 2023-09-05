import { FC } from "react";
import { DarkSelectContainer } from "./style";
import { SortIcon, TriangleArrowDownIcon, TriangleArrowUpIcon } from "../icons";

type DarkSelectProps = {
  label?: string;
  icon?: string;
};
// type WhiteSelectProps = {
//   label?: string;
// };

export const DarkSelect: FC<DarkSelectProps> = ({ label, icon }) => {
  return (
    <DarkSelectContainer>
      {label}
      {icon === "arrowdown" ? <TriangleArrowDownIcon /> : null}
      {icon === "arrowup" ? <TriangleArrowUpIcon /> : null}
      {icon === "sort" ? <SortIcon /> : null}
    </DarkSelectContainer>
  );
};

// export const WhiteSelect: FC<WhiteSelectProps> = ({ label }) => {
//   return <WhiteSelectContainer>{label}</WhiteSelectContainer>;
// };
