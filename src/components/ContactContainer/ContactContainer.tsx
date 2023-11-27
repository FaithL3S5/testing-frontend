import Contact from "@/reusables/types/types";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
  StackDivider,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import ContactAvatar from "../ContactAvatar/ContactAvatar";
import PhoneForm from "../PhoneForm/PhoneForm";
import ContactCard from "../ContactCard/ContactCard";

type ContactContainerProps = {
  contacts: Contact[];
};

const ContactContainer: React.FC<ContactContainerProps> = ({ contacts }) => {
  const normalContactGroup: { [key: string]: Contact[] } = {};
  const favoriteContactGroup: { [key: string]: Contact[] } = {};

  // const normalContactGroup: { [key: string]: Contact[] } = useMemo(
  //   () => ({}),
  //   []
  // );
  // const favoriteContactGroup: { [key: string]: Contact[] } = useMemo(
  //   () => ({}),
  //   []
  // );

  const [favoriteContact, setFavoriteContact] = useState<string[]>([]);

  useEffect(() => {
    const favorites = window?.localStorage?.getItem("favorites")
      ? JSON.parse(`${localStorage.getItem("favorites")}`)
      : [];
    setFavoriteContact((item) => [...item, ...favorites]);
  }, []);

  contacts.forEach((item) => {
    const firstLetter = item.last_name.charAt(0).toUpperCase();

    if (favoriteContact.includes(`${item.last_name} ${item.first_name}`)) {
      if (!favoriteContactGroup[firstLetter]) {
        favoriteContactGroup[firstLetter] = [];
      }
      favoriteContactGroup[firstLetter].push(item);
    } else {
      if (!normalContactGroup[firstLetter]) {
        normalContactGroup[firstLetter] = [];
      }
      normalContactGroup[firstLetter].push(item);
    }
  });

  // useEffect(() => {
  //   const favorites = window?.localStorage?.getItem("favorites")
  //     ? JSON.parse(`${localStorage.getItem("favorites")}`)
  //     : [];
  //   setFavoriteContact((item) => [...item, ...favorites]);
  //   contacts.forEach((item) => {
  //     const firstLetter = item.last_name.charAt(0).toUpperCase();

  //     if (favoriteContact.includes(`${item.last_name} ${item.first_name}`)) {
  //       if (!favoriteContactGroup[firstLetter]) {
  //         favoriteContactGroup[firstLetter] = [];
  //       }
  //       favoriteContactGroup[firstLetter].push(item);
  //     } else {
  //       if (!normalContactGroup[firstLetter]) {
  //         normalContactGroup[firstLetter] = [];
  //       }
  //       normalContactGroup[firstLetter].push(item);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // Logic that depends on favoriteContact and contacts
    contacts.forEach((item) => {
      const firstLetter = item.last_name.charAt(0).toUpperCase();

      if (favoriteContact.includes(`${item.last_name} ${item.first_name}`)) {
        if (!favoriteContactGroup[firstLetter]) {
          favoriteContactGroup[firstLetter] = [];
        }
        favoriteContactGroup[firstLetter].push(item);
      } else {
        if (!normalContactGroup[firstLetter]) {
          normalContactGroup[firstLetter] = [];
        }
        normalContactGroup[firstLetter].push(item);
      }
    });
  }, [favoriteContact, contacts, favoriteContactGroup, normalContactGroup]);

  const placeAndRemoveFavorite = (userName: string, strategy: string) => {
    if (strategy.toLowerCase() === "place") {
      setFavoriteContact((item) => {
        localStorage.setItem("favorites", JSON.stringify([...item, userName]));

        return [...item, userName];
      });
    } else if (strategy.toLowerCase() === "remove") {
      setFavoriteContact((item) => {
        localStorage.setItem(
          "favorites",
          JSON.stringify(item.filter((item) => item !== userName))
        );

        return item.filter((item) => item !== userName);
      });
    } else {
      console.error("Not A Valid Strategy");
    }
  };

  console.log(normalContactGroup);

  return (
    <>
      {/* Favorite List */}

      {/* Contact List */}
      <Stack
        overflowY="auto" // or "scroll"
        height="80vh" // Adjust the height accordingly
        width="80vw" // Adjust the width accordingly
        divider={<StackDivider />}
        spacing="4"
        flex={1}
      >
        <Accordion allowToggle>
          <Stack divider={<StackDivider />} spacing="4" flex={1}>
            <Heading size="md">Favorite Contacts</Heading>
            <ContactCard
              contactGroup={favoriteContactGroup}
              star="star"
              placeAndRemoveFavorite={placeAndRemoveFavorite}
            />
            <Heading size="md">Normal Contacts</Heading>
            <ContactCard
              contactGroup={normalContactGroup}
              star="star_border"
              placeAndRemoveFavorite={placeAndRemoveFavorite}
            />
          </Stack>
        </Accordion>
      </Stack>
    </>
  );
};
export default ContactContainer;
