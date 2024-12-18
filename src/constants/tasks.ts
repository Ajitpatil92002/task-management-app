import { v4 as uuidv4 } from 'uuid';

import { Task } from '@/app/page';

export const initialTasks: Task[] = [
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
];
