import React from "react";
import styles from "./RecipeContent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const RecipeContent = () => {
  return (
    <div className={styles.recipeContent}>
      <div
        className={styles.recipeContent__image}
        style={{
          backgroundImage:
            "url('https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-bites-and-asparagus-recipe.jpg'",
        }}
      ></div>
      <div className={styles.recipeContent__main}>
        <div className={styles.recipeContent__main__header}>
          <div className={styles.recipeContent__main__header__title}>
            Crock Pot Roast
          </div>
          <div className={styles.recipeContent__main__header__details}>
            <div className={styles.recipeContent__main__header__details__info}>
              Serves 6
            </div>
            <div className={styles.recipeContent__main__header__details__info}>
              3 hours
            </div>
            <div className={styles.recipeContent__main__header__details__info}>
              <FontAwesomeIcon icon={faStar} /> 5 Stars
            </div>
          </div>
        </div>
        <div className={styles.recipeContent__main__content}>
          <div className="row">
            <div
              className={`col-3 ${styles.recipeContent__main__content__ingredients}`}
            >
              <span
                className={
                  styles.recipeContent__main__content__ingredients__title
                }
              >
                Ingredients
              </span>
              <ul>
                <li>1/2 Ingredient</li>
                <li>2 Cups Ins</li>
                <li>2 tbsp some</li>
                <li>22 This</li>
                <li>1/2 Something a little longer for test</li>
                <li>5 Chicken Breasts</li>
              </ul>
            </div>
            <div
              className={`col ${styles.recipeContent__main__content__steps}`}
            >
              <span
                className={styles.recipeContent__main__content__steps__title}
              >
                Instructions
              </span>
              <span
                className={styles.recipeContent__main__content__steps__step}
              >
                Step 1
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a tempus orci. Fusce ut sem sollicitudin, posuere nisl in,
                consequat metus. Ut erat nisi, interdum nec pellentesque vel,
                accumsan eu orci.{" "}
              </p>
              <span
                className={styles.recipeContent__main__content__steps__step}
              >
                Step 2
              </span>
              <p>
                Praesent et justo nec sem euismod convallis. Vestibulum et
                interdum nisl, nec facilisis magna. Sed tempor rutrum elit, non
                tincidunt quam imperdiet a. Nullam a mauris ex.
              </p>
              <span
                className={styles.recipeContent__main__content__steps__step}
              >
                Step 3
              </span>
              <p>
                Nullam convallis lacus a ex hendrerit ornare. Etiam accumsan
                turpis magna, et ultrices elit congue tempus.{" "}
              </p>
              <span
                className={styles.recipeContent__main__content__steps__step}
              >
                Step 4
              </span>
              <p>
                Duis dignissim gravida elit sed sagittis. Nullam scelerisque
                enim ac risus sodales ornare. Curabitur vel facilisis sapien,
                sed ullamcorper tellus. Morbi sem lorem, dictum at posuere non,
                dignissim nec massa.{" "}
              </p>
              <span
                className={styles.recipeContent__main__content__steps__step}
              >
                Step 5
              </span>
              <p>
                Vivamus lobortis metus eget ipsum bibendum blandit. In nec urna
                ut dui semper viverra quis molestie tortor.
              </p>
              <span
                className={styles.recipeContent__main__content__steps__step}
              >
                Step 6
              </span>
              <p>
                Aenean id augue interdum libero auctor elementum. In hac
                habitasse platea dictumst. Nulla et dictum ligula. Sed id
                aliquam elit, egestas finibus ante. Donec semper porttitor
                tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
