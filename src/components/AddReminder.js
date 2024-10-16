import React, { useState } from 'react';
import axios from 'axios';

const AddReminder = () => {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = 'YOUR_TELEGRAM_USER_ID'; // Replace with actual user ID

        try {
            await axios.post('http://localhost:5000/reminders', { userId, title, dueDate });
            // Reset the form
            setTitle('');
            setDueDate('');
        } catch (error) {
            console.error('Error adding reminder:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="text" placeholder="Reminder Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mb-2" />
            <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="border p-2 mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2">Add Reminder</button>
        </form>
    );
};

export default AddReminder;
