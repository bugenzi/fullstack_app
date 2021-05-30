const router = require("express").Router();
const Feed = require("../models/post.model");
const User = require("../models/user.model");
const Comment = require("../models/comment.model")

const jwtParser = require("../utils/parseJWT");

const { tradingValidation } = require("../utils/registerValidation");


router.get("/", async (req, res) => {
  User.find()
    .then((users) => res.json({ users }))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});
router.post("/addBook", (req, res) => {
  const { error } = tradingValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  let TradeData = {
    bookName: req.body.bookName,
    finished: req.body.finished,
    description: req.body.description,
    location: req.body.location,
  };
  let jwtPayload = jwtParser(req.headers.authorization.split(" ")[1]);

  User.findByIdAndUpdate(
    { _id: jwtPayload.id },
    { $push: { favoriteBooks: TradeData } }
  )
    .then((trade) => {
      res.status(200).json({ trade });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});
router.get("/getAllTrades", async (req, res) => {
  User.find()
    .then((data) => {
      let book = data.map((trades) => {
        return trades.favoriteBooks;
      });
      res.json(book);
    })
    .catch((err) => [res.status(400).json({ message: err })]);
});

router.post("/postFeed", async (req, res) => {
  let jwtPayload = jwtParser(req.headers.authorization.split(" ")[1]);
  
  if (!jwtPayload) {
    return res.status(400).json({
      message: "Sorry buy your arent authorized to post , make an accout ",
    });
  }
  if(!req.body.postInput){
    return res.status(404).json({message:"Error ,you need to write somthing "})
  }
  let { username, id } = jwtPayload;
  const newfeed = new Feed({
    user:id,
    userName: username,
    userId: id,
    postInput: req.body.postInput,
  })

  const user= await  User.findById(id)



  try {
    newfeed.save();
    user.posts.push(newfeed._id)
    user.save()
    res.status(200).json({ data: { newfeed } });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/postComment/:id", async(req, res) => {
  let jwtPayload = jwtParser(req.headers.authorization.split(" ")[1]);
  let postCommentID = req.params.id;
  const post= await  Feed.findById(postCommentID)
  if (!jwtPayload) {
    return res
      .status(400)
      .json({ messgae: "You cant post comments , make an accout " });
  }
  if (!postCommentID) {
    return res.status(400).json({
      messgae: "Something went wrong myb the user has deleted this post ",
    });
  }
  const { id, username } = jwtPayload;
  let postedComment = {
    userName: username,
    userId: id,
    comment: req.body.comment,
  };
 
  Comment.create(postedComment)
      .then((comment) => {
      post.comments.push(comment._id)
      post.save()
      res.status(200).json({ comment });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });

});

router.get("/postFeed", (req, res) => {
  Feed.find().sort([['date', 'descending']])
    .then((feeds) =>{
      res.send(feeds);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

module.exports = router;
