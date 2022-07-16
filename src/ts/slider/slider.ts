export function slider() {
  const rangeInput: any = document.querySelectorAll(".range-input input"),
    priceInput: any = document.querySelectorAll(".price-input input"),
    range: any = document.querySelector(".slider .progress");
  const priceGap = 1;

  const rangeInputNum: any = document.querySelectorAll(
      ".range-input-num input"
    ),
    priceInputNum: any = document.querySelectorAll(".price-input-num input"),
    rangeNum: any = document.querySelector(".slider-num .progress");
  const priceGapNum = 1;

  const resPrice = [...priceInput].map((input: any) => {
    input.addEventListener("input", (e: any) => {
      const minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  const resRange = [...rangeInput].map((input: any) => {
    //input.addEventListener("input", (e: any) => {
    const minVal = parseInt(rangeInput[0].value);
    const maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
    const newLocal = [minVal, maxVal];
    return newLocal;
    //});
  });
  const min = resRange[0][0];
  const max = resRange[1][1];

  const resPriceNum = [...priceInputNum].map((input: any) => {
    input.addEventListener("input", (e: any) => {
      const minPriceNum = parseInt(priceInputNum[0].value),
        maxPriceNum = parseInt(priceInputNum[1].value);
      if (
        maxPriceNum - minPriceNum >= priceGapNum &&
        maxPriceNum <= rangeInputNum[1].max
      ) {
        if (e.target.className === "input-min") {
          rangeInputNum[0].value = minPriceNum;
          rangeNum.style.left = (minPriceNum / rangeInputNum[0].max) * 10 + "%";
        } else {
          rangeInputNum[1].value = maxPriceNum;
          rangeNum.style.right =
            10 - (maxPriceNum / rangeInputNum[1].max) * 10 + "%";
        }
      }
    });
  });

  const resRangeNum = [...rangeInputNum].map((input: any) => {
    //input.addEventListener("input", (e: any) => {
    const minVal = parseInt(rangeInputNum[0].value);
    const maxVal = parseInt(rangeInputNum[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInputNum[0].value = maxVal - priceGap;
      } else {
        rangeInputNum[1].value = minVal + priceGap;
      }
    } else {
      priceInputNum[0].value = minVal;
      priceInputNum[1].value = maxVal;
      rangeNum.style.left =
        ((minVal - 2000) / (rangeInputNum[0].max - 2000)) * 100 + "%";
      rangeNum.style.right =
        100 - ((maxVal - 2000) / (rangeInputNum[1].max - 2000)) * 100 + "%";
    }
    const newLocal = [minVal, maxVal];
    return newLocal;
    //});
  });
  const minNum = resRangeNum[0][0];
  const maxNum = resRangeNum[1][1];
  return [min, max, minNum, maxNum];
}
