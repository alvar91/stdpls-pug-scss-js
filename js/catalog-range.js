import noUiSlider from "nouislider";
import {formatMoney} from "./utils/format";

const createChoiceItem = (text, dataColor) => {
  return (
    `
    <button style="background: ${dataColor}" class="btn-reset catalog-choice__item" data-choice-text="${text}">${text}
      <svg aria-hidden="true">
          <path d="M1 1L8.2 8.2"  stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.2 1L1 8.2"  stroke-linecap="round" stroke-linejoin="round"/>     
      </svg>
    </button>
  `
  );
};

let rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [225000]
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];
  const connect = document.querySelector('.noUi-connect');

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  rangeSlider.noUiSlider.on('slide', function () {
    connect.style.background = '#7033ac';
  });

  rangeSlider.noUiSlider.on('end', function () {
    connect.style.background = '#a65cf0';
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });

  let oldValue = null;

  function createRangeChoiceItem(item) {
    const choice = document.querySelector(`[data-choice-text="${oldValue}"]`);
    if(choice) {
        choice.remove();
    }

    let text = "До " + formatMoney(item.value);

    oldValue = text;

    let dataColor = item.getAttribute('data-color');
    document.querySelector('.catalog-choice__list').insertAdjacentHTML('beforeend', createChoiceItem(text, dataColor));
  }

  rangeSlider.noUiSlider.on('change', function () {
    createRangeChoiceItem(input1);
  });

  input1.addEventListener('change', function (el) {
    createRangeChoiceItem(input1);
  })
}
