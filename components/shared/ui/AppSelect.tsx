"use client";

import { useState } from "react";
import Select, { components, GroupBase, Props } from "react-select";

import ArrowIcon from "@/assets/icons/arrow.svg";

import styles from "./AppSelect.module.scss";

type AppSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group>;

export function AppSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: AppSelectProps<Option, IsMulti, Group>) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Select<Option, IsMulti, Group>
      {...props}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: (indicatorProps) => (
          <components.DropdownIndicator {...indicatorProps}>
            <ArrowIcon
              width={14}
              style={{ rotate: menuIsOpen ? "180deg" : "0deg" }}
            />
          </components.DropdownIndicator>
        ),
        ...props.components,
      }}
      classNames={{
        container: () => styles.container,
        control: () => styles.control,
        dropdownIndicator: () => styles.dropdownIndicator,
        menu: () => styles.menu,
        ...props.classNames,
      }}
      menuIsOpen={props.menuIsOpen ?? menuIsOpen}
      onMenuOpen={() => {
        setMenuIsOpen(true);
        props.onMenuOpen?.();
      }}
      onMenuClose={() => {
        setMenuIsOpen(false);
        props.onMenuClose?.();
      }}
    />
  );
}
