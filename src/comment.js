import Api from './api';

export default class Comment {
  static commentsDiv = Comment.CreateCommentsDiv();

  static numOfComments = 0;

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
      let obj = { item_id: id, username, comment };
      console.log(obj);
      Api.postComment(obj);
      obj = { creation_date: Comment.generateDate(), username, comment };
      Comment.commentsDiv.append(Comment.createComment(obj));
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
    Comment.commentsDiv = document.querySelector('#commentsDiv');
    if (!Comment.commentsDiv) {
      Comment.commentsDiv = document.createElement('div');
      Comment.commentsDiv.setAttribute('id', 'commentsDiv');
    }
    return Comment.commentsDiv;
  }

  static async loadComments(itemId) {
    Comment.commentsDiv.innerHTML = '';
    await Api.getComments(itemId);
    Api.commentsData.forEach((obj) => {
      Comment.commentsDiv.append(Comment.createComment(obj));
    });
    this.numOfComments = Api.commentsData.length;
    console.log(Comment.numOfComments);
    return Comment.commentsDiv;
  }

  static generateDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${yyyy}-${dd}-${mm}`;
    return today;
  }
}