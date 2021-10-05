import React from "react";
import { ErrorProps } from "../CreateRecipe";
export type CreateRecipeSelectProps = {
  change: (...params: any) => void;
  validation: ErrorProps;
  selectedState: string;
};

export const CreateRecipeSelect: React.FC<CreateRecipeSelectProps> = ({
  change,
  validation,
  selectedState,
}) => {
  return (
    <fieldset>
      <select
        name="categories"
        id="categories"
        defaultValue={selectedState}
        onChange={(e) =>
          change({
            type: "EDIT_INPUT",
            payload: {
              field: "category",
              value: e.target.value,
            },
          })
        }
      >
        <option value="default" disabled>
          Choose your recipes category
        </option>
        <option value="mexican">Mexican</option>
        <option value="middle-eastern">Middle Eastern</option>
        <option value="eastern-european">Eastern European</option>
        <option value="japanese">Japanese</option>
        <option value="italian">Italian</option>
        <option value="american">American</option>
        <option value="thai">Thai</option>
        <option value="chinese">Chinese</option>
        <option value="french">French</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="greek">Greek</option>
        <option value="vegan">Vegan</option>
        <option value="chicken">Chicken</option>
        <option value="soup">Soup</option>
        <option value="caribbean">Caribbean</option>
        <option value="beverage">Beverage</option>
        <option value="soul">Soul Food</option>
        <option value="indian">Indian</option>
        <option value="seafood">Seafood</option>
        <option value="mediterranean">Mediterranean</option>
      </select>
      {!validation.status && <label>{validation.message}</label>}
    </fieldset>
  );
};
