import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/content/portfolio";
import { useGoToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

function NavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const goToSection = useGoToSection();

  return (
    <nav aria-label="Sections" className={cn("flex gap-1", className)}>
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className="rounded-md px-3 py-2 text-left font-mono text-sm lowercase text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          onClick={() => {
            onNavigate?.();
            goToSection(item.id);
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
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-5 sm:px-8">
          <Link
            to="/"
            aria-label="Rohan Mahesh Rao, home"
            className="whitespace-nowrap font-mono text-sm font-bold"
            onClick={(e) => {
              if (location.pathname !== "/") return;
              e.preventDefault();
              goToSection("home");
            }}
          >
            <span className="text-primary">~/</span>rohan-rao
            <span className="cursor" aria-hidden />
          </Link>
          <div className="flex items-center gap-2">
            <NavLinks className="hidden lg:flex" />
            <ModeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100%,18rem)]" aria-describedby={undefined}>
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                </SheetHeader>
                <NavLinks className="mt-6 flex-col" onNavigate={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
