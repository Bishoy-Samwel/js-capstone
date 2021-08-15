/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Api from './api';

export default class Reserve {
  static reservesDiv = Reserve.CreateReservesDiv();

  static numOfReserves = 0;

  static generateForm(id) {
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
    startdateInput.type = 'date';
    endDateInput.type = 'date';

    reserveBtn.innerHTML = 'Reserve';
    reserveBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const username = usernameInput.value;
      const dateStart = startdateInput.value;
      const dateEnd = endDateInput.value;
      const obj = {
        item_id: id, username, date_start: dateStart, date_end: dateEnd,
      };
      Api.postReserve(obj);
      Reserve.reservesDiv.append(Reserve.createReserve(obj));
    });
    form.append(usernameInput, startdateInput, endDateInput, reserveBtn);
    return form;
  }

  static createReserve(obj) {
    const p = document.createElement('p');
    p.innerHTML = `${obj.date_start}-${obj.date_end} by: ${obj.username}`;
    return p;
  }

  static CreateReservesDiv() {
    Reserve.reservesDiv = document.querySelector('#reservesDiv');
    if (!Reserve.reservesDiv) {
      Reserve.reservesDiv = document.createElement('div');
      Reserve.reservesDiv.setAttribute('id', 'reservesDiv');
    }
    return Reserve.reservesDiv;
  }

  static async loadReserves(itemId) {
    Reserve.reservesDiv.innerHTML = '';
    const data = await Api.getReserves(itemId);
    data.forEach((obj) => {
      Reserve.reservesDiv.append(Reserve.createReserve(obj));
    });
    this.numOfReserves = Api.reservesData.length;
    return Reserve.reservesDiv;
  }
}
