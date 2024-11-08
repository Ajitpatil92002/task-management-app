import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        const storedComments = localStorage.getItem(`comments-${taskId}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [taskId]);

    useEffect(() => {
        localStorage.setItem(`comments-${taskId}`, JSON.stringify(comments));
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
            setComments([...comments, comment]);
            setNewComment('');
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
                            className='bg-muted p-2 rounded-md'
                        >
                            <p className='text-sm'>{comment.content}</p>
                            <p className='text-xs text-muted-foreground mt-1'>
                                - {comment.name_of_sender} at{' '}
                                {new Date(comment.created_at).toLocaleString()}
                            </p>
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
        </div>
    );
};
