import React from 'react';

const NotFound: React.FC = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">{'404 - Not Found'}</h1>
                <p className="text-gray-600 mt-2">{'Sorry, the page you are looking for does not exist.'}</p>
                {/* You can add more content or styling as needed */}
            </div>
        </div>
    );
};

export default NotFound;