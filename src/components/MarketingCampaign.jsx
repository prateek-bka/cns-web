import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  Text,
} from "@chakra-ui/react";

const MarketingCampaign = () => {
  return (
    <>
      <Stack w={"100%"}>
        <Stack direction={["column", "column", "row"]} w={"100%"} m={"auto"}>
          <Card p={"2"}>
            <CardHeader
              display="flex"
              justifyContent={"space-between"}
              alignContent={"center"}
            >
              <Stack>
                <Heading color={"gray.600"} size={"md"}>
                  Marketing campaigns
                </Heading>
              </Stack>

              <Stack display={"flex"} flexDirection={"row"}>
                <Button colorScheme="whatsapp" rounded={"2xl"}>
                  28 Active
                </Button>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        color={"teal.700"}
                        backgroundColor={"white"}
                        isActive={isOpen}
                        as={Button}
                        rightIcon={
                          <Image
                            src="https://www.svgrepo.com/show/526221/settings.svg"
                            w={"6"}
                          />
                        }
                      ></MenuButton>
                      <MenuList>
                        <MenuItem>Update Data</MenuItem>
                        <MenuItem>Detailed Log</MenuItem>
                        <MenuItem>Statistics</MenuItem>

                        <MenuItem onClick={() => alert("Kagebunshin")}>
                          Create a Copy
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Stack>
            </CardHeader>
            <Divider color={"gray.300"} />

            <CardBody>
              <Stack direction={["column", "column", "row"]} w={"100%"}>
                <Stack>
                  <Box display={"flex"} gap={"4"} p={"4"}>
                    <Image
                      src="https://www.svgrepo.com/show/71142/pie-chart.svg"
                      w={"20"}
                    />
                    <Box>
                      <Heading color={"green.700"}>{`$38,289`}</Heading>
                      <Text color={"gray.600"}>May 12, 12:30 am</Text>
                      <StatGroup>
                        <Stat>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                          </StatHelpText>
                        </Stat>
                      </StatGroup>
                    </Box>
                  </Box>
                </Stack>

                <Stack>
                  <Box display={"flex"} gap={"4"} p={"4"}>
                    <Image
                      src="https://www.svgrepo.com/show/513289/chart-pie.svg"
                      w={"20"}
                    />
                    <Box>
                      <Heading color={"green.700"}>{`$2,458`}</Heading>
                      <Text color={"gray.600"}>Jun 4, 4:00 am</Text>
                      <StatGroup>
                        <Stat>
                          <StatHelpText>
                            <StatArrow type="decrease" />
                            4.09%
                          </StatHelpText>
                        </Stat>
                      </StatGroup>
                    </Box>
                  </Box>
                </Stack>
                <Stack>
                  <Box>
                    <Button colorScheme="telegram" m={"8"} gap={"4"}>
                      <Image
                        src="https://www.svgrepo.com/show/525878/file-send.svg"
                        w={"8"}
                      />
                      View Report
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Stack>
    </>
  );
};

export default MarketingCampaign;
