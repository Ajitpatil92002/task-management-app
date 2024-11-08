import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import React, { useState } from 'react';
import { Task } from '../page';

type TaskTableProps = {
    tasks: Task[];
};

export const TaskTable: React.FC<TaskTableProps> = ({ tasks }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
                        className={`cursor-pointer ${
                            index === selectedIndex ? 'bg-muted' : ''
                        }`}
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
