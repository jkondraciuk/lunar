//Main global variable (stores current question number)
let currentQuestion = 0;

const placeholders = [
  'John',
  'Johnson',
  'j.johnson@gmail.com',
  '2025550155',
  'Poland'
];
const currentValues = {
  firstName: '',
  lastName: '',
  email: '',
  number: '',
  country: ''
}

//Elements
const question = document.querySelector('#question');
const input = document.querySelector('#input');
const errorMsg = document.querySelector('#errorMsg');
const buttonPrev = document.querySelector('#buttonPrev');
const buttonNext = document.querySelector('#buttonNext');
const progressPoints = document.querySelectorAll('.questions__progress-point');

const checkValues = () => {
  let valid = true;
  for (let value in currentValues) {
    if (currentValues[value] === '') {
      valid = false;
    }
  }
  return valid;
}

const checkQuestions = () => {
  if (currentQuestion < 0 ) { 
    currentQuestion = 0;
  } else if (currentQuestion > 4 ) {
    currentQuestion = 4;
  }
}

const activeButton = buttonName => {
  buttonName.classList.remove('questions__button--hidden');
}

const hideButton = buttonName => {
  buttonName.classList.add('questions__button--hidden');
}

const checkSendButton = button => {
  if (currentQuestion === 4) {
    button.value = 'Send';
    button.addEventListener('click', finishPage);
  } else {
    button.value = 'Next';
    button.removeEventListener('click', finishPage);
  }
}

const removeProgress = () => {
  for (let i = currentQuestion + 1; i < progressPoints.length; i++) {
    [...progressPoints][i].classList.remove('questions__progress-point--active');
  }
}
const addProgress = () => {
  for (let i = 0; i < currentQuestion; i++) {
    [...progressPoints][i + 1].classList.add('questions__progress-point--active');
  }
}

const validateValue = input => {
  switch (currentQuestion) {
    case 0: {
      const re = /^[a-z ,.'-]{2,30}$/i;
      if (re.exec(input.value)) {
        return true;
      } else {
        return false;
      }
    } break;
    case 1: {
      const re = /^[a-z ,.'-]{2,30}$/i;
      if (re.exec(input.value)) {
        return true;
      } else {
        return false;
      }
    } break;
    case 2: {
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (re.exec(input.value)) {
        return true;
      } else {
        return false;
      }
    } break;
    case 3: {
      const re = /^[0-9]{7,15}$/i;
      if (re.exec(input.value)) {
        return true;
      } else {
        return false;
      }
    } break;
    case 4: {
      const re = /^[a-z]{4,30}$/i;
      if (re.exec(input.value)) {
        return true;
      } else {
        return false;
      }
    } break;
  }
}

const saveValue = value => {
  switch (currentQuestion) {
    case 0: {
      currentValues.firstName = value;
    } break;
    case 1: {
      currentValues.lastName = value;
    } break;
    case 2: {
      currentValues.email = value;
    } break;
    case 3: {
      currentValues.number = value;
    } break;
    case 4: {
      currentValues.country = value;
    } break;
  }
}

const setValue = input => {
  switch (currentQuestion) {
    case 0: {
      input.value = currentValues.firstName;
    } break;
    case 1: {
      input.value = currentValues.lastName;
    } break;
    case 2: {
      input.value = currentValues.email;
    } break;
    case 3: {
      input.value = currentValues.number;
    } break;
    case 4: {
      input.value = currentValues.country;
    } break;
  }
}

const setError = () => {
  switch (currentQuestion) {
    case 0: {
      errorMsg.textContent = 'Invalid first name. (From 2 to 30 chars, Letters only).';
    } break;
    case 1: {
      errorMsg.textContent = 'Invalid last name. (From 2 to 30 chars, Letters only).';
    } break;
    case 2: {
      errorMsg.textContent = 'Invalid e-mail. (example: name@domain.abc).';
    } break;
    case 3: {
      errorMsg.textContent = 'Invalid phone number (example: 1231231234).';
    } break;
    case 4: {
      errorMsg.textContent = 'Invalid country name. (From 4 to 30 chars, Letters only).';
    } break;
  }
}

const unsetInvalidInput = () => {
  errorMsg.classList.remove('questions__error--active');
}

const invalidInput = () => {
  errorMsg.classList.add('questions__error--active');
}

const changeQuestion = () => {
  switch (currentQuestion) {
    case 0: {
      question.style.transform = 'translateY(0)';
      input.placeholder = placeholders[0];
      input.value = currentValues[0];
      setError();
      hideButton(buttonPrev);
      activeButton(buttonNext);
      checkSendButton(buttonNext);
    } break;
    case 1: {
      question.style.transform = 'translateY(-100%)';
      input.placeholder = placeholders[1];
      setError();
      activeButton(buttonPrev);
      activeButton(buttonNext);
      checkSendButton(buttonNext);
    } break;
    case 2: {
      question.style.transform = 'translateY(-200%)';
      input.placeholder = placeholders[2];
      setError();
      activeButton(buttonPrev);
      activeButton(buttonNext);
      checkSendButton(buttonNext);
    } break;
    case 3: {
      question.style.transform = 'translateY(-300%)';
      input.placeholder = placeholders[3];
      setError();
      activeButton(buttonPrev);
      activeButton(buttonNext);
      checkSendButton(buttonNext);
    } break;
    case 4: {
      question.style.transform = 'translateY(-400%)';
      input.placeholder = placeholders[4];
      setError();
      activeButton(buttonPrev);
      checkSendButton(buttonNext);
    } break;
  }
  removeProgress();
  addProgress();
}

const focusInput = input => {
  input.focus();
}

const finishPage = () => {
  if (validateValue(input)) {
    if (checkValues()) {
      window.location = 'finish.html';
    } else {
      errorMsg.textContent = 'You have to answer all the questions.';
      invalidInput();
    }
  } else {
    invalidInput();
  }
}

//Clickable elements

buttonNext.addEventListener('click', () => {
  if (validateValue(input)) {
    unsetInvalidInput()
    saveValue(input.value);
    currentQuestion++;
    checkQuestions();
    changeQuestion();
    focusInput(input);
    setValue(input);
  } else {
    invalidInput();
  }
});

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    buttonNext.click();
  }
});

buttonPrev.addEventListener('click', () => {
  if (validateValue(input)) {
    unsetInvalidInput();
    saveValue(input.value);
    currentQuestion--;
    checkQuestions();
    changeQuestion();
    focusInput(input);
    setValue(input);
  } else {
    invalidInput();
  }
});

[...progressPoints].forEach(el => {
  el.addEventListener('click', function () {
    if (validateValue(input)) {
      unsetInvalidInput();
      saveValue(input.value);
      currentQuestion = this.dataset.question / 1;
      changeQuestion();
      focusInput(input);
      setValue(input);
    } else {
      invalidInput();
    }
  });
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      if (validateValue(input)) {
        unsetInvalidInput();
        saveValue(input.value);
        currentQuestion = this.dataset.question / 1;
        changeQuestion();
        focusInput(input);
        setValue(input);
      } else {
        invalidInput();
      }
    }
  });
});