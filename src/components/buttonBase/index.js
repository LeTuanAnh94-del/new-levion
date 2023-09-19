const SIZE_BUTTON = {
  small: "px-6 py-2 ",
  base: "px-6 py-4",
};

const SIZE_RESPONSIVE = {
  none: "lg:px-6 lg:py-2",
  sm: "lg:px-6 lg:py-4",
  small: "lg:px-10 lg:py-4 lg:rounded-lg",
};

const COLOR_BUTTON = {
  outline: {
    normal: "rounded border border-solid border-primary text-primary ",
    hover: "hover:bg-primary hover:text-white",
    disable:
      "rounded disabled:bg-neutral-grey-lighter disabled:text-neutral-grey-lightest",
  },
  filled: {
    normal: "rounded bg-primary ",
    hover: "hover:bg-neutral-dark-grey",
    disable:
      "rounded disabled:bg-neutral-grey-lightest disabled:border-neutral-grey-lighter disabled:border disabled:text-neutral-grey-lighter",
  },
};

export default function ButtonBase({
  title,
  sizeButton = "small",
  variant = "filled",
  sizeResponsive = "small",
  className,
  onClick,
  disable = false,
}) {
  const classButtonByStatus = buildStyleButton({
    sizeButton,
    variant,
    sizeResponsive,
    disable,
  });

  const handleClick = () => {
    if (disable) return;
    if (typeof onClick === "function") onClick();
  };

  return (
    <button
      className={`${classButtonByStatus} ${className} `}
      onClick={handleClick}
      disabled={disable}
    >
      {title}
    </button>
  );
}

const buildStyleButton = ({ variant, sizeButton, sizeResponsive, disable }) => {
  return `${SIZE_BUTTON[sizeButton]} ${SIZE_RESPONSIVE[sizeResponsive]} ${
    !disable ? COLOR_BUTTON[variant].normal : COLOR_BUTTON[variant].disable
  } ${!disable ? COLOR_BUTTON[variant].hover : COLOR_BUTTON[variant].disable}`;
};
