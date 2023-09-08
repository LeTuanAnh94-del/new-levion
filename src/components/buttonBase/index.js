const SIZE_BUTTON = {
  small: "px-6 py-2",
};

const COLOR_BUTTON = {
  outline: {
    normal: "rounded border border-solid border-primary",
  },
  filled: {
    normal: "rounded bg-primary",
  },
};

export default function ButtonBase({
  title,
  sizeButton = "small",
  variant = "filled",
  className,
}) {
  const classButtonByStatus = buildStyleButton({
    sizeButton,
    variant,
  });

  return (
    <button className={`${classButtonByStatus} ${className}`}>{title}</button>
  );
}

const buildStyleButton = ({ variant, sizeButton }) => {
  return `${SIZE_BUTTON[sizeButton]} ${COLOR_BUTTON[variant].normal}`;
};
