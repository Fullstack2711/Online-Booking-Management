import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Afzalliklar
        </span>
        <h2 className="font-semibold text-4xl mt-5">Mashhur shaharlar</h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Reklama" />
            <span className="block text-xl font-semibold">
              Tejamkor reklama
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Bepul ro‘yxatdan o‘tish orqali siz ijarangizni oldindan to‘lovsiz reklama qilishingiz mumkin
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Ko‘rinish" />
            <span className="block text-xl font-semibold">
              Chisfis bilan millionlarga yeting
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Millionlab odamlar dunyo bo‘ylab noyob turar joylarni izlamoqda
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Xavfsiz" />
            <span className="block text-xl font-semibold">
              Xavfsiz va oson
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Holiday Lettings ro‘yxati sizga bron va to‘lovlarni onlayn tarzda xavfsiz va oson qabul qilish imkonini beradi
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
