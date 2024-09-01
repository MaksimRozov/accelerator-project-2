import { itemsInputElement, VALID_PHONE, ErrorMassage, ErrorClass, VALID_EMAIL } from './variables';

const showErrorMessage = (input, errorMessage) => {
  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');
  input.classList.add(ErrorClass.ERROR_INPUT);
  errorText.textContent = errorMessage;
  errorText.style.display = 'block';
};

const hideErrorMessage = (input) => {
  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');
  input.classList.remove(ErrorClass.ERROR_INPUT);
  errorText.textContent = '';
  errorText.style.display = 'none';
};

const validatePhoneInput = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showErrorMessage(input, ErrorMassage.FIELD_REQUIRED);
  } else if (!VALID_PHONE.test(value)) {
    showErrorMessage(input, ErrorMassage.FIELD_DIGITS);
  } else {
    hideErrorMessage(input);
  }
};

const validateEmailInput = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showErrorMessage(input, ErrorMassage.FIELD_REQUIRED);
  } else if (!VALID_EMAIL.test(value)) {
    showErrorMessage(input, ErrorMassage.FIELD_TEXT);
  } else {
    hideErrorMessage(input);
  }
};

const resetError = () => {
  itemsInputElement.forEach((input) => {
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        hideErrorMessage(input);
        input.classList.remove(ErrorClass.ERROR_INPUT);
      }
    });
    input.addEventListener('input', () => {
      hideErrorMessage(input);
      input.classList.remove(ErrorClass.ERROR_INPUT);
    });
  });
};

export { hideErrorMessage, validatePhoneInput, validateEmailInput, resetError };
