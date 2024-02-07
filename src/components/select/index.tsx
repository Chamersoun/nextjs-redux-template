"use client";

import selectStyles from "./selectStyles";
import clsx from "clsx";

import React, { useEffect, useMemo, useRef } from "react";
import { Controller } from "react-hook-form";
import ReactSelect, { components } from "react-select";

import { SelectOptionType, SelectPropsType } from "@/components/select/types";

import "./styles.scss";

const customComponents = {
  MultiValue: ({ selectProps, data }: any) => {
    const values = selectProps.value;
    if (values) {
      return values[values.length - 1].label === data.label
        ? data.label
        : data.label + ", ";
    } else return "";
  },
  DropdownIndicator: (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: props.selectProps.menuIsOpen
              ? "rotate(180deg)"
              : "rotate(0deg)",
          }}
        >
          <path
            d="M11.3003 14.3L8.70026 11.7C8.38359 11.3833 8.31292 11.021 8.48826 10.613C8.66359 10.205 8.97592 10.0007 9.42526 10H14.5753C15.0253 10 15.3379 10.2043 15.5133 10.613C15.6886 11.0217 15.6176 11.384 15.3003 11.7L12.7003 14.3C12.6003 14.4 12.4919 14.475 12.3753 14.525C12.2586 14.575 12.1336 14.6 12.0003 14.6C11.8669 14.6 11.7419 14.575 11.6253 14.525C11.5086 14.475 11.4003 14.4 11.3003 14.3Z"
            fill="#6F7073"
          />
        </svg>
      </components.DropdownIndicator>
    );
  },
  Option: (props: any) => {
    const ref = useRef();

    useEffect(() => {
      // @ts-ignore
      props.isSelected && ref.current?.scrollIntoView();
    }, [props.isSelected]);

    return <components.Option {...props} innerRef={ref} />;
  },
};

const Select = (props: SelectPropsType) => {
  const {
    containerStyle,
    options,
    label,
    placeholder = "Select an option",
    multiple = false,
    value = undefined,
    searchable = false,
    clearable = false,
    customKey = "react-select",
    error = undefined,
    disabled = false,
    maxMenuHeight = undefined,
    ...rest
  } = props;

  const selected = useMemo(() => {
    if (!value) return undefined;
    if (typeof value === "object") {
      return value.map((v) => options.find((o) => o.value === v));
    }
    return options.find((o) => o.value === value);
  }, [value]);

  const onChange = (option: any) => {
    if (rest.onChange) {
      rest.onChange(
        multiple ? option.map((o: SelectOptionType) => o.value) : option.value
      );
    }
  };

  return (
    <div className={clsx(["select-field", containerStyle])}>
      {label && (
        <label
          htmlFor={`${label?.toLowerCase()}-input`}
          className="select-field__label"
        >
          {label}
        </label>
      )}

      <ReactSelect<SelectOptionType, typeof multiple>
        {...rest}
        key={customKey}
        id={`${label?.toLowerCase() || "unregistered"}-select`}
        instanceId={`${label?.toLowerCase() || "unregistered"}-select`}
        isMulti={multiple}
        options={options}
        onChange={onChange}
        noOptionsMessage={() => <>No options available</>}
        placeholder={placeholder}
        // @ts-ignore
        value={selected}
        styles={selectStyles()}
        isSearchable={searchable}
        isClearable={clearable}
        components={customComponents}
        hideSelectedOptions={false}
        closeMenuOnSelect={!multiple}
        blurInputOnSelect={!multiple}
        isDisabled={disabled}
        maxMenuHeight={maxMenuHeight}
      />

      {error && <div className="select-field__error">{error}</div>}
    </div>
  );
};

const ControlledSelect = ({
  control,
  errors,
  name,
  ...props
}: SelectPropsType & {
  control: any;
  errors: any;
  name: string;
}) => (
  <Controller
    name={name}
    control={control}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render={({ field: { ref, ...rest } }) => (
      <Select
        error={errors[name]?.message}
        {...props}
        customKey={rest.value ? `filled-${name}` : `empty-${name}`}
        {...rest}
      />
    )}
  />
);

export default Select;
export { ControlledSelect };
