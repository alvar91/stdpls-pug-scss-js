export const fadeIn = (el, timeout, className) => {
 el.style.opacity = 0;
 el.classList.add(className);
 //el.style.display = display || 'block';
 el.style.transition = `opacity ${timeout}ms`;

 setTimeout(() => {
   el.style.opacity = 1;
 }, 10)
}

export const fadeOut = (el, timeout, className) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    //el.style.display = 'none';
    el.classList.remove(className);
  }, timeout)
 }

