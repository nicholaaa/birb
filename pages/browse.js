import {
    Container,
    Heading,
    SimpleGrid,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import thumbnail from "../public/images/blank-thumbnail.jpg";
import { Search2Icon } from "@chakra-ui/icons";
import { GridItem } from "../components/grid-item";
import { supabase } from "../supabaseClient";
import React, { useEffect, useState } from "react";

const Browse = () => {
    const [animals, setAnimals] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchAnimals();
    }, []);

    const onSearchChange = (e) => {
        const value = e.target.value
        setSearch(value);
        searchAnimals(value);
    };
    const searchAnimals = async (searchValue) => {
        const { data, error } = await supabase.from("animals").select().like("name", `%${searchValue}%`);
        if (error) {
            console.error("Error fetching data:", error);
        } else if (search == "") {
            fetchAnimals()
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
            console.error("Error fetching data:", error);
        } else {
            setAnimals(data);
        }
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
                                thumbnail={animal.image_url ? animal.image_url : thumbnail}
                                name={animal.name}
                                species={animal.species}
                                family={animal.family}
                                nativity={animal.nativity}
                                type={animal.type}
                            />
                        </Section>
                    ))}
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Browse;
export { getServerSideProps } from "../components/chakra";
