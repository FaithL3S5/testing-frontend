import React from "react";
import {
  Stack,
  Heading,
  Card,
  CardBody,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Box,
  IconButton,
  Text,
} from "@chakra-ui/react";
import ContactAvatar from "../ContactAvatar/ContactAvatar";
import Contact from "@/reusables/types/types";

type ContactCardProps = {
  contactGroup: { [key: string]: Contact[] };
  star: string;
  placeAndRemoveFavorite: (userName: string, strategy: string) => void;
};

const ContactCard: React.FC<ContactCardProps> = ({
  contactGroup,
  star,
  placeAndRemoveFavorite,
}) => {
  return (
    <>
      {Object.keys(contactGroup).map((letter) => (
        <Stack key={letter} spacing="4" flex={1}>
          <Heading size="md">{letter}</Heading>
          <Card borderRadius="3xl" bgColor="white" color="black" mb={5}>
            <CardBody>
              {contactGroup[letter].map((contact, index) => {
                const multipleNumbers = () => {
                  if (contact.phone_numbers > 1) {
                    return ["bold", false];
                  } else {
                    return ["normal", true];
                  }
                };

                const booleanNumbers = multipleNumbers()[1] as boolean;

                return (
                  <AccordionItem
                    key={contact._id}
                    borderBottom={
                      index !== contactGroup[letter].length - 1
                        ? "1px solid orange"
                        : "none"
                    }
                    my={1}
                  >
                    <AccordionButton>
                      <ContactAvatar key={contact._id} user={contact} />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Text fontWeight="bold" as="span">
                          Default Phone:{" "}
                        </Text>
                        <Text fontWeight="bold" as="span">
                          {contact.default_number}
                        </Text>
                        <Text
                          display="flex"
                          alignItems="center"
                          hidden={booleanNumbers}
                          color="green.500"
                        >
                          Multiple Numbers Available
                          <Text
                            className="material-icons-outlined"
                            as="span"
                            lineHeight="1"
                            fontSize="lg"
                            ml="1" // Adjust the margin for spacing
                          >
                            info
                          </Text>
                        </Text>
                      </Box>
                      <Flex justifyContent="center" alignItems="center" mt={3}>
                        <IconButton
                          aria-label="Star"
                          icon={
                            <Text className="material-icons-outlined">
                              {star.toLowerCase()}
                            </Text>
                          }
                          color="gray.400"
                          // bgColor="gray.900"
                          marginRight="1rem"
                          onClick={() =>
                            placeAndRemoveFavorite(
                              `${contact.last_name} ${contact.first_name}`,
                              star === "star" ? "remove" : "place"
                            )
                          }
                          // _active={{ bgColor: "gray.700" }}
                        />
                        <IconButton
                          aria-label="Edit"
                          icon={
                            <Text className="material-icons-outlined">
                              edit
                            </Text>
                          }
                          color="orange.400"
                          // bgColor="gray.900"
                          marginRight="1rem"
                          onClick={(event) => {}}
                          // _active={{ bgColor: "gray.700" }}
                        />
                        <IconButton
                          aria-label="Delete"
                          icon={
                            <Text className="material-icons-outlined">
                              delete
                            </Text>
                          }
                          color="red.400"
                          // bgColor="gray.900"
                          marginRight="1rem"
                          onClick={(event) => {}}
                          // _active={{ bgColor: "gray.700" }}
                        />
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </CardBody>
          </Card>
        </Stack>
      ))}
    </>
  );
};
export default ContactCard;
