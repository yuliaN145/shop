export function basketAdd() {
  const item = document.querySelectorAll(".catalog__flex-item");
  const counter: any = document.querySelector(".basket-num");
  item.forEach((element) =>
    element.addEventListener("click", function () {
      if (element.className === "catalog__flex-item") {
        element.classList.add("active");
        const value = counter.innerHTML;
        counter.innerHTML = +value + 1;
      } else {
        element.classList.remove("active");
        const value = counter.innerHTML;
        counter.innerHTML = value - 1;
      }
    })
  );
}
