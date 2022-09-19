import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
  } from "@chakra-ui/react";
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from "react-icons/io5";
  
  import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
  import {
    SiMongodb,
    SiExpress,
    SiPostman,
    SiHtml5,
    SiCss3,
    SiRedux,
  } from "react-icons/si";
  import { DiJavascript1 } from "react-icons/di";
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Skills() {
    return (
      <Container maxW={"5xl"} py={12} id="Skills">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
               My Skills
            </Text>
            <Heading>I persist the Following Skills</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Mentioned below are the skillsets which I possess in terms of Tech
              and Communication and Behavior.
            </Text>
            <Flex gap={10}>
              <Box>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                    />
                  }
                >
                  {/* <Feature
                    icon={<Icon as={SiHtml5} color={"yellow.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"HTML"}
                  /> */}
                  <Text fontSize="20px" fontWeight="bold">Tech Skills</Text>
                  <Text fontSize="18px" color="red">Frontend Development</Text>
                  <Text fontSize="18px" color="purple">Backend Development</Text>
                  <Text fontSize="18px" color="green">Data Structures and Algorithm</Text>
                  
                </Stack>
              </Box>
              <Box>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                    />
                  }
                >
                  <Text fontSize="20px" fontWeight="bold">Soft Skills</Text>
                  <Text fontSize="18px" color="teal">Teamwork</Text>
                  <Text fontSize="18px" color="orange">Problem-Solving</Text>
                  <Text fontSize="18px" color="tomato">Adaptability</Text>
                  <Text fontSize="18px" color="green">Work Ethic</Text>
                </Stack>
              </Box>
            </Flex>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://img.freepik.com/premium-vector/mobile-application-development-concept-illustration-er-developer-using-big-screen-with-site-building-tools_251235-63.jpg?w=740"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }