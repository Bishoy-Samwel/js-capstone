import Comment from './__mocks__/comment';

describe('test the numOfComments attribute', () => {
  test('should update number of comments', () => {
    const commentObj = { comment: 'New Comment', creation_date: '2011-02-10', username: 'Bishoy' };
    Comment.postComment(commentObj);
    Comment.loadComments();
    expect(Comment.numOfComments).toBe(3);
  });
});