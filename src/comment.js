import Api from './api';

export default class Comment {
  static generateForm() {
    const form = document.createElement('form');
    const usernameInput = document.createElement('input');
    const commentInput = document.createElement('input');
    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('id', 'comment-btn');
    usernameInput.setAttribute('placeholder', 'username');
    commentInput.setAttribute('placeholder', 'write your comment here...');
    commentBtn.classList.add('red');
    usernameInput.type = 'text';
    commentInput.type = 'text';
    commentBtn.innerHTML = 'Comment';
    commentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const comment = commentInput.value;
      const obj = { item_id: '333', username, comment };
      Api.postComment(obj);
    });
    form.append(usernameInput, commentInput, commentBtn);
    return form;
  }

  static createComment(obj) {
    const p = document.createElement('p');
    p.innerHTML = `${obj.creation_date} ${obj.username}: ${obj.comment}`;
    return p;
  }

  static async loadComments(itemId) {
    const div = document.createElement('div');
    await Api.getComments(itemId);
    Api.commentsData.forEach((obj) => {
      div.append(Comment.createComment(obj));
    });
    return div;
  }
}