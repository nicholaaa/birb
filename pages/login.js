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
import { supabase } from "../supabaseClient";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const toast = useToast();

    useEffect(() => {
        // Check if user is already logged in
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                router.push("/add");
            }
        };
        checkSession();
    }, []);

    const HandleSubmit = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            toast({
                title: "Login Failed",
                description: error.message,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Login Successful",
                status: "success",
                duration: 1000,
                isClosable: true,
            });
            router.push("/add");
        }
    };
    
    return (
        <>
            <Layout title="Password">
                <Container>
                    <Heading as="h1" size="xl" mt={6} align="center">
                        Login
                    </Heading>
                    <Divider />
                    <br />
                    <FormControl isRequired="true">
                        <FormLabel>Enter Email</FormLabel>
                        <Input
                            type="string"
                            placeholder="Email"
                            autoComplete="off"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <FormLabel>Enter Password</FormLabel>
                        <Input
                            type="string"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={handlePasswordChange}
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

export default Login;
export { getServerSideProps } from "../components/chakra";
