import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';

const RegisterHome = () => {
  const [address, setAddress] = useState('');
  const [masjidId, setMasjidId] = useState('');
  const [userId, setUserId] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/home/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address, masjidId, userId }),
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: 'Home registered successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setAddress('');
      setMasjidId('');
      setUserId('');
    } else {
      toast({
        title: 'Error registering home.',
        description: data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="address" mb={4}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="masjidId" mb={4}>
          <FormLabel>Masjid ID</FormLabel>
          <Input
            type="text"
            value={masjidId}
            onChange={(e) => setMasjidId(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="userId" mb={4}>
          <FormLabel>User ID</FormLabel>
          <Input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Register Home
        </Button>
      </form>
    </Box>
  );
};

export default RegisterHome;
