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

  static createComment(obj) {
    console.log(obj);
    const p = document.createElement('p');
    p.innerHTML = `${obj.creation_date} ${obj.username}: ${obj.comment}`;
    return p;
  }

  static async loadComments(item_id = 'item1') {
    const div = document.createElement('div');
    await Api.getComments(item_id);
    Api.data.forEach((obj) => {
      console.log(obj);
      div.append(Comment.createComment(obj));
    });
    return div;
  }
}