import React from "react";
import Label from "@/components/Label";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";

const AccountPass = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Parolingizni yangilang</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className=" max-w-xl space-y-6">
        <div>
          <Label>Joriy parol</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div>
          <Label>Yangi parol</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div>
          <Label>Parolni tasdiqlang</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div className="pt-2">
          <ButtonPrimary>Parolni yangilash</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountPass;
