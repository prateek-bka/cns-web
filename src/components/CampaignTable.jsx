import {
  Box,
  Button,
  Heading,
  Image,
  Stat,
  StatArrow,
  StatHelpText,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { campaign_today } from "./data";

const CampaignTable = () => {
  const tableWidth = useBreakpointValue({ base: "100%", md: "63%" });

  return (
    <Box borderWidth="1px" w={tableWidth} p="2" rounded="md" overflowX="auto">
      <TableContainer borderWidth="1px" rounded="md">
        <Table variant="striped" colorScheme="gray" size="md">
          <Thead>
            <Tr bgColor="gray.100">
              <Th fontSize="lg" fontWeight="extrabold">
                Campaign
              </Th>
              <Th fontSize="lg" fontWeight="extrabold">
                Client
              </Th>
              <Th fontSize="lg" fontWeight="extrabold">
                Changes
              </Th>
              <Th fontSize="lg" fontWeight="extrabold">
                Budget
              </Th>
              <Th fontSize="lg" fontWeight="extrabold">
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {campaign_today.map((e, i) => {
              return (
                <Tr key={i} color="gray.700">
                  <Td>
                    <Box display={"flex"} gap={"4"}>
                      <Image src={e.logo} w={"6"} rounded={"lg"} />
                      <Heading size={"md"} color={"gray.700"}>
                        {e.Name}
                      </Heading>
                    </Box>
                  </Td>
                  <Td>{e.Client}</Td>
                  <Td>
                    <Stat>
                      <StatHelpText>
                        <StatArrow type="increase" />
                        23.36%
                      </StatHelpText>
                    </Stat>
                  </Td>
                  <Td>$ {e.Budget}</Td>
                  <Td>
                    <Button
                      colorScheme={e.Status === "Active" ? "red" : "green"}
                    >
                      {e.Status}
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CampaignTable;
