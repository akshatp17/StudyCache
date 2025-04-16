import React, { useState } from 'react';
import { X } from 'lucide-react'; // Optional: For close icon (you can remove if not using)

const Alert = ({ type = 'success', message, onClose }) => {
    const baseStyles = "flex items-center justify-between gap-4 px-4 py-3 rounded-lg shadow-md transition-all fixed top-18 z-50";
    const typeStyles = {
        success: "bg-green-100 text-green-800 border border-green-300",
        error: "bg-red-100 text-red-800 border border-red-300"
    };

    return (
        <div className={`${baseStyles} ${typeStyles[type]} w-1/2 mx-auto`}>
            <span className="text-sm font-medium">{message}</span>
            {onClose && (
                <button onClick={onClose} className="text-inherit hover:opacity-75">
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default Alert;
