import { validatePhoneInput, validateEmailInput, resetError } from './utils';
import { formElement, itemsInputElement, ErrorClass } from './variables';

const validateForm = () => {
  if (formElement) {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      itemsInputElement.forEach((input) => {
        if (input.name === 'email') {
          validateEmailInput(input);
        } else if (input.name === 'phone') {
          validatePhoneInput(input);
        }
      });

      const isValid = Array.from(itemsInputElement).every(
        (input) => !input.classList.contains(ErrorClass.ERROR_INPUT),
      );
      if (isValid) {
        formElement.submit();
      }
    });

    resetError();
  }
};

export { validateForm };
