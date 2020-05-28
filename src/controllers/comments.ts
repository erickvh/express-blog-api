import express from 'express';
import { getPost } from '../services/posts';
import {
    createComment,
    getComment,
    updateComment,
    deleteComment,
} from '../services/comments';
import { CommentType } from '../types/CommentType';

const router = express.Router({ mergeParams: true });

router.post('/', async (req: express.Request, res: express.Response) => {
    const post = await getPost(req.params.id);
    if (!post) return res.sendStatus(404).end();
    const comment = await createComment(post, req.body as CommentType);
    res.send(comment).end();
});

router.get(
    '/:commentId',
    async (req: express.Request, res: express.Response) => {
        const post = await getPost(req.params.id);
        if (!post) return res.sendStatus(404).end();
        const comment = await getComment(post, req.params.commentId);
        if (!comment) return res.sendStatus(404).end();
        res.send(comment).end();
    }
);
router.put(
    '/:commentId',
    async (req: express.Request, res: express.Response) => {
        const post = await getPost(req.params.postId);
        if (!post) return res.sendStatus(404);
        const comment = await getComment(post, req.params.commentId);
        if (!comment) return res.sendStatus(404);
        await updateComment(post, comment, req.body.message);
        res.send(comment).end();
    }
);
router.delete(
    '/:commentId',
    async (req: express.Request, res: express.Response) => {
        const post = await getPost(req.params.postId);
        if (!post) return res.status(404).end();
        const comment = await getComment(post, req.params.commentId);
        if (!comment) return res.sendStatus(404).end();
        await deleteComment(post, comment);
        res.status(204).end();
    }
);

export default router;
