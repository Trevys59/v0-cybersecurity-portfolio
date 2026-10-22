"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
const subscribe = () => () => {};
export function ThemeSwitch() {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();
  return (
    <label className="theme-switch">
      <span className="sr-only">Thème</span>
      <select
        aria-label="Thème"
        value={mounted ? theme : "system"}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">Système</option>
        <option value="dark">Sombre</option>
        <option value="light">Clair</option>
      </select>
    </label>
  );
}
