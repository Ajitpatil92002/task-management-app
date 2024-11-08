import React, { useCallback, useEffect, useState } from 'react';

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
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Task } from '../page';
import { CommentSection } from './commentSection';

type TaskModalProps = {
    task: Task | null;
    onClose: () => void;
    onUpdate: (task: Task) => void;
    onDelete: (taskId: string) => void;
};

export const TaskModal: React.FC<TaskModalProps> = ({
    task,
    onClose,
    onUpdate,
    onDelete,
}) => {
    const [editedTask, setEditedTask] = useState<Task | null>(task);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
    const [labelsInput, setLabelsInput] = useState('');

    useEffect(() => {
        if (task) {
            setEditedTask(task);
            setLabelsInput(task.labels.join(', '));
        }
    }, [task]);

    const handleSelectChange = useCallback((name: string, value: string) => {
        setEditedTask(prev => (prev ? { ...prev, [name]: value } : null));
    }, []);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === '1') {
                handleSelectChange('status', 'Open');
            } else if (event.key === '2') {
                handleSelectChange('status', 'In Progress');
            } else if (event.key === '3') {
                handleSelectChange('status', 'Closed');
            }
        },
        [handleSelectChange]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!editedTask) return null;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setEditedTask(prev => (prev ? { ...prev, [name]: value } : null));
    };

    const handleLabelsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabelsInput(e.target.value);
        const labels = e.target.value
            .split(',')
            .map(label => label.trim())
            .filter(label => label !== '');
        setEditedTask(prev => (prev ? { ...prev, labels } : null));
    };

    const handleSave = () => {
        setIsUpdateDialogOpen(true);
    };

    const confirmUpdate = () => {
        if (editedTask) {
            onUpdate(editedTask);
        }
        setIsUpdateDialogOpen(false);
    };

    const handleDelete = () => {
        setIsDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (editedTask) {
            onDelete(editedTask.id);
        }
        setIsDeleteDialogOpen(false);
    };

    return (
        <>
            <Dialog open={true} onOpenChange={onClose}>
                <DialogContent className='sm:max-w-[600px] max-h-[90vh] overflow-y-auto'>
                    <DialogHeader>
                        <DialogTitle>{editedTask.name}</DialogTitle>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <Label
                                htmlFor='name'
                                className='sm:w-1/4 text-right'
                            >
                                Name
                            </Label>
                            <Input
                                id='name'
                                name='name'
                                value={editedTask.name}
                                onChange={handleInputChange}
                                className='w-full sm:w-3/4'
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <Label
                                htmlFor='description'
                                className='sm:w-1/4 text-right'
                            >
                                Description
                            </Label>
                            <Textarea
                                id='description'
                                name='description'
                                value={editedTask.description || ''}
                                onChange={handleInputChange}
                                className='w-full sm:w-3/4'
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <Label
                                htmlFor='labels'
                                className='sm:w-1/4 text-right'
                            >
                                Labels
                            </Label>
                            <Input
                                id='labels'
                                name='labels'
                                value={labelsInput}
                                onChange={handleLabelsChange}
                                placeholder='Enter comma-separated labels'
                                className='w-full sm:w-3/4'
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <Label
                                htmlFor='priority'
                                className='sm:w-1/4 text-right'
                            >
                                Priority
                            </Label>
                            <Select
                                onValueChange={value =>
                                    handleSelectChange('priority', value)
                                }
                                value={editedTask.priority}
                            >
                                <SelectTrigger className='w-full sm:w-3/4'>
                                    <SelectValue placeholder='Select a priority' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='Low'>Low</SelectItem>
                                    <SelectItem value='Medium'>
                                        Medium
                                    </SelectItem>
                                    <SelectItem value='High'>High</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <Label
                                htmlFor='status'
                                className='sm:w-1/4 text-right'
                            >
                                Status
                            </Label>
                            <Select
                                onValueChange={value =>
                                    handleSelectChange('status', value)
                                }
                                value={editedTask.status}
                            >
                                <SelectTrigger className='w-full sm:w-3/4'>
                                    <SelectValue placeholder='Select a status' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='Open'>Open</SelectItem>
                                    <SelectItem value='In Progress'>
                                        In Progress
                                    </SelectItem>
                                    <SelectItem value='Closed'>
                                        Closed
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='text-sm text-muted-foreground mt-2 text-center'>
                            Press 1 for Open, 2 for In Progress, 3 for Closed
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <Label
                                htmlFor='assignee'
                                className='sm:w-1/4 text-right'
                            >
                                Assignee
                            </Label>
                            <Input
                                id='assignee'
                                name='assignee'
                                value={editedTask.assignee || ''}
                                onChange={handleInputChange}
                                className='w-full sm:w-3/4'
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <Label
                                htmlFor='due-date'
                                className='sm:w-1/4 text-right'
                            >
                                Due Date
                            </Label>
                            <Input
                                id='due-date'
                                name='due_date'
                                type='date'
                                value={editedTask.due_date || ''}
                                onChange={handleInputChange}
                                className='w-full sm:w-3/4'
                            />
                        </div>
                        <CommentSection taskId={editedTask.id} />
                    </div>
                    <DialogFooter className='sticky bottom-0 bg-background pt-2'>
                        <Button variant='destructive' onClick={handleDelete}>
                            Delete
                        </Button>
                        <Button onClick={handleSave}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <AlertDialog
                open={isDeleteDialogOpen}
                onOpenChange={setIsDeleteDialogOpen}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you sure you want to delete this task?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the task and all associated comments.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete}>
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog
                open={isUpdateDialogOpen}
                onOpenChange={setIsUpdateDialogOpen}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Task Update</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to update this task? This
                            action will modify the task details.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmUpdate}>
                            Update
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
