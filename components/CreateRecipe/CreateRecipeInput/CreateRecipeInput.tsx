import React from "react";
import styles from "./CreateRecipeInput.module.scss";
import { ErrorProps } from "../CreateRecipe";
export type CreateRecipeInputProps = {
  placeholder: string;
  change: (...params: any) => void;
  fieldName: string;
  value?: any;
  className?: string;
  validation?: ErrorProps;
};
export const CreateRecipeInput: React.FC<CreateRecipeInputProps> = ({
  placeholder,
  change,
  fieldName,
  value,
  className,
  validation,
}) => {
  return (
    <fieldset>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          change({
            type: "EDIT_INPUT",
            payload: {
              field: fieldName,
              value: e.target.value,
            },
          })
        }
      />
      {validation && !validation.status && <label>{validation.message}</label>}
    </fieldset>
  );
};
