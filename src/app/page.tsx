'use client';

import { PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/ui/button';
import { TabNavigation } from './components/tabNavigation';
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

const initialTasks: Task[] = [
    {
        id: uuidv4(),
        name: 'Implement user authentication',
        labels: ['Backend', 'Security'],
        status: 'Open',
        created_at: '2023-11-22T13:10:13.649Z',
        updated_at: '2023-11-22T13:10:13.649Z',
        priority: 'High',
        due_date: '2023-12-15',
        assignee: 'John Doe',
        description:
            'Set up JWT-based authentication system for the application.',
    },
    {
        id: uuidv4(),
        name: 'Design landing page',
        labels: ['Frontend', 'UI/UX'],
        status: 'In Progress',
        created_at: '2023-11-23T09:15:00.000Z',
        updated_at: '2023-11-23T09:15:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-10',
        assignee: 'Jane Smith',
        description: 'Create a responsive and engaging landing page design.',
    },
    {
        id: uuidv4(),
        name: 'Optimize database queries',
        labels: ['Backend', 'Performance'],
        status: 'Closed',
        created_at: '2023-11-20T11:30:00.000Z',
        updated_at: '2023-11-24T16:45:00.000Z',
        priority: 'High',
        due_date: '2023-11-30',
        assignee: 'Bob Johnson',
        description:
            'Improve database query performance for faster page loads.',
    },
    {
        id: uuidv4(),
        name: 'Implement file upload feature',
        labels: ['Backend', 'Frontend'],
        status: 'Open',
        created_at: '2023-11-25T10:00:00.000Z',
        updated_at: '2023-11-25T10:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-20',
        assignee: 'Alice Williams',
        description: 'Add the ability for users to upload and manage files.',
    },
    {
        id: uuidv4(),
        name: 'Create user dashboard',
        labels: ['Frontend', 'UI/UX'],
        status: 'In Progress',
        created_at: '2023-11-26T14:30:00.000Z',
        updated_at: '2023-11-26T14:30:00.000Z',
        priority: 'High',
        due_date: '2023-12-25',
        assignee: 'Charlie Brown',
        description: 'Design and implement a comprehensive user dashboard.',
    },
];

export default function TaskManagementApp() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [activeTab, setActiveTab] = useState<
        'Open' | 'In Progress' | 'Closed'
    >('Open');

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

    return (
        <div className='container mx-auto p-4 max-w-7xl'>
            <h1 className='text-3xl font-bold mb-6'>Task Management</h1>
            <div className='flex justify-between items-center mb-6'>
                <TabNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <Button>
                    <PlusIcon className='mr-2 h-4 w-4' /> New Task
                </Button>
            </div>
            <TaskTable tasks={tasks} />
        </div>
    );
}
