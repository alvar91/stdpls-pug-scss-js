const catalogFilterItem = document.querySelectorAll(".catalog-filter__item");
const catalogChoice = document.querySelector(".catalog-choice__list");

const createChoiceItem = (text, dataColor) => {
  return `
      <button style="background: ${dataColor}" class="btn-reset catalog-choice__item" data-choice-text="${text}">${text}
        <svg aria-hidden="true">
            <path d="M1 1L8.2 8.2"  stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.2 1L1 8.2"  stroke-linecap="round" stroke-linejoin="round"/>     
        </svg>
      </button>
    `;
};

const insertChoiceItem = (el) => {
  let text = el.querySelector(".checkbox-name").textContent;
  let dataColor = el
    .querySelector(".filters__label")
    .getAttribute("data-color");

  document
    .querySelector(".catalog-choice__list")
    .insertAdjacentHTML("beforeend", createChoiceItem(text, dataColor));
};

if (catalogFilterItem.length > 0) {
  catalogFilterItem.forEach((el) => {
    let checked = el.querySelector("input").checked;

    if (checked) {
      insertChoiceItem(el);
    }
  });

  catalogFilterItem.forEach((el) => {
    el.querySelector("input").addEventListener("change", () => {
      let checked = el.querySelector("input").checked;

      if (checked) {
        //el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
        insertChoiceItem(el);
      } else {
        //el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        let text = el.querySelector(".filters__label").dataset.text;

        const choice = document.querySelector(`[data-choice-text="${text}"]`);
        if (choice) {
          choice.remove();
        }
      }
    });
  });

  catalogChoice.addEventListener("click", (e) => {
    if (e.target.classList.contains("catalog-choice__item")) {
      e.target.remove();
      let text = e.target.textContent.trimLeft().trimRight();

      if (document.querySelector(`[data-text="${text}"]`)) {
        document
          .querySelector(`[data-text="${text}"]`)
          .querySelector("input").checked = false;
        //document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
      }
    }
  });
}
