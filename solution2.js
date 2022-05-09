class IComment {
  constructor(commentId, commentContent, replies) {
    this.commentId = commentId;
    this.commentContent = commentContent;
    this.replies = replies;
  }
}

const comments = [
  new IComment(1, "Hai", [
    new IComment(11, "Hai juga", [
      new IComment(111, "Hai juga hai jugaa"),
      new IComment(112, "Haai juga hai jugaa"),
    ]),
    new IComment(12, "Hai juga", [new IComment(121, "Hai juga hai jugaa")]),
  ]),
  new IComment(2, "Haloo"),
];

let count = {
  value: 0,
};

const countAllComments = (comments) => {
  comments.forEach((el) => {
    if (el.commentContent != undefined) {
      count.value++;
    }
    if (el.replies != undefined) {
      return countAllComments(el.replies);
    }
  });
};

countAllComments(comments);
console.log(count.value);
