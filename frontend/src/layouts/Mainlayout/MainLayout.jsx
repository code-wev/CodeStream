import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-gray-200'>
            <Outlet/>
        </div>
    );
};

export default MainLayout;