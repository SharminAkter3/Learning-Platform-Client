import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

export const DataContext = createContext();

const Main = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Header></Header>
            <DataContext.Provider value={{ courses }}>
                <Outlet></Outlet>
            </DataContext.Provider>
        </div>
    );
};

export default Main;