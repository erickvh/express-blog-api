import { Post } from '../models/Post';
import { IPost } from '../interfaces/IPost';
import { PostType } from '../types/PostType';

export async function getPosts(): Promise<IPost[]> {
    const posts = await Post.find();
    return <IPost[]>posts;
}

export async function createPost(body: PostType): Promise<IPost> {
    const post = new Post(body);
    const newPost = await post.save();
    return <IPost>newPost;
}

export async function getPost(id: string): Promise<IPost | null> {
    const post = await Post.findById(id);
    return <IPost>post;
}

export async function updatePost(
    id: string,
    body: PostType
): Promise<IPost | null> {
    const post = await Post.findByIdAndUpdate(id, body, {
        new: true,
    });
    return <IPost>post;
}

export async function deletePost(id: string): Promise<IPost | null> {
    const post = await Post.findByIdAndDelete(id);
    return <IPost>post;
}
