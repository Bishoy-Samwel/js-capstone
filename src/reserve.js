import Api from './api';

export default class Reserve {
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
    reserveBtn.setAttribute('id', 'reserve-btn');

    startdateInput.type = 'date';
    endDateInput.type = 'date';

    reserveBtn.innerHTML = 'Reserve';

    reserveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const dateStart = startdateInput.value;
      const dateEnd = endDateInput.value;
      const obj = {
        item_id: id, username, date_start: dateStart, date_end: dateEnd,
      };
      console.log(obj);
      Api.postReserve(obj);
      const reservesDiv = document.querySelector('reservesDiv');
      reservesDiv.append(Api.createReserve(obj));
    });
    form.append(usernameInput, startdateInput, endDateInput, reserveBtn);

    return form;
  }

  static createReserve(obj) {
    const p = document.createElement('p');
    p.innerHTML = `${obj.creation_date} ${obj.username}: ${obj.reserve}`;
    return p;
  }

  static CreateReservesDiv() {
    let reservesDiv = document.querySelector('reservesDiv');
    if (!reservesDiv) {
      reservesDiv = document.createElement('div');
      reservesDiv.setAttribute('id', 'reservesDiv');
    }
    return reservesDiv;
  }
  // user clicks
  // append new reserve to the div
  // if the user refresh => clear the div and load the reserves

  static async loadReserves(itemId) {
    const reservesDiv = Reserve.CreateReservesDiv();
    await Api.getReserves(itemId);
    Api.reservesData.forEach((obj) => {
      reservesDiv.append(Reserve.createReserve(obj));
    });
    console.log(reservesDiv);
    return reservesDiv;
  }
}