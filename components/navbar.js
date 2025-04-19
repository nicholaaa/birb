import { forwardRef, useEffect, useState } from "react";
import BirdLogo from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Button,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { supabase } from "../supabaseClient";

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? "#88ccca" : undefined}
            color={active ? "#202023" : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    );
};

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
    const { path } = props;
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            setAuth(!!session?.user);
        };

        getSession();

        // Listen to login/logout events too
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setAuth(!!session?.user);
            }
        );

        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <BirdLogo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/browse" path={path}>
                        Browse
                    </LinkItem>
                    <LinkItem href={auth ? "/add" : "/login"} path={path}>
                        Add Discovery
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    {auth && (
                        <Button
                            size="sm"
                            ml={4}
                            onClick={() => supabase.auth.signOut()}
                        >
                            Log out
                        </Button>
                    )}
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/browse">
                                    Browse
                                </MenuItem>
                                <MenuItem
                                    as={MenuLink}
                                    href={auth ? "/add" : "/password"}
                                >
                                    Add Discovery
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
