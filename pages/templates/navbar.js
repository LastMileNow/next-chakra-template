import {Box, Flex,  Link,  BreadcrumbLink} from '@chakra-ui/react';

export default function navbar() {
    return (
        <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="full"
          maxW="sm"
          mx="auto"
          px={4}
          py={3}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="md"
          rounded="md"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <span
              fontSize="sm"
              color="gray.800"
              _dark={{
                color: "gray.400",
              }}
            >
              Courses and MOOCs
            </span>
            <span
              color="brand.800"
              _dark={{
                color: "brand.900",
              }}
              px={3}
              py={1}
              rounded="full"
              textTransform="uppercase"
              fontSize="xs"
            >
              psychology
            </span>
          </Flex>
      
          <Box>
            <h1
              fontSize="lg"
              fontWeight="bold"
              mt={2}
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              AP® Psychology - Course 5: Health and Behavior
            </h1>
            <p
              fontSize="sm"
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi
              similique exercitationem optio libero vitae accusamus cupiditate laborum
              eos.
            </p>
          </Box>
      
          <Box>
            <Flex
              alignItems="center"
              mt={2}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <span>Visit on:</span>
              <Link
                mx={2}
                cursor="pointer"
                textDecor="underline"
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
                edx.org
              </Link>
              <span>or</span>
              <Link
                mx={2}
                cursor="pointer"
                textDecor="underline"
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
                wordBreak="break-word"
              >
                classcentral.com
              </Link>
            </Flex>
      
            <Flex alignItems="center" justifyContent="center" mt={4}>
              <Link
                mr={2}
                color="gray.800"
                _dark={{
                  color: "gray.400",
                }}
                _hover={{
                  color: "gray.700",
                  _dark: {
                    color: "gray.300",
                  },
                }}
                cursor="pointer"
              >
              </Link>
      
              <Link
                mr={2}
                color="gray.800"
                _dark={{
                  color: "gray.400",
                }}
                _hover={{
                  color: "gray.700",
                  _dark: {
                    color: "gray.300",
                  },
                }}
                cursor="pointer"
              >
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>      
    );
  };
  