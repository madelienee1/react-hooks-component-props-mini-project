import React from "react";
import blogData from "../data/blog";
import Article from "./Article";


function ArticleList() {
    return (
        <main>
            {blogData.map((post, index) => (
                <Article key={index} post={post} />
            ))}
        </main>
    );
}


export default ArticleList;