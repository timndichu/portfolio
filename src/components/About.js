import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  Link,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";

export default function About({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 12 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.500"} fontSize={"xl"} px={4}>
            I am a passionate full-stack developer specializing in mobile app
            development using React Native and Flutter. I also create dynamic
            web applications using React and Next.js. With a strong proficiency
            in Node.js, I excel at building robust APIs to power modern
            applications. My goal is to leverage my skills and expertise to
            deliver innovative solutions that enhance user experiences across
            multiple platforms.
          </Text>
          <Center>
            <Box width="fit-content" align='center'>
              <Link href='https://drive.google.com/file/d/1J67w0FD5K2h4UpTc-zOVCeR8hhpAMTqf/view' textDecoration="none" isExternal>
                <Button rightIcon={<BsDownload />} color={`${color}.400`} textDecoration="none" >
                  Download Resume
                </Button>
              </Link>
            </Box>
          </Center>s
        </Stack>
      </Container>
    </>
  );
}
