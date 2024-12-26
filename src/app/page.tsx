"use client";

import StackedCircularFooter from "@/components/footer";
import HeroAi from "@/components/hero";

import { NavBar } from "@/components/navbar";

const Page = () => {
  return (
    <>
      <div className="">
        <NavBar />
        <main>
          <HeroAi />
        </main>
        <StackedCircularFooter />
      </div>
    </>
  );
};

export default Page;
