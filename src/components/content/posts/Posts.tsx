import React from 'react';

import './Posts.css';
import Button from '../../button/Button';
import Video from '../video/Video';
import posts from '../../../data/posts/posts.json';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ShareIcon from '@material-ui/icons/Share';
import BookMarkIcon from '@material-ui/icons/Bookmark';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


export default function Posts(){
    return(
        <div className="posts-wrapper">
            {posts.map((post, index) => (
            <div className="post">
                <div className="post-sidebar">
                    <ArrowUpwardIcon className="upvote" />
                    <span>{post.upvotes}</span>
                    <ArrowDownwardIcon className="downvote" />
                </div>
                <div className="post-title">
                    <img src={post.subreddit.image_src}/>
                    <span className="subreddit-name underline">r/{post.subreddit.name}</span>
                    <span className="post-user">Posted by</span>
                    <span className="post-user underline">u/{post.username}</span>
                    <div className="spacer"></div>
                    <Button label="+JOIN" />
                </div>
                <div className="post-body">
                    <span className="title">{post.title}</span>
                    {post.image_src && <img src={post.image_src } />}
                    {post.video_src && <Video src={post.video_src} duration={post.duration} />}
                    {post.description && <span className="description">{post.description}</span> }
                </div>
                <div className="post-footer">
                    <div className="comments footer-icon">
                        <ModeCommentIcon className="comment-icon" />
                        <span>{post.comments} Comments</span>
                    </div>
                    <div className="share footer-icon">
                        <ShareIcon />
                        <span>Share</span>
                    </div>
                    <div className="save footer-icon">
                        <BookMarkIcon />
                        <span>Save</span>
                    </div>
                    <MoreHorizIcon className="more-icon footer-icon" />
                </div>
            </div>
            ))}
        </div>
    );
}