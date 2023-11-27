import ContactCard from "@/components/ContactContainer/ContactContainer";
import Header from "@/components/Header/Header";
import Contact from "@/reusables/types/types";
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const contactArray: Contact[] = [
    {
      _id: "655c6a2f64afdb398658ec70",
      contact_id: "655c6a2f64afdb398658ec6c",
      first_name: "John",
      last_name: "123",
      default_number: "86767",
      phone_numbers: 1,
      createdAt: "2023-11-21T08:28:31.247Z",
      updatedAt: "2023-11-21T08:28:31.247Z",
      __v: 0,
    },
    {
      _id: "6561a98995095b8c3c8b38ca",
      contact_id: "6561a98995095b8c3c8b38c6",
      first_name: "Poppy",
      last_name: "Abba",
      default_number: "980891",
      phone_numbers: 2,
      createdAt: "2023-11-25T08:00:09.442Z",
      updatedAt: "2023-11-25T08:00:09.442Z",
      __v: 0,
    },
    {
      _id: "6561a97695095b8c3c8b38c4",
      contact_id: "6561a97695095b8c3c8b38c0",
      first_name: "Berkley",
      last_name: "Arkham",
      default_number: "89701234",
      phone_numbers: 2,
      createdAt: "2023-11-25T07:59:50.618Z",
      updatedAt: "2023-11-25T07:59:50.618Z",
      __v: 0,
    },
    {
      _id: "6561ab1bc90e619d0728c58c",
      contact_id: "6561ab1bc90e619d0728c588",
      first_name: "Zack",
      last_name: "Birmingham",
      default_number: "647823",
      phone_numbers: 1,
      createdAt: "2023-11-25T08:06:51.759Z",
      updatedAt: "2023-11-25T08:06:51.759Z",
      __v: 0,
    },
    {
      _id: "655c2a55ed5c530978bd0b30",
      contact_id: "655c2a55ed5c530978bd0b2c",
      first_name: "Krabs",
      last_name: "Kronk",
      default_number: "112312313123112312141413",
      phone_numbers: 2,
      createdAt: "2023-11-21T03:56:05.863Z",
      updatedAt: "2023-11-21T03:57:16.032Z",
      __v: 0,
    },
  ];

  const { toggleColorMode } = useColorMode();
  const formBackGround = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Head>
        <title>Phonebook App by Faith</title>
        <meta name="description" content="Organize your contacts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        // background={formBackGround}
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <Box overflow="auto">
          <Header />
          <ContactCard contacts={contactArray} />
        </Box>
        {/* <Button onClick={toggleColorMode}>Toggle Color Mode</Button> */}
      </Flex>
    </>
  );
}
