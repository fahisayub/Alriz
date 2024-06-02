import { Box, Button, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const HomePage = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Heading>Welcome to the Masjid Meal Scheduler</Heading>
      <NextLink href="/register-home" passHref>
        <Button as={Link} mt={4} colorScheme="teal">
          Register Home
        </Button>
      </NextLink>
    </Box>
  );
};

export default HomePage;
