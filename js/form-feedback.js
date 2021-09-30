import Inputmask from "inputmask";

const phoneInput = document.getElementById("tel");

const im = new Inputmask("+7 (999)-999-99-99");
im.mask(phoneInput);

const popup = document.querySelector(".js-popup-call");
new JustValidate(".js-form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
    },
    tel: {
      required: true,
      function: () => {
        const phone = phoneInput.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
    mail: {
      required: true,
      email: true,
    },
    checkbox: {
      required: true,
    },
  },
  focusWrongField: true,
  messages: {
    name: {
      required: '"Имя" обязательно для заполнения',
      minLength: '"Имя" введено некорректно, минимум 2 знака',
      maxLength: '"Имя" введено некорректно, максимум 20 знаков',
    },
    tel: {
      required: '"Телефон" обязательно для заполнения',
      function: 'Заполните "Телефон"',
    },
    email: {
      required: '"Email" обязательно для заполнения',
      email: 'Недопустимый формат "Email"',
    },
    checkbox: {
      required: 'Необходимо принять "Пользовательское соглашение"',
    },
  },
  submitHandler: (form) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          popup.classList.add("active");
        }
      }
    };
    xhr.open("POST", "https://calm-earth-01166.herokuapp.com/order", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(new URLSearchParams(formData).toString());

    form.reset();
  },
});
