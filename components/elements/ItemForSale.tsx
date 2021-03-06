import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { StoreItem } from "../../models/storeItem";

interface ItemForSaleProps extends StoreItem {}

function ItemForSale({ image, name, price }: ItemForSaleProps) {
  return (
    <Stack
      overflow="hidden"
      boxShadow="sm"
      width="240px"
      minWidth="240px"
      _hover={{
        boxShadow: "md",
        cursor: "pointer",
      }}
    >
      <Box width="100%">
        <Image objectFit="cover" width="100%" src={image}></Image>
      </Box>
      <Stack spacing="0" padding={3} alignSelf="flex-start">
        <Text as="span" fontFamily="fireSans" fontSize="1.1rem">
          USDT {price}
        </Text>
        <Text as="span">{name} </Text>
      </Stack>
    </Stack>
  );
}

export default ItemForSale;
