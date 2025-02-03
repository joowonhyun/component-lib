import React from "react";
import { Flex, Text } from "@/components";

const page = () => {
  return (
    <>
      {/* 반응형이 필요하지 않을 때 */}
      <Flex direction="row" gap="s4">
        <Text color="gray-900" weight="w500" text="Hello World!" />
        <Text color="blue-200" weight="w500" text="Hello World!" />
      </Flex>

      {/* 반응형이 필요할때 */}
      <Flex
        direction={{
          mobile: "column",
          tablet: "row",
        }}
        gap={{
          mobile: "s4",
          desktop: "s8",
        }}
      >
        <Text color="gray-900" weight="w500" text="Hello World!" />
        <Text color="blue-200" weight="w500" text="Hello World!" />
      </Flex>
    </>
  );
};

export default page;
