import {
    Container,
    Heading,
    SimpleGrid,
    Button,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    useToast,
    HStack,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import thumbnail from "../public/images/blank-thumbnail.jpg";
import { Search2Icon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { GridItem } from "../components/grid-item";
import { supabase } from "../supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";

const Browse = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedAnimalId, setSelectedAnimalId] = useState(null);
    const cancelRef = useRef();

    const router = useRouter();
    const toast = useToast();
    const [animals, setAnimals] = useState([]);
    const [search, setSearch] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            setUser(session?.user || null);
        };
        getSession();
    }, []);

    useEffect(() => {
        fetchAnimals();
    }, []);

    const onSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        searchAnimals(value);
    };
    const searchAnimals = async (searchValue) => {
        const { data, error } = await supabase
            .from("animals")
            .select()
            .like("name", `%${searchValue}%`);
        if (error) {
            toast({
                title: "Error fetching data",
                description: error,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else if (search == "") {
            fetchAnimals();
        } else {
            setAnimals(data);
        }
    };
    const onSearchKeyDown = (e) => {
        if (e.key === "Enter") {
            searchAnimals(search);
        }
    };
    const onClickSearch = () => {
        searchAnimals(search);
    };

    const fetchAnimals = async () => {
        const { data, error } = await supabase.from("animals").select("*");

        if (error) {
            toast({
                title: "Error fetching data",
                description: error,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            setAnimals(data);
        }
    };

    const onEdit = (animalId) => {
        router.push(`/edit/${animalId}`);
    };

    const openDeleteDialog = (animalId) => {
        setSelectedAnimalId(animalId);
        setIsDialogOpen(true);
    };

    const confirmDelete = async () => {
        if (!selectedAnimalId) return;

        const { error } = await supabase
            .from("animals")
            .delete()
            .eq("id", selectedAnimalId);
        if (error) {
            toast({
                title: "Delete Failed",
                description: error.message,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Deleted",
                status: "success",
                duration: 1000,
                isClosable: true,
            });
            fetchAnimals(); // Refresh
        }
        setIsDialogOpen(false);
    };

    return (
        <Layout title="Browse">
            <Container maxW="full">
                <Heading as="h2" fontSize={24} mb={4}>
                    Browse all Discoveries
                </Heading>

                <InputGroup borderRadius={5} size="sm" maxW={500} mb={8}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Search2Icon color="gray.600" />}
                    />
                    <Input
                        type="text"
                        placeholder="Search..."
                        border="1px solid #949494"
                        onChange={onSearchChange}
                        onKeyDown={onSearchKeyDown}
                    />
                    <InputRightAddon p={0} border="none">
                        <Button
                            size="sm"
                            borderLeftRadius={0}
                            borderRightRadius={3.3}
                            border="1px solid #949494"
                            onClick={onClickSearch}
                        >
                            Search
                        </Button>
                    </InputRightAddon>
                </InputGroup>

                <SimpleGrid columns={6} gap={6}>
                    {animals.map((animal) => (
                        <Section>
                            <GridItem
                                key={animal.name}
                                thumbnail={
                                    animal.image_url
                                        ? animal.image_url
                                        : thumbnail
                                }
                                name={animal.name}
                                species={animal.species}
                                family={animal.family}
                                nativity={animal.nativity}
                                type={animal.type}
                            />
                            {user && (
                                <HStack mt={2} justify="center">
                                    <IconButton
                                        icon={<EditIcon />}
                                        size="sm"
                                        colorScheme="blue"
                                        aria-label="Edit"
                                        onClick={() => onEdit(animal.id)}
                                    />
                                    <IconButton
                                        icon={<DeleteIcon />}
                                        size="sm"
                                        colorScheme="red"
                                        aria-label="Delete"
                                        onClick={() =>
                                            openDeleteDialog(animal.id)
                                        }
                                    />
                                </HStack>
                            )}
                        </Section>
                    ))}
                </SimpleGrid>
                <AlertDialog
                    isOpen={isDialogOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={() => setIsDialogOpen(false)}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Confirm Delete
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                Are you sure you want to delete this discovery?
                                This action cannot be undone.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button
                                    ref={cancelRef}
                                    onClick={() => setIsDialogOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    colorScheme="red"
                                    onClick={confirmDelete}
                                    ml={3}
                                >
                                    Delete
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </Container>
        </Layout>
    );
};

export default Browse;
export { getServerSideProps } from "../components/chakra";
