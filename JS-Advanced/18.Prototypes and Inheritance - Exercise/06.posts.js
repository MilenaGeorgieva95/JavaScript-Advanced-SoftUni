function posts() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    toString() {
      return `Post: ${this.title}\n` + `Content: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.comments = [];
      this.likes = likes;
      this.dislikes = dislikes;
    }
    addComment(comment) {
      this.comments.push(comment);
    }
    toString() {
      let text = super.toString() + `\nRating: ${this.likes - this.dislikes}`;

      if (this.comments.length > 0) {
        text += "\nComments:";
        this.comments.forEach((el) => (text += `\n * ${el}`));
      }
      return text;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }
    view() {
      this.views++;
      return this;
    }
    toString() {
      let text = super.toString() + `\nViews: ${this.views}`;
      return text;
    }
  }
  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = posts();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
let scm1 = new classes.BlogPost("TestTitle", "TestContent", 25);
scm1.view().view().view();

console.log(scm1);
