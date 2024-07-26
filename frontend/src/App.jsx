import { Container, Stack, Text } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import UserGrid from "./components/UserGrid"
import { useState } from "react"

export const BASE_URL = "http://127.0.0.1:5000/api" // Define the base URL for the API

function App() {
  // Define a state variable called "users" and a function to update it called "setUsers"
  const [users, setUsers] = useState([])

  return (
    <Stack minH={"100vh"}>
      {/* Render the Navbar component and pass the "setUsers" function as a prop */}
      <Navbar setUsers={setUsers} />

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          {/* Render a Text component with a gradient background and the text "My Besties" */}
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>My Besties</Text>
          🚀
        </Text>

        {/* Render the UserGrid component and pass the "users" state variable and "setUsers" function as props */}
        <UserGrid users={users} setUsers={setUsers} />
      </Container>
    </Stack>
  )
}

export default App
