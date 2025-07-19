import { ReactNode, useEffect, useMemo, useState } from "react";
import type Alphanumeric from "@/types/Alphanumeric";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import Menu from "../Menu";
import { Container } from "./styles";

export type SelectValue = {
  label: string;
  value: Alphanumeric;
};

interface SelectProps {
  leftAccessory?: ReactNode;
  placeholder?: ReactNode;
  width?: string;
  onChange?: (val: Alphanumeric) => void;
  options: SelectValue[];
  value?: Alphanumeric;
}

export default function Select({
  width = "100%",
  onChange,
  placeholder,
  options,
  value = "",
  leftAccessory,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultValue = useMemo(() => {
    return options.find((e) => e.value === value);
  }, [value, options]);

  const [current, setCurrent] = useState<SelectValue | undefined>(defaultValue);

  const selectOptions = useMemo(() => {
    return options.map((e) => ({
      label: e.label,
      value: e.value,
      onClick: () => {
        setCurrent(e);
        setIsOpen(false);
      },
      active: current?.value === e.value,
    }));
  }, [options, current]);

  useEffect(() => {
    setCurrent(selectOptions.find((e) => e.value === current?.value));
  }, []);

  useEffect(() => {
    if (!current) return;
    onChange?.(current.value);
  }, [current]);

  const Chevron = isOpen ? (
    <Icon name="chevron-up" size={12} />
  ) : (
    <Icon name="chevron-down" size={12} />
  );

  return (
    <Dropdown
      overlayWidth="fit-container"
      overlay={<Menu items={selectOptions} />}
      show={isOpen}
      onChange={(e) => setIsOpen(e)}
      fitContent={false}
    >
      <Container width={width}>
        <div className="font-normal flex gap-3 md:gap-4 items-center justify-center">
          {leftAccessory && <div>{leftAccessory}</div>}
          <div>{current ? current.label : placeholder}</div>
        </div>
        <div>{Chevron}</div>
      </Container>
    </Dropdown>
  );
}
