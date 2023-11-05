import { Metadata } from "next";

import PreferencesForm from "@/components/custom/onboarding/preferences/form";
export const metadata: Metadata = {
  title: "Onboarding",
  description: "Enter all details to complete the onboarding process.",
};

export default function PreferencesPage() {
  return (
    <>
      <div className="container grid relative min-h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Preferences
              </h1>
              <p className="text-sm text-muted-foreground">
                Select what type of qualities would you look for in a roommate.
              </p>
            </div>
            <PreferencesForm />
          </div>
        </div>
      </div>
    </>
  );
}
