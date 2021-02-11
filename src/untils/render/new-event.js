import { users, days, times } from '../constant';

export const newEvent = () => {
  const eventWrapper = document.createElement('div');
  const eventForm = document.createElement('form');

  const usersSelect = document.createElement('select');
  const daysSelect = document.createElement('select');
  const timeSelect = document.createElement('select');
  const nameInput = document.createElement('input');

  const usersSelectLabel = document.createElement('label');
  const daysSelectLabel = document.createElement('label');
  const timeSelectLabel = document.createElement('label');
  const nameInputLabel = document.createElement('label');

  const buttonwrapper = document.createElement('div');
  const addEvent = document.createElement('button');
  const closeEvent = document.createElement('button');

  eventWrapper.setAttribute('class', 'event');
  eventForm.setAttribute('class', 'event__form');

  nameInput.setAttribute('id', 'nameEvent');

  nameInput.setAttribute('name', 'nameEvent');
  timeSelect.setAttribute('name', 'timeEvent');
  daysSelect.setAttribute('name', 'dayEvent');
  usersSelect.setAttribute('name', 'userEvent');

  nameInputLabel.setAttribute('for', 'nameEvent');
  timeSelectLabel.setAttribute('for', 'timeEvent');
  daysSelectLabel.setAttribute('for', 'dayEvent');
  usersSelectLabel.setAttribute('for', 'userEvent');
  usersSelectLabel.setAttribute('id', 'js-choise');

  buttonwrapper.setAttribute('class', 'event__buttons');
  addEvent.setAttribute('class', 'btn event__button--yes');
  addEvent.setAttribute('type', 'submit');

  closeEvent.setAttribute('class', 'btn event__button--no');

  nameInputLabel.textContent = 'Add name event:';
  timeSelectLabel.textContent = 'Choose a time:';
  daysSelectLabel.textContent = 'Choose a day:';
  usersSelectLabel.textContent = 'Choose a participants:';


  addEvent.textContent = 'Create';
  closeEvent.textContent = 'Cancel';

  const appendOption = (arr, body) => {
    arr.map((item) => {
      const option = document.createElement('option');
      option.setAttribute('value', item);
      option.textContent = item;
      body.append(option);
    });
  };

  timeSelect.append(appendOption(times, timeSelect));
  daysSelect.append(appendOption(days, daysSelect));
  usersSelect.append(appendOption(users, usersSelect));
  
  eventForm.append(nameInputLabel);
  eventForm.append(nameInput);

  eventForm.append(daysSelectLabel);
  eventForm.append(daysSelect);
  
  eventForm.append(usersSelectLabel);
  eventForm.append(usersSelect);

  eventForm.append(timeSelectLabel);
  eventForm.append(timeSelect);

  buttonwrapper.append(addEvent);
  buttonwrapper.append(closeEvent);

  eventWrapper.append(eventForm);
  eventWrapper.append(buttonwrapper);

  return eventWrapper
}
