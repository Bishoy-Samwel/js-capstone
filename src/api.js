import axios from 'axios';

export default class Api {
  static apiKey = 'd2sFS7omvjcEYYrcoBUH';

  static baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${Api.apiKey}/`;

  static commentsData = [];

  static reservationsData = [];

  static commentsUrl = `${Api.baseUrl}comments`;

  static reservationsUrl = `${Api.baseUrl}reservation`;

  static async postComment(obj) {
    const commentUrl = `${Api.commentsUrl}`;
    await axios.post(commentUrl, obj);
  }

  static async getComments(id) {
    const commentUrl = `${Api.commentsUrl}?item_id=${id}`;
    const result = await axios.get(commentUrl);
    Api.commentsData = result.data;
  }

  static async postReservation(obj) {
    const reservationUrl = `${Api.reservationsUrl}`;
    await axios.post(reservationUrl, obj);
  }

  static async getReservations(id) {
    const reservationsUrl = `${Api.reservationsUrl}?item_id=${id}`;
    const result = await axios.get(reservationsUrl);
    Api.reservationsData = result.data;
  }

  static createApp() {
    const request = new XMLHttpRequest();
    request.open('POST', `${Api.baseUrl}apps/`, true);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 201) {
        console.log(request.responseText);
      }
    };
    request.send();
  }
}