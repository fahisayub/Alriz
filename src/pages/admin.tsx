import { useEffect, useState } from 'react';
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react';

interface SwapRequest {
  id: string;
  homeId: string;
  mealType: string;
  newDate: string;
}

const AdminPage = () => {
  const [swapRequests, setSwapRequests] = useState<SwapRequest[]>([]);
  const toast = useToast();

  useEffect(() => {
    const fetchSwapRequests = async () => {
      try {
        const response = await fetch('/api/meal/swap');
        const data = await response.json();
        console.log('Fetched swap requests:', data); // Debugging log
        if (Array.isArray(data)) {
          setSwapRequests(data);
        } else {
          setSwapRequests([]);
        }
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error',
          description: 'An error occurred while fetching swap requests',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchSwapRequests();
  }, [toast]);

  const handleApprove = async (id: string) => {
    try {
      const response = await fetch(`/api/meal/swap/${id}/approve`, {
        method: 'POST',
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Swap request approved successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setSwapRequests(swapRequests.filter((request) => request.id !== id));
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
        description: 'An error occurred while approving the swap request',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleReject = async (id: string) => {
    try {
      const response = await fetch(`/api/meal/swap/${id}/reject`, {
        method: 'POST',
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Swap request rejected successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setSwapRequests(swapRequests.filter((request) => request.id !== id));
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
        description: 'An error occurred while rejecting the swap request',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Home ID</Th>
            <Th>Meal Type</Th>
            <Th>New Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {swapRequests.map((request) => (
            <Tr key={request.id}>
              <Td>{request.homeId}</Td>
              <Td>{request.mealType}</Td>
              <Td>{request.newDate}</Td>
              <Td>
                <Button colorScheme="teal" size="sm" onClick={() => handleApprove(request.id)}>
                  Approve
                </Button>
                <Button colorScheme="red" size="sm" ml={2} onClick={() => handleReject(request.id)}>
                  Reject
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdminPage;
