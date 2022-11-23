import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
export const DataContext = React.createContext({});
export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // https://api.tvmaze.com/schedule/full
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`https://api.tvmaze.com/schedule/full`);
    //             console.log(response.data[0]);
    //             setData(response.data);
    //         } catch (error) {
    //             alert(error.message);
    //         }
    //     }
    //     fetchData();

    // }, [data, setData]);
    async function getDetails() {
        try {
            const response = await axios.get(`https://api.tvmaze.com/schedule/full`);
            console.log(response.data[0]);
            setData(response.data);
        } catch (error) {
            alert(error.message);
        }
    }
    const contextValue = {
        data, setData,getDetails
    };
    return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
