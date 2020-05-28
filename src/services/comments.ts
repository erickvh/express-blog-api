import { IPost } from '../interfaces/IPost';
import { CommentType } from '../types/CommentType';
import { IComment } from '../interfaces/IComment';
import { Comment } from '../models/Comment';

export async function createComment(
    post: IPost,
    body: CommentType
): Promise<IComment> {
    const comment = new Comment(body);
    post.comments.push(<IComment>comment);
    await post.save();
    return <IComment>comment;
}

export async function getComment(
    post: IPost,
    commentId: string
): Promise<IComment | undefined> {
    const comment = post.comments.find(
        (comment) => String(comment._id) === commentId
    );
    return comment;
}

export async function updateComment(
    post: IPost,
    comment: IComment,
    message: string
): Promise<void> {
    comment.set({ message: message });
    await post.save();
    return;
}

export async function deleteComment(
    post: IPost,
    comment: IComment
): Promise<void> {
    comment.remove();
    await post.save();
}
