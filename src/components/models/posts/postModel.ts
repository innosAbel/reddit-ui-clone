import { Subreddit } from "../subreddit/Subreddit";

export interface Post{
    title: string;
    description?: string;
    upvotes: number;
    video_src?: string;
    duration?: number;
    comments: string;
    image_src?: string;
    subreddit: Subreddit;
    username: string;
}