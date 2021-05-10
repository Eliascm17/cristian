import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Container = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="">
      <nav className="flex transition items-center justify-between px-8 pt-16 max-w-7xl w-full mx-auto">
        <h1 className="text-4xl font-bold">CRISV.CO</h1>
        {mounted && (
          <div className="flex space-x-4">
            <a href="/">
              <div
                className={`text-xl ${router.path === "/" ? "underline" : ""}`}
              >
                Home
              </div>
            </a>
            <a href="/photos">
              <div className="text-xl">Photos</div>
            </a>
            <a href="/film">
              <div className="text-xl">Film</div>
            </a>
            <a href="/contact">
              <div className="text-xl">Contact</div>
            </a>
          </div>
        )}
      </nav>

      <main className="flex flex-col justify-center bg-white px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
