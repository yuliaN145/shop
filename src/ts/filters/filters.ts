import { slider } from "../slider/slider";
import { catalog } from "../createPage/createPage";
import { data } from "../data/data";

export function filters() {
  const filters: any = document.querySelector(".filter-color__list");
  filters.addEventListener("click", filterGoods);

  const quantity: any = document.querySelector(".filter-quantity");
  quantity.addEventListener("click", filterGoods);

  const brand: any = document.querySelector(".filter-brand");
  brand.addEventListener("click", filterGoods);

  const favorite: any = document.querySelector(".filter-favorite");
  favorite.addEventListener("click", filterGoods);

  const price: any = document.querySelector("#price");
  price.addEventListener("input", filterGoods);

  const search: any = document.querySelector(".search");
  search.addEventListener("input", filterGoods);

  function filterGoods(event: any) {
    const point = event.target;
    point.classList.toggle("active");
    const sizes = [...document.querySelectorAll("#color.active")].map(
      (element: any) => element.value
    );
    const numbers = [...document.querySelectorAll("#quantity.active")].map(
      (element: any) => element.value
    );
    const brandAll = [...document.querySelectorAll("#brand.active")].map(
      (element: any) => element.value
    );
    const favoriteAll = [...document.querySelectorAll("#favorite.active")].map(
      (element: any) => element.value
    );
    const searchValue = search?.value;
    console.log(searchValue);

    const resSlider = slider();
    const minNum = resSlider[0];
    const maxNum = resSlider[1];
    const minYear = resSlider[2];
    const maxYear = resSlider[3];
    catalog(
      data.filter(
        ({ color, size, shape, favorite, num, year, name }) =>
          (!sizes.length || sizes.includes(color)) &&
          (!numbers.length || numbers.includes(size)) &&
          (!brandAll.length || brandAll.includes(shape)) &&
          (!favoriteAll.length || favoriteAll.includes(favorite)) &&
          (!minNum || minNum <= num) &&
          (!maxNum || maxNum >= num) &&
          (!minYear || minYear <= year) &&
          (!maxYear || maxYear >= year) &&
          (!searchValue || name.includes(searchValue))
      )
    );
  }
}
