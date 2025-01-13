"use client";

import { Stack } from "@/components/Stack/Stack";
import React from "react";

const page = () => {
  return (
    <div>
      <Stack
        margin={{ top: 10, right: 20, bottom: 15, left: 5 }} // 객체 형태로 전달
        padding={{ top: 5, right: 10 }} // 객체 형태로 전달
        backgroundColor="white"
        borderRadius={8}
        onClick={() => console.log("Clicked!")}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    </div>
  );
};

export default page;
