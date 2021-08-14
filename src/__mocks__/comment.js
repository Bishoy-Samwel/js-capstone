export default class Comment {
  static comments = [
    { comment: 'This is nice!', creation_date: '2021-01-10', username: 'John' },
    { comment: 'Great content!', creation_date: '2021-02-10', username: 'Jane' }]

  static numOfComments = 0;

  static postComment(obj) {
    Comment.comments.push(obj);
  }

  static loadComments() {
    this.numOfComments = Comment.comments.length;
  }
}