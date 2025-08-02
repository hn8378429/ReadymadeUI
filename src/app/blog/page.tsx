"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BLOGDATA } from "@/data/blog";

export default function Blog() {
  const [activeKey, setActiveKey] = useState("AI");

  const blogContent = BLOGDATA[activeKey];

  return (
    <div className="p-6">
      <Tabs defaultValue="AI" onValueChange={setActiveKey}>
        {/* Tab List */}
        <TabsList>
          {Object.keys(BLOGDATA).map((key) => (
            <TabsTrigger key={key} value={key} className="capitalize">
              {key}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Panels */}
        {Object.keys(BLOGDATA).map((key) => (
          <TabsContent key={key} value={key}>
            <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
              {/* Blog Image */}
              <div className="min-h-[256px]">
                <img
                  src={BLOGDATA[key].image}
                  alt={BLOGDATA[key].title}
                  className="w-full"
                />
              </div>

              {/* Blog Text Content */}
              <div className="p-6">
                <h3 className="text-gray-800 text-xl font-bold">
                  {BLOGDATA[key].title}
                </h3>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {BLOGDATA[key].content}
                </p>
                <button
                  type="button"
                  className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                >
                  View More
                </button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
