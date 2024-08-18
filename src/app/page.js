"use client";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h1 className="text-3xl font-bold text-black p-10 text-center">Go Project Page</h1>
      <Link className="p-10 underline text-blue-800" href="/projects">See Projects</Link>
    </div>
  );
}
