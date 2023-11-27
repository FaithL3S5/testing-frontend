import {
  Flex,
  Text,
  Input,
  IconButton,
  Heading,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* Header */}
      <Flex mb={3} justifyContent="space-between" position="relative">
        <Flex alignItems="center">
          <Text className="material-icons" as="span" lineHeight="1">
            pie_chart
          </Text>
          <Heading size="md" as="span" ml="2">
            Phonebook App
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <IconButton
            aria-label="Search"
            icon={<Text className="material-icons">add</Text>}
            variant="ghost"
          />
          <IconButton
            aria-label="Search"
            icon={<Text className="material-icons">search</Text>}
            onClick={onToggle}
            ml={1}
            variant="ghost"
          />
        </Flex>
        <Flex
          position="absolute"
          top="100%"
          right="0"
          flexDirection="column"
          alignItems="flex-end"
          zIndex={1}
        >
          <Collapse in={isOpen} animateOpacity>
            <Input bgColor="black" mb={5} />
          </Collapse>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
