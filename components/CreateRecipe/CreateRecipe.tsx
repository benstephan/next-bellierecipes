import React, { useReducer } from "react";
import styles from "./CreateRecipe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { CreateRecipeTile } from "./CreateRecipeTile/CreateRecipeTile";
import { CreateRecipeInput } from "./CreateRecipeInput/CreateRecipeInput";
import { CreateRecipeSelect } from "./CreateRecipeSelect/CreateRecipeSelect";
import { CreateRecipeImage } from "./CreateRecipeImage/CreateRecipeImage";

export type Ingredient = {
  amount: string;
  description: string;
};

export type Step = {
  description: string;
};
export type ErrorProps = {
  status: boolean;
  message: string;
};
export type Errors = {
  image: ErrorProps;
  title: ErrorProps;
  category: ErrorProps;
  servingSize: ErrorProps;
  cookTime: ErrorProps;
  ingredients: ErrorProps;
  steps: ErrorProps;
};

export type Recipe = {
  image: string | null;
  title: string | null;
  category: string | null;
  servingSize: number | null;
  cookTime: number | null;
  currentIngredient: string | null;
  currentAmount: string | null;
  ingredients: Ingredient[];
  currentStep: string | null;
  steps: Step[];
  errors: Errors;
};

const initialRecipe: Recipe = {
  image: null,
  title: null,
  category: null,
  servingSize: null,
  cookTime: null,
  currentIngredient: null,
  currentAmount: null,
  ingredients: [],
  currentStep: null,
  steps: [],
  errors: {
    image: {
      status: true,
      message:
        "Your recipe needs an image in png, jpg, or gif format. It must be 999x999 and under 999mb in size.",
    },
    title: {
      status: true,
      message:
        "Your recipe needs a title and must only contain hyphens, spaces, letters, and numbers.",
    },
    category: {
      status: true,
      message: "You must select a category for your recipe.",
    },
    servingSize: {
      status: true,
      message:
        "Your recipe must have a serving size and be a number. i.e. 4 for four people",
    },
    cookTime: {
      status: true,
      message:
        "Your recipe must have a time to cook in hours:minutes format. i.e. 1:00.",
    },
    ingredients: {
      status: true,
      message: "Your recipe must have at least one ingredient.",
    },
    steps: {
      status: true,
      message: "Your recipe must have at least one step.",
    },
  },
};

const reducer = (state: Recipe, action: any) => {
  switch (action.type) {
    case "EDIT_INPUT":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "IMAGE":
      return {
        ...state,
        image: action.payload,
      };

    case "ADD_STEP":
      return {
        ...state,
        currentStep: null,
        steps: [...state.steps, { description: action.payload }],
      };
    case "ADD_INGREDIENT":
      return {
        ...state,
        currentAmount: null,
        currentIngredient: null,
        ingredients: [
          ...state.ingredients,
          { amount: action.payload.amount, description: action.payload.desc },
        ],
      };
    case "CHANGE_ITEM":
      return {
        ...state,
        [action.payload.type]: action.payload.items,
      };
    case "EDIT_ITEM":
      return {
        ...state,
        currentIngredient: action.payload.currentIngredient,
        currentAmount: action.payload.currentAmount,
        currentStep: action.payload.currentStep,
      };
    case "VALIDATION":
      return {
        ...state,
        errors: { ...action.payload },
      };
    default:
      throw new Error();
  }
};

