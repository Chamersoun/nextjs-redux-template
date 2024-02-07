"use client";

import clsx from "clsx";

import React, { useState } from "react";
import { Controller } from "react-hook-form";

import { textFont } from "@/assets/fonts";
import EyeIcon from "@/assets/icons/EyeIcon";
import { InputPropsType } from "@/components/input/types";

import "./styles.scss";

const Input = (props: InputPropsType) => {
  const {
    label,
    type = "text",
    placeholder = "",
    autoFocus = false,
    disabled = false,
    error,
    autoComplete = "on",
    containerStyle,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((val) => !val);

  const handleMouseDownPassword = (e: any) => e.preventDefault();

  return (
    <div className={clsx(["input-field", containerStyle])}>
      {label && (
        <label
          htmlFor={`${label?.toLowerCase()}-input`}
          className="input-field__label"
        >
          {label}
        </label>
      )}

      <div className="input-field__wrapper">
        <input
          {...rest}
          id={`${label?.toLowerCase() || "unregistered"}-input`}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={clsx(["input-field__input", textFont.className])}
        />

        {type === "password" && (
          <div
            className={clsx([
              "input-field__end-adornment",
              "with-opacity-hover",
            ])}
            role="button"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            <EyeIcon stroke={showPassword ? "#ffa100" : undefined} />
          </div>
        )}
      </div>

      {error && <div className="input-field__error">{error}</div>}
    </div>
  );
};

const ControlledInput = ({
  control,
  errors,
  name,
  ...props
}: InputPropsType & {
  control: any;
  errors: any;
  name: string;
}) => (
  <Controller
    name={name}
    control={control}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render={({ field: { ref, ...rest } }) => (
      <Input error={errors[name]?.message} {...props} {...rest} />
    )}
  />
);

export default Input;
export { ControlledInput };
