import { PageState } from ".";
import LinkButton from "./LinkButton";
import { NavContainer } from "./styles";

export default function NavMobile({
  active,
  page,
  onUpdate,
}: {
  active: boolean;
  page: PageState;
  onUpdate: (state: PageState) => void;
}) {
  return (
    <NavContainer
      className="flex justify-center items-center gap-10 flex-col"
      active={active}
    >
      <LinkButton type="work" state={page} onUpdate={onUpdate}>
        Work
      </LinkButton>
      <LinkButton type="about" state={page} onUpdate={onUpdate}>
        About
      </LinkButton>
      <LinkButton type="services" state={page} onUpdate={onUpdate}>
        Services
      </LinkButton>
      <LinkButton type="ideas" state={page} onUpdate={onUpdate}>
        Ideas
      </LinkButton>
      <LinkButton type="careers" state={page} onUpdate={onUpdate}>
        Careers
      </LinkButton>
      <LinkButton type="contact" state={page} onUpdate={onUpdate}>
        Contact
      </LinkButton>
    </NavContainer>
  );
}
