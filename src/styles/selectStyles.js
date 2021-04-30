const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    color: "black",
    background: "var(--color-soft-blue) !important",
  }),

  option: (styles, props) => ({
    ...styles,
    backgroundColor: props.isDisabled
      ? null
      : props.isSelected
      ? "#4563d1"
      : props.isFocused
      ? "var(--color-hover-blue)"
      : "transparent",
  }),
  singleValue: (provided)=>({
    ...provided,
    color:"#fff",
  }),
  menuList:(base)=>({
    ...base,
    ".css-gg45go-NoOptionsMessage":{
        color:"#fff !important",
    }
  }),

  control: (base, props) => ({
    ...base,
    backgroundColor: "transparent !important",
    "> div > .css-b8ldur-Input > div > input": {
      border: "0 !important",
      "&:focus": {
        boxShadow: "none !important",
      },
    },

    "&:focus-within": {
      boxShadow: "0.2px 0.2px 2.5px var(--color-soft-blue) !important",
      border: "1px solid var(--color-soft-blue) !important",
    },
  }),
};
export { customStyles };
