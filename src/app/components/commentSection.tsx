import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';

type Comment = {
    id: string;
    content: string;
    name_of_sender: string;
    created_at: string;
};

type CommentSectionProps = {
    taskId: string;
};

export const CommentSection: React.FC<CommentSectionProps> = ({ taskId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [commentToDelete, setCommentToDelete] = useState<string | null>(null);

    useEffect(() => {
        const storedComments = localStorage.getItem(`comments-${taskId}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [taskId]);

    useEffect(() => {
        if (comments.length > 0) {
            localStorage.setItem(
                `comments-${taskId}`,
                JSON.stringify(comments)
            );
        }
    }, [comments, taskId]);

    const handleSubmitComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment: Comment = {
                id: Date.now().toString(),
                content: newComment,
                name_of_sender: 'Current User', // This would be the actual user in a real app
                created_at: new Date().toISOString(),
            };
            const updatedComments = [...comments, comment];
            setComments(updatedComments);
            localStorage.setItem(
                `comments-${taskId}`,
                JSON.stringify(updatedComments)
            );
            setNewComment('');
        }
    };

    const handleDeleteComment = (commentId: string) => {
        setCommentToDelete(commentId);
    };

    const confirmDeleteComment = () => {
        if (commentToDelete) {
            const updatedComments = comments.filter(
                comment => comment.id !== commentToDelete
            );
            setComments(updatedComments);
            localStorage.setItem(
                `comments-${taskId}`,
                JSON.stringify(updatedComments)
            );
            setCommentToDelete(null);
        }
    };

    return (
        <div className='mt-4'>
            <h4 className='font-semibold mb-2'>Comments</h4>
            <ScrollArea className='h-[30vh] w-full rounded-md border p-4'>
                <ul className='space-y-4'>
                    {comments.map(comment => (
                        <li
                            key={comment.id}
                            className='bg-muted p-2 rounded-md flex justify-between items-start'
                        >
                            <div>
                                <p className='text-sm'>{comment.content}</p>
                                <p className='text-xs text-muted-foreground mt-1'>
                                    - {comment.name_of_sender} at{' '}
                                    {new Date(
                                        comment.created_at
                                    ).toLocaleString()}
                                </p>
                            </div>
                            <Button
                                variant='ghost'
                                size='icon'
                                onClick={() => handleDeleteComment(comment.id)}
                                aria-label='Delete comment'
                            >
                                <Trash2 className='h-4 w-4' />
                            </Button>
                        </li>
                    ))}
                </ul>
            </ScrollArea>
            <form onSubmit={handleSubmitComment} className='mt-4 space-y-2'>
                <Textarea
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    placeholder='Add a comment...'
                    className='w-full p-2 border rounded'
                />
                <Button type='submit' className='w-full sm:w-auto'>
                    Add Comment
                </Button>
            </form>

            <AlertDialog
                open={!!commentToDelete}
                onOpenChange={() => setCommentToDelete(null)}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you sure you want to delete this comment?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the comment.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDeleteComment}>
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};
