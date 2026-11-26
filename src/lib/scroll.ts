import { useLocation, useNavigate } from "react-router-dom";

export function scrollToSection(id: string) {
  // "auto" defers to the CSS scroll-behavior, which is smooth only when motion is allowed.
  document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
}

export function useGoToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname === "/") return scrollToSection(id);
    navigate("/");
    window.setTimeout(() => scrollToSection(id), 130);
  };
}
