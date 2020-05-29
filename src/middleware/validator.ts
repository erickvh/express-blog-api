import express from 'express';
import { ClientError } from './handler';

export function validateContentType(
    req: express.Request,
    res: express.Response,
    next: Function
): void {
    if (['POST', 'PUT'].includes(req.method) && !req.is('json')) {
        const error = new ClientError(
            400,
            'Content-Type must be application/json'
        );
        next(error);
    }
    next();
}
