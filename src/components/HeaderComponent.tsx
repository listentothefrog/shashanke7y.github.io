import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <div className="h-10 flex items-center justify-evenly mt-5">
      <div>
        <h1 className="text-lg font-bold">shashank ellareddy</h1>
      </div>
      <Link href="/">
        <div>home 🏠</div>
      </Link>
      <Link href="/github">
        <div className="text-black hover:text-gray-700">github 💻</div>
      </Link>
      <Link href="blog">
        <div className="text-black hover:text-gray-700">blog ✍️</div>
      </Link>
    </div>
  );
};

export default HeaderComponent;
