import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{profile.name}</p>
      </div>
    </footer>
  );
}
