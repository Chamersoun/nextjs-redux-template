"use client";

import Link from "next/link";

import clsx from "clsx";

import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

import { titleFont } from "@/assets/fonts";
import { ButtonPropsType } from "@/components/button/types";

import "./styles.scss";

const Button = (props: ButtonPropsType) => {
  const {
    onClick = () => "",
    to = "/",
    type = "button",
    loading = false,
    loaderSize = 12,
    loaderColor = "#FFFFFF",
    disabled = false,
    buttonText,
    containerStyle,
    tabIndex,
    id,
  } = props;

  if (type === "link") {
    return (
      <Link
        href={to || ""}
        className={clsx(["custom-btn", titleFont.className, containerStyle])}
        tabIndex={tabIndex}
        id={id}
      >
        {buttonText}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(["custom-btn", titleFont.className, containerStyle])}
      disabled={disabled}
      tabIndex={tabIndex}
      id={id}
    >
      {loading ? (
        <PulseLoader
          size={loaderSize}
          color={loaderColor}
          aria-label="Loading Spinner"
        />
      ) : (
        buttonText
      )}
    </button>
  );
};

export default Button;