export const CreateRecipe = () => {
  const [state, dispatch]: any = useReducer(reducer, initialRecipe);
  const addStep = (stepDesc: string, e: any) => {
    e.preventDefault();
    dispatch({ type: "ADD_STEP", payload: stepDesc });
  };
  const addIngredient = (
    ingredientAmount: string,
    ingredientDesc: string,
    e: any
  ) => {
    e.preventDefault();
    dispatch({
      type: "ADD_INGREDIENT",
      payload: { amount: ingredientAmount, desc: ingredientDesc },
    });
  };

  const removeItem = (index: number, items: any) => {
    return items.length > 1
      ? items.filter((ing: any, i: number) => i !== index)
      : [];
  };

  const moveItem = (items: any, direction: string, itemIdentity: string) => {
    const currentSpot = items.findIndex(
      (value: any) => value.description === itemIdentity
    );
    const currentItem = items.find((obj: any) => {
      return obj.description === itemIdentity;
    });

    const moveUp = direction === "moveUp" && currentSpot !== 0;
    const moveDown =
      direction === "moveDown" && currentSpot !== items.length - 1;
    const newSpot =
      !moveUp && !moveDown
        ? currentSpot
        : moveUp
        ? currentSpot - 1
        : currentSpot + 1;

    let newItems;

    if (moveUp) {
      newItems = [
        ...items.slice(0, newSpot),
        currentItem,
        items[newSpot],
        ...items.slice(currentSpot + 1),
      ];
    } else if (moveDown) {
      newItems = [
        ...items.slice(0, currentSpot),
        items[newSpot],
        currentItem,
        ...items.slice(newSpot + 1),
      ];
    } else {
      newItems = items;
    }
    return newItems;
  };
  const editItem = (items: any, index: any) => {
    const setCurrentItem = items.filter((ing: any, i: number) => i === index);
    const { amount, description } = setCurrentItem[0];
    dispatch({
      type: "EDIT_ITEM",
      payload: {
        currentAmount: amount ? amount : state.currentAmount,
        currentIngredient: amount ? description : state.currentIngredient,
        currentStep: !amount ? description : state.currentStep,
      },
    });
  };
  const controlItemEdit = (
    type: "ingredient" | "step",
    action: string,
    identity: any,
    index: any
  ) => {
    const dispatchType = `${type}s`;
    const items = type === "ingredient" ? state.ingredients : state.steps;
    let newItems;
    if (action === "moveUp" || "moveDown") {
      newItems = moveItem(items, action, identity);
    }
    if (action === "remove") {
      newItems = removeItem(index, items);
    }
    if (action === "edit") {
      newItems = removeItem(index, items);
      editItem(items, index);
    }
    dispatch({
      type: "CHANGE_ITEM",
      payload: { type: dispatchType, items: newItems },
    });
  };
  const handleValidation = () => {
    let validationErrors: Errors = state.errors;
    if (!state.title || state.title.match("^[a-zA-Z -]*$") === null) {
      validationErrors = {
        ...validationErrors,
        title: { ...validationErrors.title, status: false },
      };
    } else {
      validationErrors = {
        ...validationErrors,
        title: { ...validationErrors.title, status: true },
      };
    }
    if (!state.category) {
      validationErrors = {
        ...validationErrors,
        category: { ...validationErrors.category, status: false },
      };
    } else {
      validationErrors = {
        ...validationErrors,
        category: { ...validationErrors.category, status: true },
      };
    }
    if (!state.servingSize || state.servingSize.match("^[0-9]*$") === null) {
      validationErrors = {
        ...validationErrors,
        servingSize: { ...validationErrors.servingSize, status: false },
      };
    } else {
      validationErrors = {
        ...validationErrors,
        servingSize: { ...validationErrors.servingSize, status: true },
      };
    }
    if (!state.cookTime || state.cookTime.match("^[0-9:]*$") === null) {
      validationErrors = {
        ...validationErrors,
        cookTime: { ...validationErrors.cookTime, status: false },
      };
    } else {
      validationErrors = {
        ...validationErrors,
        cookTime: { ...validationErrors.cookTime, status: true },
      };
    }
    if (!state.ingredients || state.ingredients.length <= 0) {
      validationErrors = {
        ...validationErrors,
        ingredients: { ...validationErrors.ingredients, status: false },
      };
    } else {
      validationErrors = {
        ...validationErrors,
        ingredients: { ...validationErrors.ingredients, status: true },
      };
    }
    if (!state.steps || state.steps.length <= 0) {
      validationErrors = {
        ...validationErrors,
        steps: { ...validationErrors.steps, status: false },
      };
    } else {
      validationErrors = {
        ...validationErrors,
        steps: { ...validationErrors.steps, status: true },
      };
    }
    const statusCheck = Object.values(validationErrors).map(
      (val: ErrorProps) => val.status
    );
    dispatch({
      type: "VALIDATION",
      payload: validationErrors,
    });
    return statusCheck.includes(false) ? false : true;
  };

  return (
    <div className={`${styles.createRecipe} container`}>
      <div className="row">
        <div className={`${styles.createRecipe__content} col-10 offset-1`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleValidation();
            }}
          >
            <CreateRecipeImage
              change={dispatch}
              fieldClass={styles.createRecipe__content__imageUpload}
              borderClass={styles.createRecipe__content__imageUpload__border}
            />
            <div className={styles.createRecipe__content__fields}>
              <CreateRecipeInput
                placeholder="Your recipe's title"
                change={dispatch}
                fieldName={"title"}
                className={styles.createRecipe__content__fields__title}
                validation={state.errors.title}
              />
              <div className="row">
                <div className="col-6">
                  <CreateRecipeSelect
                    change={dispatch}
                    selectedState={state.category ? state.category : "default"}
                    validation={state.errors.category}
                  />
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6">
                      <CreateRecipeInput
                        placeholder="Serving size"
                        change={dispatch}
                        fieldName={"servingSize"}
                        validation={state.errors.servingSize}
                      />
                    </div>
                    <div className="col-6">
                      <CreateRecipeInput
                        placeholder="Cook time"
                        change={dispatch}
                        fieldName={"cookTime"}
                        validation={state.errors.cookTime}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span>Ingredients</span>

                  <div
                    className={`${styles.createRecipe__content__fields__ingredients} row`}
                  >
                    <div className="col-5">
                      <CreateRecipeInput
                        placeholder="Amount"
                        change={dispatch}
                        fieldName={"currentAmount"}
                        value={state.currentAmount ? state.currentAmount : ""}
                      />
                    </div>
                    <div className="col-7">
                      <CreateRecipeInput
                        placeholder="Ingredient"
                        change={dispatch}
                        fieldName={"currentIngredient"}
                        value={
                          state.currentIngredient ? state.currentIngredient : ""
                        }
                      />
                    </div>
                    <button
                      onClick={(e) =>
                        addIngredient(
                          state.currentAmount,
                          state.currentIngredient,
                          e
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                  </div>
                  <div className={styles.createRecipe__content__fields__tiles}>
                    {!state.errors.ingredients.status && (
                      <label>{state.errors.ingredients.message}</label>
                    )}
                    {state.ingredients.map(
                      (ingredient: Ingredient, i: number) => (
                        <CreateRecipeTile
                          key={i}
                          index={i}
                          amount={ingredient.amount}
                          content={ingredient.description}
                          type={"ingredient"}
                          editItem={controlItemEdit}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="col-7">
                  <div className={styles.createRecipe__content__fields__steps}>
                    <span>Steps</span>
                    <CreateRecipeInput
                      placeholder="Step description"
                      change={dispatch}
                      fieldName={"currentStep"}
                      value={state.currentStep ? state.currentStep : ""}
                      validation={state.errors.steps}
                    />
                    <button onClick={(e) => addStep(state.currentStep, e)}>
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                  </div>
                  <div className={styles.createRecipe__content__fields__tiles}>
                    {state.steps.map((step: Step, i: number) => (
                      <CreateRecipeTile
                        key={i}
                        index={i}
                        content={step.description}
                        type={"step"}
                        editItem={controlItemEdit}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.createRecipe__content__footer}>
              <div className={styles.createRecipe__content__footer__left}>
                <button
                  type="submit"
                  className={styles.createRecipe__content__footer__danger}
                >
                  Discard
                </button>
              </div>
              <div className={styles.createRecipe__content__footer__right}>
                <button
                  type="submit"
                  className={styles.createRecipe__content__footer__default}
                >
                  Save
                </button>
                <button
                  type="submit"
                  className={styles.createRecipe__content__footer__success}
                >
                  Publish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
