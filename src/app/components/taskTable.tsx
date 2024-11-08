import React, { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Task } from '../page';

type TaskTableProps = {
    tasks: Task[];
    onTaskSelect: (task: Task) => void;
};

export const TaskTable: React.FC<TaskTableProps> = ({
    tasks,
    onTaskSelect,
}) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowDown') {
                setSelectedIndex(prevIndex =>
                    prevIndex === null || prevIndex === tasks.length - 1
                        ? 0
                        : prevIndex + 1
                );
            } else if (event.key === 'ArrowUp') {
                setSelectedIndex(prevIndex =>
                    prevIndex === null || prevIndex === 0
                        ? tasks.length - 1
                        : prevIndex - 1
                );
            } else if (event.key === 'Enter' && selectedIndex !== null) {
                onTaskSelect(tasks[selectedIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [tasks, selectedIndex, onTaskSelect]);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Labels</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Assignee</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task, index) => (
                    <TableRow
                        key={task.id}
                        className={`cursor-pointer ${index === selectedIndex ? 'bg-muted' : ''
                            }`}
                        onClick={() => onTaskSelect(task)}
                    >
                        <TableCell>{task.name}</TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    task.priority === 'High'
                                        ? 'destructive'
                                        : task.priority === 'Medium'
                                            ? 'default'
                                            : 'secondary'
                                }
                            >
                                {task.priority}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            {task.labels.map(label => (
                                <Badge
                                    key={label}
                                    variant='outline'
                                    className='mr-1'
                                >
                                    {label}
                                </Badge>
                            ))}
                        </TableCell>
                        <TableCell>{task.due_date || 'N/A'}</TableCell>
                        <TableCell>{task.assignee || 'Unassigned'}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
