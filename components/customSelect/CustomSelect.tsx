"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
type options = { key:any ; value: string; title: string };
const CustomSelect = ({
  options,
  title,
  name,
  isRequired
}: {
  options: options[];
  title: string;
  name: string;
  isRequired:boolean
}) => {
  return (
    <Select label={title} fullWidth name={name} isRequired>
      {options?.map(({ key, value, title }) => (
        <SelectItem key={key} value={value}>
          {title}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
