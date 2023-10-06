function result(action) {
  let arr = [];
  switch (action) {
    case "upvote":
      this.upvotes++;
      break;
    case "downvote":
      this.downvotes++;
      break;
    case "score":
      const totalCount = this.upvotes + this.downvotes;
      const tag = checkTag(this.upvotes, this.downvotes, totalCount);

      let num = 0;
      if (totalCount > 50) {
        num = Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes));
      }

      const obscUpvotes = this.upvotes + num;
      const obscDownvotes = this.downvotes + num;
      const score = obscUpvotes - obscDownvotes;

      arr.push(obscUpvotes, obscDownvotes, score, tag);
      return arr;
  }

  function checkTag(upvotes, downvotes, totalCount) {
    if (totalCount < 10) {
      return "new";
    } else if (upvotes / totalCount > 0.66) {
      return "hot";
    } else if ((upvotes >= downvotes && upvotes > 100) || downvotes > 100) {
      return "controversial";
    } else if (downvotes > upvotes) {
      return "unpopular";
    }
    return "new";
  }
}

let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};

var forumPost = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};

result.call(forumPost, "upvote");
result.call(forumPost, "downvote");

var answer = result.call(forumPost, "score");
var expected = [127, 127, 0, "controversial"];
// compareScore(expected, answer);

// 50 Downvotes
for (let i = 0; i < 50; i++) {
  result.call(forumPost, "downvote");
}
answer = result.call(forumPost, "score");
// expected = [139, 189, -50, "unpopular"];
// compareScore(expected, answer);

// function compareScore(expected, answer) {
//   expect(expected[0]).to.equal(answer[0], "Incorrect number of upvotes");
//   expect(expected[1]).to.equal(answer[1], "Incorrect number of downvotes");
//   expect(expected[2]).to.equal(answer[2], "Incorrect score");
//   expect(expected[3]).to.equal(answer[3], "Incorrect rating");
// }

/*
upvote
downvote
totalScore=positive-negative votes

stored votes
reported votes 25% of greater of votes or upvotes rounded up
posts have ratings if over 66% positive=>hot/ if not 66% but more positive&&negativeCount+positiveCout>100=>controversial/ if more negative=>unpopular/ if totalVotes<10 or not one of the others=>new



*/
