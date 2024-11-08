import { Input } from '@/components/ui/input';
import React from 'react';

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <div className='w-full max-w-sm'>
            <Input
                type='text'
                placeholder='Search tasks...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    );
};
