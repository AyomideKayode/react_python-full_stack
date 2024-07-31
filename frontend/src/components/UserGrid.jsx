import { Flex, Grid, Spinner, Text } from "@chakra-ui/react"
// import { USERS } from "../dummy/dummyUsers";
import UserCard from "./UserCard";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../App";

// This component displays a grid of user cards
const UserGrid = ({ users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(true);

  // bring in useEffect for sending a request to the backend when we run this component
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/friends`)
        const data = await res.json() // convert the result to json

        if (!res.ok) {
          throw new Error(data.error);
        }
        setUsers(data);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, [setUsers]);

  // Render the user grid
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        gap={4}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </Grid>

      {/* Show a spinner while loading */}
      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {/* Show a message if no friends are found */}
      {!isLoading && users.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"xl"}>
            <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              Poor you! 😢
            </Text>
            No friends found. Add some!
          </Text>
        </Flex>
      )}
    </>
  );
};

export default UserGrid;
