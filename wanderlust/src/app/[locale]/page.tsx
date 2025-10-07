import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl">{t("title")}</h1>
        <p className="text-2xl text-center">{t("description")}</p>
      </div>
    </>
  );
}
