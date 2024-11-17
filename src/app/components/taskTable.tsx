import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Task } from '../page';

type TaskTableProps = {
    tasks: Task[];
    onTaskSelect: (task: Task) => void;
    hasMore: boolean;
    loadMore: () => void;
    isLoading: boolean;
};

export const TaskTable: React.FC<TaskTableProps> = ({
    tasks,
    onTaskSelect,
    hasMore,
    loadMore,
    isLoading,
}) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
        null
    );
    const tableRef = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const lastTaskElementRef = useCallback(
        (node: HTMLTableRowElement | null) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    loadMore();
                }
            });
            if (node) observer.current.observe(node);
        },
        [hasMore, loadMore]
    );

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            // Only handle events when the table container or its children are focused
            if (!tableRef.current?.contains(document.activeElement)) {
                return;
            }

            // Prevent default behavior and event propagation
            event.preventDefault();
            event.stopPropagation();

            if (!selectedCell && tasks.length > 0) {
                setSelectedCell([0, 0]);
                setSelectedIndex(0);
                return;
            }

            if (!selectedCell) return;

            const [rowIndex, cellIndex] = selectedCell;
            let newRowIndex = rowIndex;
            let newCellIndex = cellIndex;

            switch (event.key) {
                case 'ArrowUp':
                    newRowIndex = Math.max(0, rowIndex - 1);
                    break;
                case 'ArrowDown':
                    newRowIndex = Math.min(tasks.length - 1, rowIndex + 1);
                    break;
                case 'ArrowLeft':
                    newCellIndex = Math.max(0, cellIndex - 1);
                    break;
                case 'ArrowRight':
                    newCellIndex = Math.min(4, cellIndex + 1);
                    break;
                case 'Enter':
                    if (tasks[rowIndex]) {
                        onTaskSelect(tasks[rowIndex]);
                    }
                    return;
                default:
                    return;
            }

            setSelectedCell([newRowIndex, newCellIndex]);
            setSelectedIndex(newRowIndex);

            // Scroll the selected cell into view
            const newSelectedCell = tableRef.current?.querySelector(
                `tr:nth-child(${newRowIndex + 1}) td:nth-child(${
                    newCellIndex + 1
                })`
            );
            newSelectedCell?.scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
            });
        },
        [selectedCell, tasks, onTaskSelect]
    );

    // Focus the table container when clicking anywhere inside it
    const handleTableClick = useCallback(() => {
        tableRef.current?.focus();
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown, true); // Use capture phase
        return () => window.removeEventListener('keydown', handleKeyDown, true);
    }, [handleKeyDown]);

    const handleCellClick = (rowIndex: number, cellIndex: number) => {
        setSelectedCell([rowIndex, cellIndex]);
        setSelectedIndex(rowIndex);
        tableRef.current?.focus();
    };

    return (
        <div
            ref={tableRef}
            className='overflow-x-auto focus:outline-none focus:ring-2 focus:ring-primary rounded-lg'
            onClick={handleTableClick}
            tabIndex={0} // Make the container focusable
            role='grid'
            aria-label='Tasks table'
        >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[200px]'>Name</TableHead>
                        <TableHead className='w-[100px]'>Priority</TableHead>
                        <TableHead className='w-[150px]'>Labels</TableHead>
                        <TableHead className='w-[120px]'>Due Date</TableHead>
                        <TableHead className='w-[120px]'>Assignee</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks.map((task, rowIndex) => (
                        <TableRow
                            key={task.id}
                            ref={
                                rowIndex === tasks.length - 1
                                    ? lastTaskElementRef
                                    : null
                            }
                        >
                            {[
                                task.name,
                                <Badge
                                    key={`priority-${task.id}`}
                                    variant={
                                        task.priority === 'High'
                                            ? 'destructive'
                                            : task.priority === 'Medium'
                                            ? 'default'
                                            : 'secondary'
                                    }
                                >
                                    {task.priority}
                                </Badge>,
                                <div
                                    key={`labels-${task.id}`}
                                    className='flex flex-wrap gap-1'
                                >
                                    {task.labels.map(label => (
                                        <Badge key={label} variant='outline'>
                                            {label}
                                        </Badge>
                                    ))}
                                </div>,
                                task.due_date || 'N/A',
                                task.assignee || 'Unassigned',
                            ].map((cellContent, cellIndex) => (
                                <TableCell
                                    key={`${task.id}-${cellIndex}`}
                                    className={`cursor-pointer ${
                                        rowIndex === selectedCell?.[0] &&
                                        cellIndex === selectedCell?.[1]
                                            ? 'bg-muted'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        handleCellClick(rowIndex, cellIndex)
                                    }
                                    role='gridcell'
                                >
                                    {cellContent}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    {isLoading && (
                        <TableRow>
                            <TableCell colSpan={5} className='text-center py-4'>
                                <div className='flex justify-center items-center'>
                                    <svg
                                        className='animate-spin h-5 w-5 mr-3 text-primary'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                    >
                                        <circle
                                            className='opacity-25'
                                            cx='12'
                                            cy='12'
                                            r='10'
                                            stroke='currentColor'
                                            strokeWidth='4'
                                        ></circle>
                                        <path
                                            className='opacity-75'
                                            fill='currentColor'
                                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                        ></path>
                                    </svg>
                                    Loading more tasks...
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};
