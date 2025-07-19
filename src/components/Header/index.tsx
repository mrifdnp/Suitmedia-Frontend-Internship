"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkButton from "./LinkButton";
import tw from "twin.macro";
import { HeaderContainer } from "./styles";
import Icon from "../Icon";
import NavMobile from "./NavMobile";

export type PageState =
  | "work"
  | "about"
  | "services"
  | "ideas"
  | "careers"
  | "contact";

export default function Header() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [page, setPage] = useState<PageState>("work");
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Update active page state from pathname
  useEffect(() => {
    const path = pathname?.split("/")[1] as PageState | undefined;
    if (path && ["work", "about", "services", "ideas", "careers", "contact"].includes(path)) {
      setPage(path);
    } else {
      setPage("ideas"); // fallback
    }
  }, [pathname]);

  // Handle header hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setHeaderVisible(currentScrollTop < lastScrollTop || currentScrollTop < 10);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <HeaderContainer
      state={isHeaderVisible}
      isTop={lastScrollTop < 5}
      className={`lg:px-20 px-6 sm:px-10 md:px-16 py-4 items-center flex justify-between fixed left-0 right-0 duration-1000 z-30`}
    >
      {/* Logo */}
      <Link href="/">
        <img src="/images/logo-white.png" className="sm:h-10 h-8 md:h-11 lg:h-12 cursor-pointer" />
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          onClick={() => setShow(!show)}
          style={{ zIndex: 100, position: "relative" }}
        >
          <Icon name="menu" size={22} color="white" />
        </div>
        <NavMobile active={show} page={page} onUpdate={setPage} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex text-slate-50 gap-4 items-center">
        <LinkButton type="work" state={page} onUpdate={setPage}>
          Work
        </LinkButton>
        <LinkButton type="about" state={page} onUpdate={setPage}>
          About
        </LinkButton>
        <LinkButton type="services" state={page} onUpdate={setPage}>
          Services
        </LinkButton>
        <LinkButton type="ideas" state={page} onUpdate={setPage}>
          Ideas
        </LinkButton>
        <LinkButton type="careers" state={page} onUpdate={setPage}>
          Careers
        </LinkButton>
        <LinkButton type="contact" state={page} onUpdate={setPage}>
          Contact
        </LinkButton>
      </div>
    </HeaderContainer>
  );
}
