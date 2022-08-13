import PostMessage from "../models/postMessage";


export const getPosts = (req, res) => {
   try{
    const PostMessages = PostMessage.find();

    res.status(200).json(PostMessages);

   } catch (error){
    res.status(404).json({ message: error.message });
   }
}

export const createPost = (req, res) => {

    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        
        await newPost.save();
    
        res.status(201).json(newPost);
    
    } catch (error){
        res.status(409).json({ message: error.message });
    }
}