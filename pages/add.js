import {
    Container,
    Heading,
    Divider,
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    HStack,
    Button,
    Box,
    Text,
    useToast,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../supabaseClient";

//prevent direct url access

const Add = () => {
    const router = useRouter();
    const toast = useToast();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session?.user) {
                toast({
                    title: "403 Forbidden",
                    description: "You must be logged in.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                router.push("/login");
            }
        };

        checkSession();
    }, []);

    const [name, setName] = useState("");
    const handleNameChange = (e) => setName(e.target.value);
    const isErrorName = typeof name != "string";

    const [species, setSpecies] = useState("");
    const handleSpeciesChange = (e) => setSpecies(e.target.value);
    const isErrorSpecies = typeof species != "string";

    const [family, setFamily] = useState("");
    const handleFamilyChange = (e) => setFamily(e.target.value);
    const isErrorFamily = typeof family != "string";

    const [type, setType] = useState("bird");
    const handleTypeChange = (e) => setType(e);

    const [nativity, setNativity] = useState("native");
    const handleNativityChange = (e) => setNativity(e);

    const [selectedFile, setSelectedFile] = useState(null);

    const insertData = async () => {
        let url;
        if (selectedFile) {
            const uploadedImagePath = await uploadImage(selectedFile);
            url = (await getPublicUrl(uploadedImagePath)).publicUrl;
        }
        const { data, error } = await supabase.from("animals").insert([
            {
                name: name,
                species: species,
                family: family,
                nativity: nativity,
                type: type,
                image_url: url,
            },
        ]);

        if (error) {
            console.log("Error: ", error);
        } else {
            console.log(data);
        }
    };

    const handleSubmit = async () => {
        if (
            isErrorName ||
            isErrorSpecies ||
            isErrorFamily ||
            !name ||
            !species ||
            !family
        ) {
            toast({
                title: "Incomplete",
                description: "Please fill in all fields",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Uploading...",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
            await insertData();
            router.push("/browse");
        }
    };

    // async function uploadImage(file) {
    //     const fileName = `${Date.now()}_${file.name}`;
    //     const { data, error } = await supabase.storage
    //         .from("images")
    //         .upload(fileName, file);

    //     if (error) {
    //         console.error("Error uploading image:", error);
    //         return null;
    //     }
    //     console.log(data)
    //     return data.path;
    // }

    async function uploadImage(file) {
        const fileName = `${Date.now()}_${file.name}`;
        console.log("Uploading file:", fileName);
    
        try {
            // Attempt to upload the image
            const { data, error } = await supabase.storage
                .from("images")
                .upload(fileName, file);
    
            if (error) {
                console.error("Error uploading image:", error.message);
                return null;
            }
    
            console.log("File uploaded successfully:", data);
            return data.path; // Return the file path
        } catch (err) {
            console.error("Unexpected error during file upload:", err.message);
            return null;
        }
    }
    

    async function getPublicUrl(filepath) {
        const { data, error } = supabase.storage.from("images").getPublicUrl(filepath);
    
        if (error) {
            console.error("Error getting public URL:", error.message);
            return { publicUrl: null };  // Return null if the URL can't be fetched
        }
    
        // Return the public URL of the uploaded image
        return data;
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(file);
        toast({
            title: "File uploaded",
            description: `${event.target.files[0].name} has been selected.`,
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Layout title="Add Discovery">
            <Container>
                <Heading as="h1" size="xl" mt={6} align="center">
                    Add Discovery
                </Heading>
                <Divider />
                <br />
                <FormControl isRequired="true" isInvalid={isErrorName}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="string"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        autoComplete="off"
                    />
                </FormControl>

                <FormControl isRequired="true" isInvalid={isErrorSpecies}>
                    <FormLabel>Species</FormLabel>
                    <Input
                        type="string"
                        placeholder="Species"
                        value={species}
                        onChange={handleSpeciesChange}
                        autoComplete="off"
                    />
                </FormControl>
                
                <FormControl isRequired="true" isInvalid={isErrorFamily}>
                    <FormLabel>Family</FormLabel>
                    <Input
                        type="string"
                        placeholder="Family"
                        value={family}
                        onChange={handleFamilyChange}
                        autoComplete="off"
                    />
                </FormControl>
                
                <FormControl>
                    <FormLabel as="legend">Type</FormLabel>
                    <RadioGroup
                        defaultValue="bird"
                        onChange={(value) => handleTypeChange(value)}
                    >
                        <HStack spacing="24px">
                            <Radio value="bird">Bird</Radio>
                            <Radio value="reptile">Reptile</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel as="legend">Nativity</FormLabel>
                    <RadioGroup
                        defaultValue="native"
                        onChange={(value) => handleNativityChange(value)}
                    >
                        <HStack spacing="24px">
                            <Radio value="native">Native</Radio>
                            <Radio value="visitor">Visitor</Radio>
                            <Radio value="non-native">Non-Native</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>

                <Box
                    border="2px dashed gray"
                    padding="4"
                    rounded="md"
                    width="full"
                    textAlign="center"
                    marginTop="20px"
                >
                    <input
                        type="file"
                        id="file-upload"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload">
                        <Button as="span" colorScheme="teal">
                            Upload File
                        </Button>
                    </label>
                    {selectedFile && (
                        <>
                            <Text mt={2} fontSize="sm">
                                Selected file: {selectedFile.name}
                            </Text>
                        </>
                    )}
                </Box>

                <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                    Add
                </Button>
            </Container>
        </Layout>
    );
};

export default Add;
export { getServerSideProps } from "../components/chakra";
