import { IDataItem } from "../data/data";

export function createPage(): void {
  const body: HTMLElement | null = document.querySelector("body");
  if (body) {
    body.innerHTML = `
        <header class="header">
          <div class="header__flex-container">
            <div class="header__flex-item__logo">
              <div class="item__logo-img"></div>
              <div class="item__logo-title"> 
                <h1>Online Shop</h1>
              </div>
            </div>
            <div class="header__basket">
              <img class="header__flex-item__basket" src="/src/img/basket.svg">
              <div class="basket-num">0</div>
            </div>
          </div>
        </header>
        <main>
          <section class="filters">
          <div class="filters__flex-container">
            <div class="filters__flex-item">
              <h3>Фильтры по значению</h3>
              <div>
                <div class="filter-brand">
                  <span> Производитель: </span>
                  <ul class="filter-brand__list">
                    <button class="button btn-brand" id="brand" value="Samsung">Samsung</button>
                    <button class="button btn-brand" id="brand" value="Apple">Apple</button>
                    <button class="button btn-brand" id="brand" value="Xiaomi">Xiaomi</button>
                  </ul>
                </div>
                <div class="filter-quantity">
                  <span> Количество камер: </span>
                  <ul class="filter-quantity__list">
                    <button class="button btn-quantity three" id="quantity" value="3">3</button>
                    <button class="button btn-quantity two" id="quantity" value="2">2</button>
                    <button class="button btn-quantity one" id="quantity" value="1">1</button>
                  </ul>
                </div>
                <div class="filter-color">
                  <span> Цвет: </span>
                  <ul class="filter-color__list">
                    <button class="filter-color__button type-white" id="color" value="белый"></button>
                    <button class="filter-color__button type-yellow" id="color" value="желтый"></button>
                    <button class="filter-color__button type-red" id="color" value="красный"></button>
                  </ul>
                </div>
                <div class="filter-favorite">
                  <span> Только популярные: </span>
                  <button class="filter-favorite__button" id="favorite" value="true"></button>
                </div>
              </div>
            </div>
            <div class="filters__flex-item" id="price">
              <div class="wrapper">
                <header>
                <h2>Количество на складе:</h2>
                </header>
                <div class="price-input">
                  <div class="field">
                    <span>Min</span>
                    <input type="number" class="input-min" value="0">
                  </div>
                  <div class="separator">-</div>
                  <div class="field">
                  <span>Max</span>
                  <input type="number" class="input-max" value="10">
                  </div>
                </div>
                <div class="slider">
                  <div class="progress"></div>
                </div>
                <div class="range-input">
                  <input type="range" class="range-min" min="0" max="10" value="0" step="1">
                  <input type="range" class="range-max" min="0" max="10" value="10" step="1">
                </div>
              </div>
              <div class="wrapper">
                <header>
                <h2>Год выхода на рынок:</h2>
                </header>
                <div class="price-input-num">
                  <div class="field">
                    <span>Min</span>
                    <input type="number" class="input-min" value="2000">
                  </div>
                  <div class="separator">-</div>
                  <div class="field">
                  <span>Max</span>
                  <input type="number" class="input-max" value="2022">
                  </div>
                </div>
                <div class="slider-num">
                  <div class="progress"></div>
                </div>
                <div class="range-input-num">
                  <input type="range" class="range-min" min="2000" max="2022" value="2000" step="1">
                  <input type="range" class="range-max" min="2000" max="2022" value="2022" step="1">
                </div>
              </div>
            </div>
            <div class="filters__flex-item">
              <h3>Поиск</h3>
              <input class="search" placeholder="Введите текст" type="text" value></input>
              <div class="reset">
                <button class="reset__filters">Сброс фильтров</button>
                <button class="reset__setting">Сброс настроек</button>
              </div>
            </div>
          </div>
          </section>
          <section class="catalog">
            <div class="catalog__flex-container"></div>
          </section>
        </main>
      `;
  }
}

export function catalog(data: IDataItem[]) {
  const catalogFlexContainer: HTMLElement | null = document.querySelector(
    ".catalog__flex-container"
  );
  if (catalogFlexContainer) {
    catalogFlexContainer.innerHTML = data
      .map(
        ({ color, name, shape, year, favorite, num, size }) => `
            <div class="catalog__flex-item">
            <h4>${name}</h4>
            <div class="flex-item__img-container">
              <img class="item__img">
            </div>
            <ul class="flex-item__list">
              <li> Количество: ${num} </li>
              <li> Год выхода: ${year}</li>
              <li> Производитель: ${shape}</li>
              <li> Цвет: ${color}</li>
              <li> Количество камер: ${size}</li>
              <li> Популярный: ${favorite === "false" ? "нет" : "да"}</li>
            </ul>
            </div>
            `
      )
      .join("");
  }
}
