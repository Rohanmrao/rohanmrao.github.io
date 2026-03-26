import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/content/portfolio";
import { withBaseUrl } from "@/lib/base-url";
import { cn } from "@/lib/utils";

function useGoToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 130);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
}

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const goToSection = useGoToSection();

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className="text-left font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-accent"
          onClick={() => {
            goToSection(item.id);
            onNavigate?.();
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export function SiteShell() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const goToSection = useGoToSection();

  return (
    <div className="relative min-h-screen">
      <aside
        className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border/60 lg:flex"
        style={{
          backgroundImage: `
            linear-gradient(165deg, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.75) 100%),
            url(${withBaseUrl("/static/sidebar.jpg")})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-1 flex-col px-6 py-10">
          <Link
            to="/"
            className="group mb-10 block text-center"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                goToSection("home");
              }
            }}
          >
            <img
              src={withBaseUrl("/static/Farewell24_2.jpeg")}
              alt="Rohan Mahesh Rao"
              className="mx-auto h-28 w-28 rounded-full border-4 border-primary object-cover shadow-lg transition-transform group-hover:scale-[1.02]"
            />
            <p className="mt-4 font-display text-lg font-bold tracking-tight text-foreground">
              Rohan Mahesh Rao
            </p>
          </Link>
          <NavLinks className="flex-1 gap-3 text-center" />
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Scroll the story →
          </p>
        </div>
      </aside>

      <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-border/60 bg-background/75 px-4 py-3 backdrop-blur-md lg:hidden">
        <Link
          to="/"
          className="font-display text-lg font-bold"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              goToSection("home");
            }
          }}
        >
          Rohan Rao
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <NavLinks
                className="mt-8 gap-4"
                onNavigate={() => setOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="fixed right-4 top-[4.75rem] z-40 hidden lg:block">
        <ModeToggle />
      </div>

      <main className="lg:pl-64">
        <Outlet />
      </main>
    </div>
  );
}
