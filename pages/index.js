import {
    Container,
    Heading,
    Box,
    Link,
    Button,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { IoLogoInstagram } from "react-icons/io5";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                    css={{ backdropFilter: "blur(10px)" }}
                >
                    Hello, I&apos;m a bird-lover/wildlife photographer based in
                    Singapore!
                </Box>

                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Wayne Quah
                        </Heading>
                        <p>Student / Photographer / Environmentalist</p>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        As a student photographer and environmentalist, my work
                        is rooted in a deep love for the natural world and a
                        commitment to its preservation. Through my photography,
                        I aim to capture the beauty, resilience, and
                        vulnerability of the environments around us, from
                        vibrant landscapes to the subtle details of wildlife and
                        plant life.
                    </Paragraph>
                    <br />
                    <Paragraph>
                        Each image I create is a piece of a larger story—one
                        that highlights the urgent need for conservation,
                        respect for biodiversity, and awareness of our impact on
                        the planet. I want my work to inspire others to see the
                        world through a lens of empathy and responsibility,
                        fostering a connection that leads to meaningful action
                        for a sustainable future.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/browse"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            My Photos
                        </Button>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2006</BioYear>
                        Born in Singapore.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Completed O&apos; Levels and graduated Xinmin Secondary
                        School.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Studying at Republic Polytecnic for a Diploma in
                        Environmental and Marine Science.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        I like travelling and exploring in my free time, finding
                        new places in nature to explore and photograph
                        Singapore's wildlife. Many of my pictures come from
                        these travels.
                    </Paragraph>
                </Section>

                <br />

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://www.instagram.com/dxcept._.z?igsh=MTg3NmprMXE1MzBwdA=="
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoInstagram />}
                                >
                                    @dxcept._.z
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;
export { getServerSideProps } from "../components/chakra";
