'use client';

import { PlusIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { initialTasks } from '@/constants/tasks';
import { GitHubLink } from './components/githubLink';
import { SearchBar } from './components/searchBar';
import { TabNavigation } from './components/tabNavigation';
import { TaskModal } from './components/taskModal';
import { TaskTable } from './components/taskTable';

export type Task = {
    id: string;
    name: string;
    labels: string[];
    status: 'Open' | 'In Progress' | 'Closed';
    created_at: string;
    updated_at: string;
    priority: 'Low' | 'Medium' | 'High';
    due_date?: string;
    assignee?: string;
    description?: string;
};

type SortOption = 'due_date' | 'priority' | 'assignee';

const TASKS_PER_PAGE = 10;

export default function TaskManagementApp() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [displayedTasks, setDisplayedTasks] = useState<Task[]>([]);
    const [activeTab, setActiveTab] = useState<
        'Open' | 'In Progress' | 'Closed'
    >('Open');
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('due_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        } else {
            setTasks(initialTasks);
            localStorage.setItem('tasks', JSON.stringify(initialTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const filterAndSortTasks = useCallback(() => {
        return tasks
            .filter(
                task =>
                    task.status === activeTab &&
                    (task.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                        task.assignee
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        task.labels.some(label =>
                            label
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        ))
            )
            .sort((a, b) => {
                if (sortBy === 'due_date') {
                    return sortOrder === 'asc'
                        ? new Date(a.due_date || '').getTime() -
                              new Date(b.due_date || '').getTime()
                        : new Date(b.due_date || '').getTime() -
                              new Date(a.due_date || '').getTime();
                } else if (sortBy === 'priority') {
                    const priorityOrder = { Low: 1, Medium: 2, High: 3 };
                    return sortOrder === 'asc'
                        ? priorityOrder[a.priority] - priorityOrder[b.priority]
                        : priorityOrder[b.priority] - priorityOrder[a.priority];
                } else {
                    return sortOrder === 'asc'
                        ? (a.assignee || '').localeCompare(b.assignee || '')
                        : (b.assignee || '').localeCompare(a.assignee || '');
                }
            });
    }, [tasks, activeTab, searchTerm, sortBy, sortOrder]);

    useEffect(() => {
        const filteredAndSortedTasks = filterAndSortTasks();
        setDisplayedTasks(filteredAndSortedTasks.slice(0, TASKS_PER_PAGE));
        setPage(1);
        setHasMore(filteredAndSortedTasks.length > TASKS_PER_PAGE);
    }, [tasks, activeTab, searchTerm, sortBy, sortOrder, filterAndSortTasks]);

    const loadMoreTasks = useCallback(() => {
        if (!isLoading && hasMore) {
            setIsLoading(true);
            setTimeout(() => {
                const filteredAndSortedTasks = filterAndSortTasks();
                const nextPage = page + 1;
                const newTasks = filteredAndSortedTasks.slice(
                    0,
                    nextPage * TASKS_PER_PAGE
                );
                setDisplayedTasks(newTasks);
                setPage(nextPage);
                setHasMore(newTasks.length < filteredAndSortedTasks.length);
                setIsLoading(false);
            }, 1000);
        }
    }, [page, filterAndSortTasks, hasMore, isLoading]);

    const handleTaskSelect = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    const handleCreateTask = () => {
        const newTask: Task = {
            id: uuidv4(),
            name: 'New Task',
            labels: [],
            status: 'Open',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            priority: 'Medium',
        };
        setTasks([...tasks, newTask]);
        setSelectedTask(newTask);
        setIsModalOpen(true);
        toast.success('New task created');
    };

    const handleUpdateTask = (updatedTask: Task) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
        setSelectedTask(null);
        setIsModalOpen(false);
        toast.success('Task updated successfully');
    };

    const handleDeleteTask = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        setSelectedTask(null);
        setIsModalOpen(false);
        toast.success('Task deleted successfully');
    };

    return (
        <div className='container mx-auto p-2 sm:p-4 max-w-7xl'>
            <Toaster position='top-center' />
            <div className='flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6'>
                <h1 className='text-2xl sm:text-3xl font-bold mb-2 sm:mb-0'>
                    Task Management
                </h1>
                <GitHubLink />
            </div>
            <div className='rounded-lg p-4 sm:p-6 mb-4 sm:mb-6'>
                <div className='flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6'>
                    <TabNavigation
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <Button onClick={handleCreateTask} className='mt-2 sm:mt-0'>
                        <PlusIcon className='mr-2 h-4 w-4' /> New Task
                    </Button>
                </div>
                <div className='flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0'>
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <div className='flex items-center space-x-2 mt-2 sm:mt-0'>
                        <Select
                            value={sortBy}
                            onValueChange={(value: SortOption) =>
                                setSortBy(value)
                            }
                        >
                            <SelectTrigger className='w-[140px] sm:w-[180px]'>
                                <SelectValue placeholder='Sort by' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='due_date'>
                                    Due Date
                                </SelectItem>
                                <SelectItem value='priority'>
                                    Priority
                                </SelectItem>
                                <SelectItem value='assignee'>
                                    Assignee
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Button
                            variant='outline'
                            onClick={() =>
                                setSortOrder(
                                    sortOrder === 'asc' ? 'desc' : 'asc'
                                )
                            }
                        >
                            {sortOrder === 'asc' ? '↑' : '↓'}
                        </Button>
                    </div>
                </div>
                <div className='border rounded-lg overflow-x-auto'>
                    <TaskTable
                        tasks={displayedTasks}
                        onTaskSelect={handleTaskSelect}
                        hasMore={hasMore}
                        loadMore={loadMoreTasks}
                        isLoading={isLoading}
                    />
                </div>
            </div>
            {isModalOpen && (
                <TaskModal
                    task={selectedTask}
                    onClose={handleCloseModal}
                    onUpdate={handleUpdateTask}
                    onDelete={handleDeleteTask}
                />
            )}
        </div>
    );
}
