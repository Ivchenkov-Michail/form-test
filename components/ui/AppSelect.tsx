"use client";
import { useState } from "react";
import { components, GroupBase, Props } from "react-select";
import Select from "react-select";

import ArrowIcon from "@/assets/icons/arrow.svg";

import styles from "./AppSelect.module.scss";

type CustomSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group>;

export function AppSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: CustomSelectProps<Option, IsMulti, Group>) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Select
      {...props}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: (props) => (
          <components.DropdownIndicator {...props}>
            <ArrowIcon
              width={14}
              style={{ rotate: menuIsOpen ? "180deg" : "0deg" }}
            />
          </components.DropdownIndicator>
        ),
      }}
      classNames={{
        container: () => styles.container,
        control: () => styles.control,
        dropdownIndicator: () => styles.dropdownIndicator,
        menu: () => styles.menu,
      }}
      menuIsOpen={menuIsOpen}
      onMenuOpen={() => setMenuIsOpen(true)}
      onMenuClose={() => setMenuIsOpen(false)}
    />
  );
}
