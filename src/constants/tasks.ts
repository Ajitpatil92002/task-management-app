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
    {
        id: uuidv4(),
        name: 'Develop API for task management',
        labels: ['Backend', 'API'],
        status: 'Open',
        created_at: '2023-11-27T09:00:00.000Z',
        updated_at: '2023-11-27T09:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-30',
        assignee: 'Dave Lee',
        description: 'Create an API to manage tasks in the application.',
    },
    {
        id: uuidv4(),
        name: 'Implement email notifications',
        labels: ['Backend', 'Notifications'],
        status: 'In Progress',
        created_at: '2023-11-28T10:30:00.000Z',
        updated_at: '2023-11-28T10:30:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-05',
        assignee: 'Emma Davis',
        description: 'Set up email notifications for user activity.',
    },
    {
        id: uuidv4(),
        name: 'Write unit tests for task management',
        labels: ['Testing', 'Backend'],
        status: 'Closed',
        created_at: '2023-11-15T12:00:00.000Z',
        updated_at: '2023-11-20T15:00:00.000Z',
        priority: 'High',
        due_date: '2023-11-22',
        assignee: 'Fay Green',
        description:
            'Write unit tests to ensure reliability of task management APIs.',
    },
    {
        id: uuidv4(),
        name: 'Refactor frontend codebase',
        labels: ['Frontend', 'Code Quality'],
        status: 'Open',
        created_at: '2023-11-29T08:00:00.000Z',
        updated_at: '2023-11-29T08:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-10',
        assignee: 'Grace Lee',
        description: 'Refactor the frontend code for better maintainability.',
    },
    {
        id: uuidv4(),
        name: 'Improve mobile responsiveness',
        labels: ['Frontend', 'UI/UX'],
        status: 'In Progress',
        created_at: '2023-11-30T16:00:00.000Z',
        updated_at: '2023-11-30T16:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-12',
        assignee: 'Henry Wright',
        description: 'Enhance mobile responsiveness for all pages.',
    },
    {
        id: uuidv4(),
        name: 'Setup CI/CD pipeline',
        labels: ['DevOps', 'Automation'],
        status: 'Open',
        created_at: '2023-11-22T14:00:00.000Z',
        updated_at: '2023-11-22T14:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-18',
        assignee: 'Ivy King',
        description:
            'Configure automated CI/CD pipelines for smooth deployments.',
    },
    {
        id: uuidv4(),
        name: 'Conduct security audit',
        labels: ['Security', 'Analysis'],
        status: 'Open',
        created_at: '2023-11-24T15:00:00.000Z',
        updated_at: '2023-11-24T15:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-31',
        assignee: 'Jake Miles',
        description:
            'Perform a comprehensive security audit for the application.',
    },
    {
        id: uuidv4(),
        name: 'Design admin dashboard',
        labels: ['Frontend', 'UI/UX'],
        status: 'Open',
        created_at: '2023-11-30T12:00:00.000Z',
        updated_at: '2023-11-30T12:00:00.000Z',
        priority: 'High',
        due_date: '2024-01-15',
        assignee: 'Karen Hall',
        description: 'Design and build a dashboard for administrative tasks.',
    },
    {
        id: uuidv4(),
        name: 'Implement dark mode',
        labels: ['Frontend', 'UI/UX'],
        status: 'In Progress',
        created_at: '2023-11-21T08:00:00.000Z',
        updated_at: '2023-11-21T08:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-25',
        assignee: 'Liam White',
        description: 'Add dark mode feature to the application.',
    },
    {
        id: uuidv4(),
        name: 'Improve error handling',
        labels: ['Backend', 'Code Quality'],
        status: 'Open',
        created_at: '2023-11-23T11:30:00.000Z',
        updated_at: '2023-11-23T11:30:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-20',
        assignee: 'Mia Nelson',
        description: 'Standardize and improve error handling across APIs.',
    },
    {
        id: uuidv4(),
        name: 'Add user role management',
        labels: ['Backend', 'Security'],
        status: 'Open',
        created_at: '2023-11-25T14:00:00.000Z',
        updated_at: '2023-11-25T14:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-20',
        assignee: 'Nora Jones',
        description: 'Implement user role and permission management.',
    },
    {
        id: uuidv4(),
        name: 'Integrate payment gateway',
        labels: ['Backend', 'Integration'],
        status: 'Open',
        created_at: '2023-11-29T10:00:00.000Z',
        updated_at: '2023-11-29T10:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-20',
        assignee: 'Oliver Black',
        description: 'Add support for online payments via Stripe or PayPal.',
    },
    {
        id: uuidv4(),
        name: 'Implement live chat support',
        labels: ['Frontend', 'Integration'],
        status: 'Open',
        created_at: '2023-11-26T16:00:00.000Z',
        updated_at: '2023-11-26T16:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-15',
        assignee: 'Peter Brown',
        description: 'Add a live chat widget for customer support.',
    },
    {
        id: uuidv4(),
        name: 'Update API documentation',
        labels: ['Backend', 'Documentation'],
        status: 'In Progress',
        created_at: '2023-11-18T11:00:00.000Z',
        updated_at: '2023-11-28T12:30:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-10',
        assignee: 'Quinn Taylor',
        description: 'Ensure all API endpoints are documented and up to date.',
    },
    {
        id: uuidv4(),
        name: 'Create automated backup system',
        labels: ['DevOps', 'Security'],
        status: 'Open',
        created_at: '2023-11-15T08:30:00.000Z',
        updated_at: '2023-11-15T08:30:00.000Z',
        priority: 'High',
        due_date: '2023-12-20',
        assignee: 'Rachel Evans',
        description: 'Set up automated daily backups for critical data.',
    },
    {
        id: uuidv4(),
        name: 'Design a 404 error page',
        labels: ['Frontend', 'UI/UX'],
        status: 'Open',
        created_at: '2023-11-22T09:45:00.000Z',
        updated_at: '2023-11-22T09:45:00.000Z',
        priority: 'Low',
        due_date: '2023-12-10',
        assignee: 'Sam Martin',
        description:
            'Create a visually appealing and functional 404 error page.',
    },
    {
        id: uuidv4(),
        name: 'Implement two-factor authentication (2FA)',
        labels: ['Backend', 'Security'],
        status: 'Open',
        created_at: '2023-11-28T10:15:00.000Z',
        updated_at: '2023-11-28T10:15:00.000Z',
        priority: 'High',
        due_date: '2023-12-15',
        assignee: 'Tina Brown',
        description: 'Add 2FA support to enhance account security.',
    },
    {
        id: uuidv4(),
        name: 'Integrate social media login',
        labels: ['Backend', 'Integration'],
        status: 'Open',
        created_at: '2023-11-26T14:00:00.000Z',
        updated_at: '2023-11-26T14:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-20',
        assignee: 'Uma Patel',
        description:
            'Allow users to sign up/login using social media accounts.',
    },
    {
        id: uuidv4(),
        name: 'Redesign email templates',
        labels: ['Frontend', 'UI/UX'],
        status: 'In Progress',
        created_at: '2023-11-29T12:30:00.000Z',
        updated_at: '2023-11-29T12:30:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-18',
        assignee: 'Victor Yang',
        description: 'Update email templates to match the new branding style.',
    },
    {
        id: uuidv4(),
        name: 'Implement multi-language support',
        labels: ['Backend', 'Frontend'],
        status: 'Open',
        created_at: '2023-11-30T09:00:00.000Z',
        updated_at: '2023-11-30T09:00:00.000Z',
        priority: 'High',
        due_date: '2024-01-15',
        assignee: 'Wendy Clark',
        description:
            'Add support for multiple languages across the application.',
    },
    {
        id: uuidv4(),
        name: 'Analyze website traffic',
        labels: ['Analytics', 'Backend'],
        status: 'Open',
        created_at: '2023-11-25T13:00:00.000Z',
        updated_at: '2023-11-25T13:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-05',
        assignee: 'Xavier Brown',
        description:
            'Gather insights from website traffic using Google Analytics.',
    },
    {
        id: uuidv4(),
        name: 'Create marketing email campaign',
        labels: ['Marketing', 'Content'],
        status: 'Open',
        created_at: '2023-11-28T14:15:00.000Z',
        updated_at: '2023-11-28T14:15:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-12',
        assignee: 'Yasmine Ali',
        description: 'Develop and schedule a holiday marketing email campaign.',
    },
    {
        id: uuidv4(),
        name: 'Add pagination to user lists',
        labels: ['Backend', 'Frontend'],
        status: 'In Progress',
        created_at: '2023-11-22T15:00:00.000Z',
        updated_at: '2023-11-22T15:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-15',
        assignee: 'Zane West',
        description: 'Improve user list performance by adding pagination.',
    },
    {
        id: uuidv4(),
        name: 'Set up A/B testing framework',
        labels: ['Analytics', 'Backend'],
        status: 'Open',
        created_at: '2023-11-19T12:00:00.000Z',
        updated_at: '2023-11-19T12:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-10',
        assignee: 'Alex Green',
        description: 'Integrate an A/B testing framework to evaluate features.',
    },
    {
        id: uuidv4(),
        name: 'Update privacy policy',
        labels: ['Legal', 'Content'],
        status: 'Open',
        created_at: '2023-11-21T10:00:00.000Z',
        updated_at: '2023-11-21T10:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-05',
        assignee: 'Bella Martin',
        description: 'Revise the privacy policy document to comply with GDPR.',
    },
    {
        id: uuidv4(),
        name: 'Optimize CSS and assets',
        labels: ['Frontend', 'Performance'],
        status: 'In Progress',
        created_at: '2023-11-27T11:00:00.000Z',
        updated_at: '2023-11-27T11:00:00.000Z',
        priority: 'Medium',
        due_date: '2023-12-08',
        assignee: 'Chris Wong',
        description: 'Minimize CSS and static assets for faster page loads.',
    },
    {
        id: uuidv4(),
        name: 'Host webinar for product launch',
        labels: ['Marketing', 'Events'],
        status: 'Open',
        created_at: '2023-11-25T08:00:00.000Z',
        updated_at: '2023-11-25T08:00:00.000Z',
        priority: 'High',
        due_date: '2023-12-15',
        assignee: 'Dana Park',
        description: 'Plan and conduct a webinar to introduce the new product.',
    },
    {
        id: uuidv4(),
        name: 'Add tooltips to form fields',
        labels: ['Frontend', 'UI/UX'],
        status: 'Open',
        created_at: '2023-11-29T16:00:00.000Z',
        updated_at: '2023-11-29T16:00:00.000Z',
        priority: 'Low',
        due_date: '2023-12-20',
        assignee: 'Elliot Moore',
        description:
            'Enhance user experience by adding helpful tooltips to forms.',
    },
];
