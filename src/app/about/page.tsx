"use client";

import styles from "./style.module.css";

import { useRouter } from "next/navigation";

export default function About() {
  console.log("render About page");
  const router = useRouter();

  return (
    <div className={styles.root}>
      <div>About page</div>
      <button onClick={() => router.push("/rackets")}>Back to Rackets</button>
    </div>
  );
}