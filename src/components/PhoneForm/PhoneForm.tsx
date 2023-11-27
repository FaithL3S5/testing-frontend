import React, { useState } from "react";
import { Flex, Input, Radio, RadioGroup, Button, Text } from "@chakra-ui/react";

const PhoneForm = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([
    { id: 1, number: "", isChosen: true }, // Initial pair
  ]);

  const handleInputChange = (id: number, value: string) => {
    const updatedPhoneNumbers = phoneNumbers.map((phoneNumber) =>
      phoneNumber.id === id ? { ...phoneNumber, number: value } : phoneNumber
    );
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleRadioChange = (id: number) => {
    const updatedPhoneNumbers = phoneNumbers.map((phoneNumber) =>
      phoneNumber.id === id
        ? { ...phoneNumber, isChosen: true }
        : { ...phoneNumber, isChosen: false }
    );
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleAddPair = () => {
    const newId = phoneNumbers.length + 1;
    setPhoneNumbers([
      ...phoneNumbers,
      { id: newId, number: "", isChosen: false },
    ]);
  };

  const selectedNumber = () => {
    return (
      phoneNumbers.find((element) => element.isChosen) || {
        id: 1,
        number: "",
        isChosen: true,
      }
    );
  };

  return (
    <Flex direction="column">
      <Text mb={3}>Default Phone Number is: {selectedNumber()["number"]}</Text>
      {phoneNumbers.map((phoneNumber) => (
        <Flex key={phoneNumber.id} alignItems="center" mb={2}>
          <Input
            placeholder={`Phone Number ${phoneNumber.id}`}
            value={phoneNumber.number}
            onChange={(e) => handleInputChange(phoneNumber.id, e.target.value)}
            mr={2}
          />
          <RadioGroup
            onChange={() => handleRadioChange(phoneNumber.id)}
            value={phoneNumber.isChosen ? "option1" : "option2"}
          >
            <Radio value="option1"></Radio>
          </RadioGroup>
        </Flex>
      ))}
      <Button onClick={handleAddPair} mt={2}>
        Add Another Pair
      </Button>
    </Flex>
  );
};

export default PhoneForm;
