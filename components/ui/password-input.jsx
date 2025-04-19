import {
    Input,
    InputGroup,
    InputRightElement,
    Button,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  export const PasswordInput = ({ value, onChange, placeholder, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
    return (
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  };
  