import React from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";

const AccountBilling = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">To‘lovlar va to‘lov olish</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="max-w-2xl">
        <span className="text-xl font-semibold block">To‘lov olish usullari</span>
        <br />
        <span className="text-neutral-700 dark:text-neutral-300 block">
          {` Rezervatsiya uchun to‘lov olganingizda, bu to‘lov sizga "to‘lov olish" deb ataladi. Bizning xavfsiz to‘lov tizimimiz bir nechta to‘lov olish usullarini qo‘llab-quvvatlaydi, ularni quyida sozlashingiz mumkin. Ko‘proq ma’lumot uchun FAQ bo‘limiga o‘ting.`}
          <br />
          <br />
          To‘lov olish uchun siz to‘lov olish usulini sozlashingiz kerak. Airbnb to‘lovlarni mehmonning rejalashtirilgan kirish vaqtidan taxminan 24 soat o‘tib chiqaradi. Mablag‘larning hisobingizda paydo bo‘lishi siz tanlagan usulga bog‘liq. Batafsil ma’lumot oling
        </span>
        <div className="pt-10">
          <ButtonPrimary>To‘lov olish usulini qo‘shish</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountBilling;
