import React, { FC } from "react";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Logo from "@/shared/Logo";
import Image from "next/image";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Nega bizni tanladingiz?
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Biz bilan birga siz unutilmas tajribalarga boy sayohat qilasiz. Chisfis orqali turar joy, dam olish villalari, mehmonxonalar, xususiy uylar, kvartiralarni bron qilish tez, qulay va oson bo‘ladi.
        </span>
        <ButtonPrimary className="mt-6 sm:mt-11">
          Muallif bo‘ling
        </ButtonPrimary>
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
