const express = require("express");
const app = express();
const { Post, User } = require("./models");
const { Op } = require("sequelize");
const PORT = 3001;

app.use(express.json());

app.get("/get_posts", async (req, res) => {
    const post = await Post.findAll({
        //attributes: column names on Post
        // attributes: ["title", "content"],
        // but for each post, I also want to include the name and emails associated with that post
        include: [
            {
                model: User,
                attributes: ["name", "email"]
            }
        ]
    })
    res.send(post)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
