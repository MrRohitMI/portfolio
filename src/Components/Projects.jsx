import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Card from "./Card";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop} cursor="pointer">
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="blue"
            _hover={{ bgColor: "blue.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const TechStackTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} marginTop={props.marginTop} cursor="pointer">
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="teal"
            _hover={{ bgColor: "teal.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://i.postimg.cc/vmndQTJG/Whats-App-Image-2022-08-06-at-2-52-05-PM-removebg-preview-1.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Projects = () => {
  return (
    <Container maxW={"7xl"} p="12" id="Projects">
      <Heading as="h2" marginTop="5">
        Projects
      </Heading>
      <Divider marginTop="5" />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={"2"}
      >
        <GridItem>
          <Card
            img={"https://i.postimg.cc/FmhJKYQX/image-7.png"}
            tag={["Collaborative", "E-Commerce"]}
            tsTags={["HTML", "CSS", "JavaScript","LocalStorage","Bootstrap","Webscrap","Slick Slider","Jquery"]}
            heading={"Dot&Key Clone"}
            content={
              "An e-commerce platform to buy skin care products."
            }
            deploy={"https://dotandkeyclone.netlify.app/"}
            git={"https://github.com/MrRohitMI/Dot-key"}
          />
        </GridItem>
        <GridItem>
          <Card
            img={
              "https://i.postimg.cc/SqR3bcft/Kimaye-Project.png"
            }
            tag={["Collaborative", "E-Commerce"]}
            tsTags={[
              "HTML",
              "CSS",
              "JavaScript",
              "LocalStorage",
              "Bootstrap",
              "Jquery"
            ]}
            heading={"Kimaye Clone"}
            content={
              "An e-commerce platform to buy fruits & vegetables"
            }
            deploy={"https://kimaye-masai.netlify.app/"}
            git={"https://github.com/MrRohitMI/Kimaye"}
          />
        </GridItem>
        <GridItem>
          <Card
            img={"https://i.postimg.cc/QDmRF1kh/image-8.png"}
            tag={["Solo", "News"]}
            tsTags={["ReactJs","HTML", "CSS", "JavaScript","Chakra UI"]}
            heading={"The Hindu Clone"}
            content={
              "First project on React-Js, which came with a lot of challenges."
            }
            deploy={"https://the-hindu-clone-fawn.vercel.app/"}
            git={"https://github.com/MrRohitMI/false-steam-4531"}
          />
        </GridItem>
        <GridItem>
          <Card
            img={"https://i.postimg.cc/qB95KzVy/image-9.png"}
            tag={["Solo", "Weight Loss"]}
            tsTags={["ReactJs","Chakra UI","HTML", "CSS", "JavaScript", "Bootstrap","REST-API"]}
            heading={"Lose It Clone"}
            content={
              "Lose It! is mobilizing the world to achieve a healthy weight."
            }
            deploy={"https://lose-it-clone.vercel.app/"}
            git={"https://github.com/MrRohitMI/moral-riddle-2098"}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Projects;
