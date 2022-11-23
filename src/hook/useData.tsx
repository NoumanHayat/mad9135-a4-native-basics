import React, { useCallback, useContext, useEffect, useState } from 'react';
export const DataContext = React.createContext({});
export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [test, setTest] = useState([
        {
            title: "Todays's Exercise",
            sub_title: "You've to complete whole set twice",
            type: 'header',
            data: [
                {
                    title: 'Biginner',
                    type: 'header_item'
                },
                {
                    title: '10 minutes',
                    type: 'header_item'
                },
                {
                    title: '8 Exercises',
                    type: 'header_item'
                }
            ]
        },
        {
            title: 'Exercise Activity',
            type: 'exercises',
        }
    ]);
    const contextValue = {
        test, setTest
    };
    return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
