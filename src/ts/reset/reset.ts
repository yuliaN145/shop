import { catalog } from "../createPage/createPage";
import { data } from "../data/data";

export function reset() {
  const filtersWhite: any = document.querySelector(
    ".filter-color__button.type-white.active"
  );
  const filtersYellow: any = document.querySelector(
    ".filter-color__button.type-yellow.active"
  );
  /*const filtersRed: any = document.querySelector(
    ".filter-color__button.type-red.active"
  );*/
  filtersWhite.classList.remove("active");
  filtersYellow.classList.remove("active");
  //filtersRed.classList.remove("active");
  catalog(data);
}
