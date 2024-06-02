import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const MealSwapPage = () => {
  const [homeId, setHomeId] = useState('');
  const [mealType, setMealType] = useState('');
  const [newDate, setNewDate] = useState('');
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!homeId || !mealType || !newDate) {
      toast({
        title: 'Error',
        description: 'All fields are required',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('/api/meal/swap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ homeId, mealType, newDate }),
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Swap request submitted successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        router.push('/');
      } else {
        const data = await response.json();
        toast({
          title: 'Error',
          description: data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'An error occurred while submitting the swap request',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <form onSubmit={handleSubmit}>
        <FormControl id="homeId" isRequired>
          <FormLabel>Home ID</FormLabel>
          <Input
            type="text"
            value={homeId}
            onChange={(e) => setHomeId(e.target.value)}
          />
        </FormControl>
        <FormControl id="mealType" isRequired mt={4}>
          <FormLabel>Meal Type</FormLabel>
          <Select
            placeholder="Select meal type"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="BREAKFAST">Breakfast</option>
            <option value="LUNCH">Lunch</option>
            <option value="DINNER">Dinner</option>
          </Select>
        </FormControl>
        <FormControl id="newDate" isRequired mt={4}>
          <FormLabel>New Date</FormLabel>
          <Input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>
          Submit Swap Request
        </Button>
      </form>
    </Box>
  );
};

export default MealSwapPage;
