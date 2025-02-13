import { FRONTEND } from "@/data/stack/frontend";
import { PROGRAMMING } from "@/data/stack/progamming";
import { BACKEND } from "@/data/stack/backend";
import { StackCard } from "@/components/cards/stack-card";
import { useState } from "react";

export default function Stack() {
  const [activeTab, setActiveTab] = useState<
    "frontend" | "backend" | "programming"
  >("frontend");

  return (
    <section id="stack" className="scroll-m-48 sm:scroll-m-0">
      <div className="h-10 w-full"></div>
      <div className="container text-body-1">
        <h2 className="text-heading-2 font-medium underline decoration-secondary">
          Stack
        </h2>
        <p>I have experience with the following technologies:</p>
        <div className="h-10 w-full"></div>
        <div className="overflow-hidden rounded-xl border-8 border-accent">
          <div className="flex justify-between bg-accent/20">
            <button
              onClick={() => setActiveTab("frontend")}
              className={
                "w-full p-2 " +
                (activeTab === "frontend"
                  ? "bg-accent text-background"
                  : "text-accent")
              }
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={
                "w-full p-2 " +
                (activeTab === "backend"
                  ? "bg-accent text-background"
                  : "text-accent")
              }
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("programming")}
              className={
                "w-full p-2 " +
                (activeTab === "programming"
                  ? "bg-accent text-background"
                  : "text-accent")
              }
            >
              Programming
            </button>
          </div>
          <div className="bg-accent/10 p-4">
            {activeTab === "frontend" && <StackCard stack={FRONTEND} />}
            {activeTab === "backend" && <StackCard stack={BACKEND} />}
            {activeTab === "programming" && <StackCard stack={PROGRAMMING} />}
          </div>
        </div>
      </div>
    </section>
  );
}
