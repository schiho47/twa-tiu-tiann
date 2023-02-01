import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input as MuiInput,
} from "@mui/material";
import React from "react";

interface InputProps {
  title: string;
  id: string;
  error: boolean;
  style?: object;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  errorMsg?: string;
  icon?: React.ReactNode;
}
const Input: React.FC<InputProps> = ({
  title,
  id,
  error,
  style,
  value,
  onChange,
  name,
  type = "text",
  errorMsg = `請正確填寫${title}`,
  icon,
}) => {
  return (
    <FormControl style={style}>
      <InputLabel htmlFor={id} color="info">
        {title}
      </InputLabel>

      <MuiInput
        id={id}
        color="info"
        value={value}
        onChange={onChange}
        name={name}
        type={type}
      />
      {icon && icon}

      {error && (
        <FormHelperText
          id={`${id}-helper-text`}
          style={{ color: "#b00020", fontWeight: 500 }}
        >
          {errorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Input;
