const Button = ({ children, onClick, className, id, disabled, type }) => {
    return (
      <button
        onClick={onClick}
        className={className}
        id={id}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    );
  };
  
  export default Button;