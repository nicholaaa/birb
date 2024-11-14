import { useState } from "react";
import Image from "next/image";
import {
    Box,
    Text,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import blankThumbnail from "../public/images/blank-thumbnail.jpg";

export const GridItem = ({
    name,
    species,
    family,
    nativity,
    type,
    thumbnail,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return (
        <>
            <Box w="100%" textAlign="center">
                <Box cursor="pointer" onClick={handleOpen}>
                    <Image
                        loader={({ src }) => (src ? src : blankThumbnail)}
                        src={thumbnail}
                        alt={name}
                        width="400"
                        height="225"
                        className="grid-item-thumbnail"
                        loading="lazy"
                        style={{ objectFit: 'cover' }}
                    />
                </Box>
                <Text mt={2} fontWeight="bold">
                    {name}
                </Text>
                <Text fontSize={14}>
                    {family} | {species}
                </Text>
                <Badge
                    colorScheme={
                        nativity === "native"
                            ? "green"
                            : nativity === "non-native"
                            ? "red"
                            : "purple"
                    }
                    mr={2}
                >
                    {nativity}
                </Badge>
                <Badge colorScheme={type === "bird" ? "blue" : "pink"}>
                    {type}
                </Badge>
            </Box>

            <Modal isOpen={isOpen} onClose={handleClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text mt={2} fontWeight="bold">
                            {name}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            loader={({ src }) => (src ? src : blankThumbnail)}
                            src={thumbnail}
                            alt={name}
                            width="800"
                            height="450"
                            loading="lazy"
                            style={{ objectFit: 'cover' }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    `}
    />
);
