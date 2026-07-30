import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{profile.name}</p>
        <p>© Handcrafted by Katherine Negrete 2026, CDMX México </p>
      </div>
    </footer>
  );
}
