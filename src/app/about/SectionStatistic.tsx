import React, { FC } from "react";
import Heading from "@/shared/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "10 million",
    subHeading:
      "Maqolalar butun dunyo bo‘ylab e’lon qilingan (2021-yil 30-sentabr holatiga ko‘ra)",
  },
  {
    id: "2",
    heading: "100,000",
    subHeading: "Ro‘yxatdan o‘tgan foydalanuvchilar (2021-yil 30-sentabr holatiga ko‘ra)",
  },
  {
    id: "3",
    heading: "220+",
    subHeading:
      "Mamlakat va hududlarda faoliyat yuritamiz (2021-yil 30-sentabr holatiga ko‘ra)",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc="Biz xolis va mustaqilmiz, har kuni o‘ziga xos, dunyo darajasidagi dasturlar va kontent yaratamiz."
      >
        🚀 Qisqa faktlar
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
