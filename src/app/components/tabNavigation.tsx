import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

type TabNavigationProps = {
    activeTab: 'Open' | 'In Progress' | 'Closed';
    setActiveTab: (tab: 'Open' | 'In Progress' | 'Closed') => void;
};

export const TabNavigation: React.FC<TabNavigationProps> = ({
    activeTab,
    setActiveTab,
}) => {
    return (
        <Tabs
            value={activeTab}
            onValueChange={value =>
                setActiveTab(value as 'Open' | 'In Progress' | 'Closed')
            }
        >
            <TabsList>
                <TabsTrigger value='Open'>Open</TabsTrigger>
                <TabsTrigger value='In Progress'>In Progress</TabsTrigger>
                <TabsTrigger value='Closed'>Closed</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};
