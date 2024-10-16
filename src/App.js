import React from 'react';
import AddReminder from './components/AddReminder';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Telegram Reminder App</h1>
            <AddReminder />
        </div>
    );
};

export default App;
