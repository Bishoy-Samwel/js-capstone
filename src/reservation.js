/* eslint-disable no-unused-vars */
import Api from './api';

export default class Reserve {
  static generateForm() {
    const form = document.createElement('form');
    const usernameInput = document.createElement('input');
    const startdateInput = document.createElement('input');
    const endDateInput = document.createElement('input');
    const reserveBtn = document.createElement('button');
    usernameInput.setAttribute('placeholder', 'user name');
    startdateInput.setAttribute('placeholder', 'Start date');
    endDateInput.setAttribute('placeholder', 'End date');
    reserveBtn.classList.add('red');
    usernameInput.type = 'text';
    reserveBtn.innerHTML = 'Reserve';
    form.append(usernameInput, startdateInput, endDateInput, reserveBtn);
    return form;
  }

  static manageEvents() {
    document.querySelector('button').addEventListener('click', (event) => {
      event.preventDefault();
      const inputs = document.querySelectorAll('input[type="text"]');
      const username = inputs[0].value;
      const dateStart = inputs[1].value;
      const dateEnd = inputs[2].value;
      const obj = { item_id: '333', username, date_start: dateStart, date_end: dateEnd};
    };
      console.log(obj);
      Api.postReserve(obj);
    });
  }

  static createReserve(obj) {
    const p = document.createElement('p');
    p.innerHTML = `${obj.date_start} ${obj.date_end}: ${obj.username}`;
    return p;
  }

  static async reservation(item_id = '333') {
    const div = document.createElement('div');
    await Api.getComments(item_id);
    Api.commentsData.forEach((obj) => {
      div.append(Comment.createComment(obj));
    });
    return div;
  }
}