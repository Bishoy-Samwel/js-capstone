import Api from './api';

export default class Comment {
  static generateForm() {
    const form = document.createElement('form');
    const usernameInput = document.createElement('input');
    const commentInput = document.createElement('input');
    const commentBtn = document.createElement('button');
    usernameInput.type = 'text';
    commentInput.type = 'text';
    commentBtn.innerHTML = 'Comment';
    commentBtn.addEventListener('click', Comment.addComment());
    form.append(usernameInput, commentInput, commentBtn);
    return form;
  }

  static addComment() {
    const [inputs] = document.querySelectorAll('input');
    const username = inputs[0];
    const comment = inputs[1];
    const obj = { item_id: '0', username, comment };
    Api.postComment(obj);
  }

}