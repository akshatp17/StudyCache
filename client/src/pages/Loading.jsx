import React from 'react';
import { StyledWrapper } from '../utils/LoadingStyle';

const Loading = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <StyledWrapper>
                <div className="loader">
                    <h1 className="loader-text">Fetching the StudentCache</h1>
                    <div className="jimu-primary-loading" />
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Loading;