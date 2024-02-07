"use client";

import clsx from "clsx";

import React from "react";
import { Controller } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

import { textFont } from "@/assets/fonts";
import { TextareaPropsType } from "@/components/textarea/types";

import "./styles.scss";

const Textarea = (props: TextareaPropsType) => {
  const {
    label,
    placeholder = "",
    autoFocus = false,
    disabled = false,
    error,
    autoComplete = "on",
    minRows = 2,
    maxRows = 10,
    containerStyle,
    ...rest
  } = props;

  return (
    <div className={clsx(["textarea-field", containerStyle])}>
      {label && (
        <label
          htmlFor={`${label?.toLowerCase()}-input`}
          className="textarea-field__label"
        >
          {label}
        </label>
      )}

      <TextareaAutosize
        {...rest}
        id={`${label?.toLowerCase() || "unregistered"}-input`}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={clsx(["textarea-field__textarea", textFont.className])}
        minRows={minRows}
        maxRows={maxRows}
      />

      {error && <div className="textarea-field__error">{error}</div>}
    </div>
  );
};

const ControlledTextarea = ({
  control,
  errors,
  name,
  ...props
}: TextareaPropsType & {
  control: any;
  errors: any;
  name: string;
}) => (
  <Controller
    name={name}
    control={control}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render={({ field: { ref, ...rest } }) => (
      <Textarea error={errors[name]?.message} {...props} {...rest} />
    )}
  />
);

export default Textarea;
export { ControlledTextarea };
