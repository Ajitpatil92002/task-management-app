import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import React from 'react';

export const GitHubLink: React.FC = () => {
    return (
        <Button
            variant='outline'
            size='sm'
            className='hidden sm:flex'
            onClick={() =>
                window.open(
                    'https://github.com/Ajitpatil92002/task-management-app',
                    '_blank'
                )
            }
        >
            <Github className='mr-2 h-4 w-4' />
            View on GitHub
        </Button>
    );
};
