export function publicAsset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  const base = import.meta.env.BASE_URL || "/";
  if (base === "/") {
    return p;
  }
  return `${base.replace(/\/$/, "")}${p}`;
}
