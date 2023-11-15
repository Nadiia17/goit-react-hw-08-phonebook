import React from 'react';
import { Heading, Button, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={8}
        textAlign="center"
      >
        <Heading size="4xl" mb={2}>
          404
        </Heading>
        <Text fontSize="xl" mb={4}>
          Oops! The page you're looking for isn't here.
        </Text>
        <Text mb={8}>
          You might have the wrong address, or the page may have moved.
        </Text>
        <Button as={Link} to="/">
          Back to Home
        </Button>
      </Flex>
    </>
  );
};

export default NotFoundPage;
