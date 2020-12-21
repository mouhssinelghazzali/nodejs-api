let express =  require("express")
let router  = express.Router()
let Post =  require("../models/Post")

router.get("/",async (req,res) => {

    try {
        let posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err})
    }
})

//post id


router.get("/:postId", async (req,res) => {
  try {
    let post =  await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({message:err})
  }
})



router.post("/",async (req,res) => {
    
    let post = new Post({
        title: req.body.title,
        description: req.body.description
    });
 try {
    let savePost =  await  post.save()
    res.json(savePost)
 } catch (e) {
 res.json({ message: err})
 }
})

router.delete("/:postId", async (req,res) =>  {
    try {
    let removePost =  await Post.remove({_id: req.params.postId })
    res.json(removePost)
    } catch (err) {
    res.json({message: err})
    }
})

router.patch("/:postId",async (req,res) => {
    try {
        const post = await Post.updateOne(
            { _id: req.params.postId  },
            { $set: { title: req.body.title } } 
        );
        res.json(post);
    } catch (err) {
        res.json(err.message);
        console.log("messsage err")
    }
});
module.exports = router;