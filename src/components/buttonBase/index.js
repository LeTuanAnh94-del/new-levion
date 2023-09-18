const SIZE_BUTTON = {
  sm: "px-6 py-2 ",
  small: "px-6 py-2 ",
};

const SIZE_RESPONSIVE = {
  none: "lg:px-6 lg:py-2",
  sm: "lg:px-6 lg:py-4",
  small: "lg:px-10 lg:py-4",
};

const COLOR_BUTTON = {
  outline: {
    normal: "rounded border border-solid border-primary lg:rounded-lg",
  },
  filled: {
    normal: "rounded bg-primary lg:rounded-lg",
  },
};

export default function ButtonBase({
  title,
  sizeButton = "small",
  variant = "filled",
  sizeResponsive = "small",
  className,
}) {
  const classButtonByStatus = buildStyleButton({
    sizeButton,
    variant,
    sizeResponsive,
  });

  return (
    <button className={`${classButtonByStatus} ${className}`}>{title}</button>
  );
}

const buildStyleButton = ({ variant, sizeButton, sizeResponsive }) => {
  return `${SIZE_BUTTON[sizeButton]} ${COLOR_BUTTON[variant].normal} ${SIZE_RESPONSIVE[sizeResponsive]}`;
};
