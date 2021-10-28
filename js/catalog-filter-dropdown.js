//const filtersSubtitle = document.querySelector('.catalog-filter__subtitle');
const catalogFilterCaption = document.querySelectorAll('.catalog-filter__caption');
const body = document.querySelector("body");

//filtersSubtitle.textContent = "";
//filtersSubtitle.textContent = "Фильтры";
body.addEventListener('click', (e) => {
    if (!e.target.closest(".catalog-filter__prop")) {
        catalogFilterCaption.forEach(el => {
            el.classList.remove("catalog-filter__caption--open");
            el.closest('.catalog-filter__prop').classList.remove("catalog-filter__prop--open");
        });
      }
});

catalogFilterCaption.forEach(el => {
  el.addEventListener('click', (e) => {
    e.target.classList.toggle('catalog-filter__caption--open');
    e.target.closest('.catalog-filter__prop').classList.toggle('catalog-filter__prop--open');
  });
})