import Alphanumeric from "@/types/Alphanumeric";
import { Container, MenuItem } from "./styles";

type MenuItemTypes = {
  label: string;
  onClick?: (e: Alphanumeric) => void;
  active?: boolean;
  value?: Alphanumeric;
};

interface MenuProps {
  items: MenuItemTypes[];
}

export default function Menu({ items }: MenuProps) {
  return (
    <Container>
      {items.map((e) => {
        return (
          <MenuItem
            onClick={() => {
              if (e.value) e.onClick?.(e.value);
            }}
            active={e.active}
            key={e.label}
          >
            {e.label}
          </MenuItem>
        );
      })}
    </Container>
  );
}
