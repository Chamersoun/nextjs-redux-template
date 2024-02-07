"use client";

import clsx from "clsx";

import React from "react";
import { Controller } from "react-hook-form";

import CheckboxIcon from "@/assets/icons/CheckedIcon";
import { CheckboxPropsType } from "@/components/checkbox/types";

import "./styles.scss";

const Checkbox = (props: CheckboxPropsType) => {
  const {
    label,
    value = false,
    onChange,
    disabled = false,
    error,
    containerStyle,
    ...rest
  } = props;

  return (
    <div className={clsx(["checkbox-field", containerStyle])}>
      <div
        className={clsx([
          "checkbox-field__wrapper with-opacity-hover",
          disabled && "is-disabled",
        ])}
        onClick={() => !disabled && !!onChange && onChange(!value)}
        {...rest}
      >
        <CheckboxIcon
          checked={value}
          stroke={error ? "red" : undefined}
          {...props}
        />
        {label}
      </div>

      {error && <div className="checkbox-field__error">{error}</div>}
    </div>
  );
};

const ControlledCheckbox = ({
  control,
  errors,
  name,
  ...props
}: CheckboxPropsType & {
  control: any;
  errors: any;
  name: string;
}) => (
  <Controller
    name={name}
    control={control}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render={({ field: { ref, ...rest } }) => (
      <Checkbox error={errors[name]?.message} {...props} {...rest} />
    )}
  />
);

export default Checkbox;
export { ControlledCheckbox };
