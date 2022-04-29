import React from "react";
import styled from "@emotion/styled";
import { useApiHook } from "./DisplayAnimeGifs.hooks";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text
} from "@chakra-ui/react";

const Wrapper = styled.div`
  ul {
    max-width: 700px;
    margin: auto;
  }
`;

export const DisplayAnimeGifs = () => {
  const { coinDetails, isLoading } = useApiHook();

  return (
    <Wrapper>
      <ul>
        {isLoading ? (
          <Spinner size="md" />
        ) : (
          <Grid
            justifyContent="center"
            alignItems="center"
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={5}
            width="100%"
          >
            {coinDetails.map(({ id, current_price: price, image, name }) => (
              <GridItem key={id} w="100%" h="auto">
                <Flex direction="column" align="stretch" justify="stretch">
                  <Box style={{ width: "100%", height: "auto" }} boxSize="sm">
                    <Image src={image} alt={name} width="100%" height="100%" />
                  </Box>
                  <Text>{name}</Text>
                  <Text>${price}</Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        )}
      </ul>
    </Wrapper>
  );
};
