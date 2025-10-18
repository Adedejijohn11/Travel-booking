"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

type bgprop = {
  navBg: boolean;
};

export default function LocaleSwitcher({ navBg }: bgprop) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      className={`border-2 rounded-md p-1  text-black ${
        navBg ? "bg-green-50 border-foreground" : "bg-white  border-none"
      }`}
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
    >
      <option value="en">EN</option>
      <option value="fr">Fr</option>
    </select>
  );
}
