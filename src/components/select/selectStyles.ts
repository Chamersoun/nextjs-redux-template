import { StylesConfig } from "react-select";

import { SelectOptionType } from "@/components/select/types";

const selectStyles = (): StylesConfig<SelectOptionType> => ({
  placeholder: (styles) => ({
    ...styles,
    whiteSpace: "nowrap",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "normal",
  }),
  container: (styles) => ({
    ...styles,
    width: "100%",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: "1px solid #DADADF",
    borderRadius: 4,
    flex: 1,
    justifyContent: "space-around",
    boxShadow: "none",
    cursor: "pointer",
    ":hover": {
      border: "1px solid #DADADF",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "33px",
  }),
  dropdownIndicator: (style) => ({
    ...style,
    strokeWidth: 0,
    color: "#6f7073",
    ":hover": {},
  }),
  option: (style) => ({
    ...style,
    ":hover": {},
  }),
  valueContainer: (styles) => ({
    ...styles,
    fontSize: 16,
    flexWrap: "nowrap",
  }),
  menu: (style) => ({
    ...style,
    backgroundColor: "white",
    boxShadow: "0px 10px 10px 10px rgba(182, 182, 182, 0.25)",
    borderWidth: 1,
    borderColor: "#DADADF",
    borderStyle: "solid",
    borderRadius: 4,
    zIndex: 100,
    overflow: "hidden",
  }),
});

export default selectStyles;
