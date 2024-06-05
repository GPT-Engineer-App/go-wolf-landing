import { Container, Text, VStack, Heading, Button, IconButton, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          GoWolf
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Unleashing the power of innovation. Join us in our journey to revolutionize the tech industry.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
