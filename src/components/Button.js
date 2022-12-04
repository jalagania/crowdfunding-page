function Button(props) {
  return (
    <button
      className={`rounded-full ${
        props.name === "Out of Stock"
          ? "cursor-not-allowed bg-grayDark"
          : "bg-cyanLight hover:bg-cyanDark"
      } px-12 py-5 ${props.fontSize} font-bold text-white `}
      onClick={props.handleButton}
    >
      {props.name}
    </button>
  );
}

export default Button;
