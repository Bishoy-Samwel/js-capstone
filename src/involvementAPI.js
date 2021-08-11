class Api {
  static apiKey = 'd2sFS7omvjcEYYrcoBUH';

  static baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  static commentsUrl = `${Api.baseUrl}comments/`;

  static createCommentUrl = `${Api.commentUrl}?item_id=${}`;

  static createApp() {
    const request = new XMLHttpRequest();
    request.open('POST',`${Api.baseUrl}apps/`, true);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 201) {
        console.log(request.responseText);
      }
    };
    request.send();
  }

}
