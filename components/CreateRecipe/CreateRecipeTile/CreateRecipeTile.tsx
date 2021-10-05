import React from "react";
import styles from "./CreateRecipeTile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPencilAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
export type CreateRecipeTileProps = {
  type: "step" | "ingredient";
  index: number;
  content: string;
  amount?: string;
  editItem: (...params: any) => void;
};
export const CreateRecipeTile: React.FC<CreateRecipeTileProps> = ({
  type,
  index,
  content,
  amount,
  editItem,
}) => {
  switch (type) {
    case "ingredient":
      return (
        <div className={styles.tile}>
          <div className={styles.tile__actions}>
            <button
              className={styles.tile__actions__edit}
              onClick={(e) => {
                e.preventDefault();
                editItem("ingredient", "edit", content, index);
              }}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
            <button
              className={styles.tile__actions__delete}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                editItem("ingredient", "remove", content, index);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.tile__content}>
            {amount} {content}
          </div>
          <div className={styles.tile__arrows}>
            <button
              onClick={(e) => {
                e.preventDefault();
                editItem("ingredient", "moveUp", content, index);
              }}
            >
              <FontAwesomeIcon icon={faCaretUp} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editItem("ingredient", "moveDown", content, index);
              }}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
        </div>
      );
    default:
      return (
        <div className={styles.tile}>
          <div className={styles.tile__actions}>
            <button
              className={styles.tile__actions__edit}
              onClick={(e) => {
                e.preventDefault();
                editItem("step", "edit", content, index);
              }}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
            <button
              className={styles.tile__actions__delete}
              onClick={(e) => {
                e.preventDefault();
                editItem("step", "remove", content, index);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.tile__title}>Step {index + 1}</div>
          <div className={styles.tile__content}>{content}</div>
          <div className={styles.tile__arrows}>
            <button
              onClick={(e) => {
                e.preventDefault();
                editItem("step", "moveUp", content, index);
              }}
            >
              <FontAwesomeIcon icon={faCaretUp} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editItem("step", "moveDown", content, index);
              }}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
        </div>
      );
  }
};
