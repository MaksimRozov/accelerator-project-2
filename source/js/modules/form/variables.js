const formElement = document.querySelector('.form');
const itemsInputElement = formElement.querySelectorAll('input');
const VALID_PHONE = /^\+?[0-9]{1,3}?[-\s]?(\(?[0-9]{1,4}?\)?[-\s]?)?[0-9]{1,4}[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,9}$/;
const VALID_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[а-яА-Я0-9._%+-]+@[а-яА-Я0-9.-]+\.[а-яА-Я]{2,}$/;


const ErrorMassage = {
  FIELD_REQUIRED: 'Поле обязательно для заполнения',
  FIELD_TEXT: 'Поле может содержать только буквы и пробелы',
  FIELD_DIGITS: 'Поле должно содержать только цифры'
};

const ErrorClass = {
  ERROR_INPUT: 'form__input--error'
};

export { itemsInputElement, VALID_PHONE, ErrorMassage, ErrorClass, formElement, VALID_EMAIL };
