import React from "react";
import { Flex, Text, Box } from "@/components";

const page = () => {
  return (
    <Box
      maxWidth="full"
      margin="auto"
      borderColor="black"
      border="solid"
      paddingX={4}
      paddingY={4}
      borderRadius="radius12"
    >
      {/* 반응형이 필요하지 않을 때 */}
      <Flex flexDirection="row" gap={4}>
        <Text color="gray-900" weight={500} text="Hello World!" />
        <Text color="blue-200" weight={500} text="Hello World!" />
      </Flex>

      {/* 반응형이 필요할때 */}
      <Flex
        flexDirection={{
          mobile: "row",
          desktop: "column",
        }}
        gap={4}
      >
        <Text color="gray-900" weight={500} text="Hello World!" />
        <Text color="blue-200" weight={500} text="Hello World!" />
      </Flex>
    </Box>
  );
};

export default page;
