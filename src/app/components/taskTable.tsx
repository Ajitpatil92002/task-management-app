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
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead className="w-[100px]">Priority</TableHead>
                        <TableHead className="w-[150px]">Labels</TableHead>
                        <TableHead className="w-[120px]">Due Date</TableHead>
                        <TableHead className="w-[120px]">Assignee</TableHead>
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
                            <TableCell className="font-medium">{task.name}</TableCell>
                            <TableCell>
                                <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}>
                                    {task.priority}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-1">
                                    {task.labels.map(label => (
                                        <Badge key={label} variant="outline">
                                            {label}
                                        </Badge>
                                    ))}
                                </div>
                            </TableCell>
                            <TableCell>{task.due_date || 'N/A'}</TableCell>
                            <TableCell>{task.assignee || 'Unassigned'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
