import SectionOne from "@/components/sections/sectionOne/SectionOne";
import SectionThree from "@/components/sections/SectionThree";
import SectionTwo from "@/components/sections/SectionTwo";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
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
      <div className="h-full w-full flex flex-col  items-center px-2">
        <div className="relative h-[570px] xl:h-[670px] w-[100%] flex flex-col pt-20 rounded-2xl overflow-hidden mt-2">
          <Image
            src="/hero-bg.jpg"
            alt="background-img"
            width={500}
            height={100}
            className="h-full w-[100%] object-cover absolute top-0"
          />
          <div className="absolute bottom-2 h-[250px] md:h-[230px] w-full flex flex-col md:flex-row justify-between items-center px-3 md:px-5 text-white ">
            <div>
              <h1 className="w-[100%] md:w-[65%] text-[20px] md:text-2xl lg:text-4xl xl:text-5xl">
                {t("title")}
              </h1>
              <p className="w-[100%] md:w-[60%] lg:w-[50%]">
                {t("description")}
              </p>
            </div>
            <div className="flex flex-row md:flex-col text-black gap-2">
              <span className="px-3 py-1 rounded-full bg-white">Instagram</span>
              <span className="py-1  flex justify-center rounded-full bg-white">
                Twitter
              </span>
              <span className="px-3 py-1 rounded-full bg-white">Facebook</span>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-[100%]  mt-10 ">
          <SectionOne />
        </div>
        <div className="h-[100%] w-[100%] bg-green-50 rounded-4xl ">
          <SectionTwo />
        </div>
        <div className="h-[600px] w-[100%] bg-purple-500">
          <SectionThree />
        </div>
      </div>
    </>
  );
}
