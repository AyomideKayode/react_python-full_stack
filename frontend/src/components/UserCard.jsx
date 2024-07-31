import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, useToast } from "@chakra-ui/react"
import { BiTrash } from "react-icons/bi"
import EditModal from "./EditModal"
import { BASE_URL } from "../App"

const UserCard = ({ user, setUsers }) => {
  const toast = useToast(); // create a toast notification
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/friends/${user.id}`, {
        method: "DELETE",
      });
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id)); // remove the user from the users state variable
      toast({
        status: "success",
        title: "Success",
        description: "Friend deleted successfully.",
        duration: 2000,
        position: "top-center",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "bottom-center",
        isClosable: true,
      });
    }
  }

  return <Card>
    <CardHeader>
      <Flex gap={4}>
        <Flex flex={1} gap={4} alignItems={"center"}>
          <Avatar src={user.imgUrl} /> {/* Render the user's image */}
          <Box>
            <Heading size="sm">{user.name}</Heading>
            <Text>{user.role}</Text>
          </Box>
        </Flex>
        <Flex>
          <EditModal user={user} setUsers={setUsers} />
          <IconButton
            variant="ghost"
            colorScheme="red"
            size={"sm"}
            aria-label="See menu"
            icon={<BiTrash size={20} />}
            onClick={handleDeleteUser}
          />
        </Flex>
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>{user.description}</Text>
    </CardBody>
  </Card>
}

export default UserCard
