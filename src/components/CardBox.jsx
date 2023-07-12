import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardBox = () => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        m={"auto"}
        ml={"4"}
        p={"4"}
      >
        <Card backgroundColor={"teal.400"} color={"white"}>
          <CardHeader fontSize={"lg"} p={"2"}>
            <Heading size="xl">$ 3,450</Heading>
          </CardHeader>
          <CardBody p={"1"} m={"2"}>
            <Text>Members Online</Text>
            <Text>489 average</Text>
          </CardBody>
          <CardFooter p={"1"} m={"auto"}>
            <Image
              src="https://www.svgrepo.com/show/126737/graph.svg"
              w={"40"}
            />
          </CardFooter>
        </Card>
        <Card backgroundColor={"pink.500"} color={"white"}>
          <CardHeader fontSize={"lg"} p={"2"}>
            <Heading size="xl">49.4%</Heading>
          </CardHeader>
          <CardBody p={"1"} m={"2"}>
            <Text>Current server load</Text>
            <Text>34.6% avg</Text>
          </CardBody>
          <CardFooter p={"1"} m={"auto"}>
            <Image
              src="https://www.svgrepo.com/show/162265/graph.svg"
              w={"40"}
            />
          </CardFooter>
        </Card>{" "}
        <Card backgroundColor={"blue.600"} color={"white"}>
          <CardHeader fontSize={"lg"} p={"2"}>
            <Heading size="xl">$ 18,390</Heading>
          </CardHeader>
          <CardBody p={"1"} m={"2"}>
            <Text>Today's revenue</Text>
            <Text>$ 37,578 avg</Text>
          </CardBody>
          <CardFooter p={"1"} m={"auto"}>
            <Image
              src="https://www.svgrepo.com/show/484666/bar-graph.svg"
              w={"40"}
            />
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default CardBox;
