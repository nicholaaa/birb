import {
    Container,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Divider,
    useToast,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Password = () => {
    const router = useRouter();
    const [entry, setEntry] = useState("");
    const handleEntryChange = (e) => setEntry(e.target.value);
    const toast = useToast();

    useEffect(() => {
        if (sessionStorage.getItem("auth")) {
            router.push("/add");
        }
    })

    const HandleSubmit = () => {
        if (entry === process.env.PASSWORD) {
            sessionStorage.setItem("auth", "true");
            router.push("/add");
        } else {
            toast({
                title: "Access Denied",
                description: "Incorrect Password",
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
    };
    return (
        <>
            <Layout title="Password">
                <Container>
                    <Heading as="h1" size="xl" mt={6} align="center">
                        Password
                    </Heading>
                    <Divider />
                    <br />
                    <FormControl isRequired="true">
                        <FormLabel>Enter Password</FormLabel>
                        <Input
                            type="string"
                            placeholder="Password"
                            autoComplete="off"
                            value={entry}
                            onChange={handleEntryChange}
                        />
                    </FormControl>
                    <Button mt={4} colorScheme="teal" onClick={HandleSubmit}>
                        Submit
                    </Button>
                </Container>
            </Layout>
        </>
    );
};

export default Password;
export { getServerSideProps } from "../components/chakra";
