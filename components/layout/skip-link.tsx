export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-0 top-0 z-[9999] -translate-y-[120%] rounded-none bg-primary px-6 py-3 text-sm font-medium text-background shadow-lg transition-transform duration-200 focus-visible:translate-y-0"
    >
      Zum Hauptinhalt springen
    </a>
  );
}
