import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" position="fixed" bottom={0} left={50} right={50}>
      &copy; {new Date().getFullYear()} Wayne Quah. All Rights Reserved.
    </Box>
  )
}

export default Footer
