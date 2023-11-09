import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface InputProps {
  icon: IconProp;
  className: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
}

const InputWithIcon: React.FC<InputProps> = ({
  icon,
  className,
  placeholder,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={`inputWithIcon ${className}`}>
      <FontAwesomeIcon icon={icon} className="icon" />

      <input
        className="input"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputWithIcon;
