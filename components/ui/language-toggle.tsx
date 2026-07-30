"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { MdTranslate } from "react-icons/md";

export function LanguageToggle() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button
      className="language-toggle"
      type="button"
      aria-label={t.language.label}
      onClick={toggleLanguage}
    >
      <MdTranslate size={22} aria-hidden="true" />
      <span>{t.language.next}</span>
    </button>
  );
}
