import Api from './api';

export default class Comment {
  static generateForm(id) {
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
      const obj = { item_id: id, username, comment };
      console.log(obj);
      Api.postComment(obj);
      const commentsDiv = document.querySelector('commentsDiv');
      commentsDiv.append(Api.createComment(obj));
    });
    form.append(usernameInput, commentInput, commentBtn);
    return form;
  }

  static createComment(obj) {
    const p = document.createElement('p');
    p.innerHTML = `${obj.creation_date} ${obj.username}: ${obj.comment}`;
    return p;
  }

  static CreateCommentsDiv() {
    let commentsDiv = document.querySelector('commentsDiv');
    if (!commentsDiv) {
      commentsDiv = document.createElement('div');
      commentsDiv.setAttribute('id', 'commentsDiv');
    }
    return commentsDiv;
  }
  // user clicks
  // append new comment to the div
  // if the user refresh => clear the div and load the comments

  static async loadComments(itemId) {
    const commentsDiv = Comment.CreateCommentsDiv();
    await Api.getComments(itemId);
    Api.commentsData.forEach((obj) => {
      commentsDiv.append(Comment.createComment(obj));
    });
    return commentsDiv;
  }
}