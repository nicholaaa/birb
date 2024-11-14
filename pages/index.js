import { Container, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h1" size="xl" mt={6}>
                    Homepage
                </Heading>
            </Container>
        </Layout>
    );
};

export default Page;
export { getServerSideProps } from "../components/chakra";
