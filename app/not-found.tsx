"use client";

import { useRouter } from "next/navigation";
import css from "./Home.module.css";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
        <br />
        <br />
        You will be redirected to the homepage in a while
      </p>
    </>
  );
};

export default NotFound;
