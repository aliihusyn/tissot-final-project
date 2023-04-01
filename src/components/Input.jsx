const Input = ({ type, name, onChange, className, id, value, placeHolder }) => {
    return (
      <input
        type={type}
        name={name}
        onChange={onChange}
        className={className}
        value={value}
        id={id}
        placeHolder={placeHolder}
      />
    );
  };
  
  export default Input;