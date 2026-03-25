import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="shrink-0" disabled>
        <Sun className="h-[1.15rem] w-[1.15rem]" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className="shrink-0 border-border/80 bg-background/60 backdrop-blur-sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-[1.15rem] w-[1.15rem] text-primary" />
      ) : (
        <Moon className="h-[1.15rem] w-[1.15rem] text-primary" />
      )}
    </Button>
  );
}
