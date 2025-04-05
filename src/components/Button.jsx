const Button = ({
  variant = "default",
  size,
  className,
  children,
  ...props
}) => {
  let baseStyles = "px-2 py-1 rounded-md font-medium transition";
  let variantStyles = "";

  if (variant === "default") {
    variantStyles = "bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === "outline") {
    variantStyles = "border border-gray-400 text-gray-700 hover:bg-gray-200";
  } else if (variant === "ghost") {
    variantStyles = "text-gray-600 hover:bg-gray-100";
  }

  let sizeStyles = size === "icon" ? "p-2 rounded-full" : "";

  return (
    <button
      className={`${!className && baseStyles} ${
        variantStyles && !className && variantStyles
      } ${sizeStyles} ${className} cursor-pointer `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
