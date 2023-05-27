import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  Wrap,
  HStack,
  Image
} from "@chakra-ui/react";


export default function Skills({ color }) {

  const frontendTechnologies = [
    {
      name: "React",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
        },
    {
      name: "NextJS",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Javascript",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Typescript",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "CSS",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    
    // Add more frontend technologies as needed
  ];
  
  const databaseTechnologies = [
    {
      name: "MySQL",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {name: "Firebase",
    logoUrl: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
  }
    // Add more database technologies as needed
  ];
  
  const backendTechnologies = [
    {
      name: "Node.js",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express.js",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Typescript",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    // Add more backend technologies as needed
  ];
  
  const mobileTechnologies = [
    {
      name: "React Native",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Flutter",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    },
    {
      name: "Kotlin",
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
    },
    // Add more mobile technologies as needed
  ];


  return (
    <>
      <Container maxW={"3xl"} id="Skills">
        <Stack
          as={Box}

          spacing={{ base: 8, md: 4 }}
          pb={{ base: 4, md: 8 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Skills</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack pl={4} spacing={{ base: 8, md: 4 }}>
            <Text fontWeight={600}>Web Development</Text>
            <Wrap spacing={4} >
              {frontendTechnologies.map((technology) => (
                 <Box key={technology.name} align="center">
                  <Image src={technology.logoUrl} alt={technology.name} boxSize="40px" />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap>

            <Text fontWeight={600}>Mobile Development</Text>
            <Wrap spacing={4} >
              {mobileTechnologies.map((technology) => (
                <Box key={technology.name} align="center">
                  <Image src={technology.logoUrl} alt={technology.name} boxSize="40px" />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap>
            <Text fontWeight={600}>Back End Development</Text>
            <Wrap spacing={4} >
              {backendTechnologies.map((technology) => (
                <Box key={technology.name} align="center">
                  <Image src={technology.logoUrl} alt={technology.name} boxSize="40px" />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap>
            <Text fontWeight={600}>Databases</Text>
            <Wrap spacing={4} >
              {databaseTechnologies.map((technology) => (
                 <Box key={technology.name} align="center">
                  <Image src={technology.logoUrl} alt={technology.name} boxSize="40px" />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap>
          </Stack>


        </Stack>
      </Container>
    </>
  );
}
