import React from 'react';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-full"
            />
        </div>
    );
};
