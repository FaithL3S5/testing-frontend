import React, { useState, useEffect } from "react";
import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";
import Contact from "@/reusables/types/types";

interface ContactAvatarProps {
  user: Contact;
}

const ContactAvatar: React.FC<ContactAvatarProps> = ({ user }) => {
  // Function to generate a random background color
  const [userColor, setUserColor] = useState("gray.500");

  useEffect(() => {
    const availableColors = [
      "#9e2a2b", // Dark Red
      "#d7524e", // Dark Coral
      "#e2725b", // Dark Salmon
      "#cf3e3e", // Dark Orange-Red

      "#d9853b", // Dark Orange
      "#e4a15a", // Dark Peach
      "#f2b670", // Dark Apricot
      "#d18f45", // Dark Goldenrod

      "#3c8440", // Dark Green
      "#5b9c64", // Dark Olive Green
      "#4a8a57", // Dark Forest Green
      "#49774b", // Dark Sea Green

      "#1c5d99", // Dark Blue
      "#347ab7", // Dark Steel Blue
      "#2a6a9e", // Dark Dodger Blue
      "#385d8a", // Dark Medium Slate Blue

      "#812f67", // Dark Magenta
      "#a5518b", // Dark Orchid
      "#8a3b6f", // Dark Medium Orchid
      "#6b2c56", // Dark Dark Orchid

      "#632b79", // Dark Purple
      "#8d4c89", // Dark Medium Purple
      "#753c72", // Dark Dark Slate Blue
      "#5e2e63", // Dark Dark Purple
    ];

    const userToSet =
      `color-${user.last_name}_${user.first_name}`.toUpperCase();

    const userColor = localStorage?.getItem(userToSet)
      ? localStorage.getItem(userToSet)
      : null;

    if (!userColor) {
      // If not, assign a random color and store it in localStorage
      let setColor =
        availableColors[Math.floor(Math.random() * availableColors.length)];
      setUserColor(setColor);
      localStorage.setItem(userToSet, setColor);
    } else {
      setUserColor(userColor);
    }
  }, [user.first_name, user.last_name]);

  // const checkMultiplePhones = () => {
  //   if (user.phone_numbers > 1) {
  //     return "bold";
  //   } else {
  //     return "normal";
  //   }
  // };

  return (
    <Stack
      direction="row"
      flex="1"
      textAlign="left"
      textTransform="uppercase"
      alignItems="center"
    >
      {/* Circular Avatar with random background color */}
      <Avatar
        size="sm"
        backgroundColor={userColor}
        name={user.last_name}
        fontWeight="bold"
      />

      <Box ml={4}>
        <Flex as="span">
          <Text>
            <strong>{user.last_name}</strong> {user.first_name}
          </Text>
        </Flex>
      </Box>
    </Stack>
  );
};

export default ContactAvatar;
