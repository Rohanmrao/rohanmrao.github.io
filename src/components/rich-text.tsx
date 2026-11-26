export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\{\{[^}]+\}\}|\*\*[^*]+\*\*)/).map((part, i) => {
        if (part.startsWith("{{")) {
          return (
            <strong key={i} className="whitespace-nowrap rounded bg-primary/10 px-1 font-mono text-[0.92em] font-bold text-primary">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}
