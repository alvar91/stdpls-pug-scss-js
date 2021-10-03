import noUiSlider from "nouislider";

const rangeSlider = document.querySelector(".filters__range");
const rangeInputs = document.querySelectorAll(".input-number");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 250000],
    connect: true,
    step: 25000,
    keyboardSupport: true,
    range: {
      min: [2000],
      max: [250000],
    },
  });

  rangeSlider.noUiSlider.on("update", (values, handle) => {
    rangeInputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (index, value) => {
    let arr = [null, null];
    arr[index] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  rangeInputs.forEach((item, i) => {
    item.addEventListener("change", (e) => {
      setRangeSlider(i, e.currentTarget.value);
    });
  });
}

const handles = document.querySelectorAll(".noUi-handle");
const noUiLine = document.querySelector(".noUi-connect");

handles.forEach((el) => {
  el.addEventListener("focus", () => {
    noUiLine.style.background = "#7033ac";
  });
});

handles.forEach((el) => {
  el.addEventListener("blur", () => {
    noUiLine.style.background = "#a65cf0";
  });
});
