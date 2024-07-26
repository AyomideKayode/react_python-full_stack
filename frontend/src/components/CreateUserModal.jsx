import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../App";

const CreateUserModal = ({ setUsers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // create a modal
  {/* Create loading state */ }
  const [isLoading, setIsLoading] = useState(false); // false by default, set to true when we click the "Add" button
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  }); // empty object by default, will store the form inputs
  const toast = useToast(); // create a toast notification

  /**
   * Handles the creation of a new user.
   * @param {Event} e - The event object.
   */
  const handleCreateUser = async (e) => {
    e.preventDefault(); // prevent page refresh
    setIsLoading(true); // set loading to true
    try {
      const res = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }

      toast({
        status: "success",
        title: "Yayy! 🎉",
        description: "Friend created successfully.",
        duration: 2000,
        position: "top-center",
      });
      onClose(); // close the modal
      setUsers((prevUsers) => [...prevUsers, data]); // add the new user to the users state variable

      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      }); // clear the form inputs
    } catch (error) {
      toast({
        status: "error",
        title: "Oops! An error occurred.",
        description: error.message,
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Add button to call the onOpen modal */}
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {/* Add modal content here */}
        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader> My new BFF 😍 </ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* Left */}
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    placeholder='John Doe'
                    value={inputs.name}
                    onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                  />
                </FormControl>

                {/* Right */}
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    placeholder='Software Engineer'
                    value={inputs.role}
                    onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
                  />
                </FormControl>
              </Flex>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflowY={"hidden"}
                  placeholder="He's a software engineer who loves to code and build things."
                  value={inputs.description}
                  onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                />
              </FormControl>

              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio
                    value='male'
                    onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                  >
                    Male
                  </Radio>
                  <Radio
                    value='female'
                    onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                  >
                    Female
                  </Radio>
                </Flex>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} type='submit' isLoading={isLoading}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default CreateUserModal;
