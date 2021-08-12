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
}