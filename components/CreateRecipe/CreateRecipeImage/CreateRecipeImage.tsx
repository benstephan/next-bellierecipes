import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
export type CreateRecipeImageProps = {
  change: (...params: any) => void;
  fieldClass: string;
  borderClass: string;
};
export const CreateRecipeImage: React.FC<CreateRecipeImageProps> = ({
  change,
  fieldClass,
  borderClass,
}) => {
  return (
    <fieldset className={fieldClass}>
      <div className={borderClass}>
        <input
          type="file"
          id="recipeImage"
          name="filename"
          hidden
          onChange={(e) => change({ type: "IMAGE", payload: e.target.value })}
        />

        <label htmlFor="recipeImage">
          <FontAwesomeIcon icon={faArrowCircleUp} /> Click to upload your photo.
        </label>
      </div>
    </fieldset>
  );
};
