import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../../components/Alert';

const UploadForm = () => {
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [pdfURL, setPdfURL] = useState(null);

    const handleSendRequest = (data) => {
        try {
            console.log(data); // Simulate successful submission
            setAlert({ show: true, type: 'success', message: 'Submitted successfully!' });
            resetForm();
        } catch (err) {
            setAlert({ show: true, type: 'error', message: 'Error in submission. Please try again.' });
        }

        // Optional: Auto close after 3 seconds
        setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
        }, 3000);
    };


    const handlePdfChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
            const url = URL.createObjectURL(file);
            setPdfURL(url);
        } else {
            setPdfURL(null);
        }
    };

    const resetForm = () => {
        setPdfURL(null);
        document.getElementById("uploadForm").reset();  // Reset the form fields
    };

    const radioStyles = "peer hidden";
    const labelStyles = "cursor-pointer px-2 py-1 border rounded-full text-sm font-medium transition-colors duration-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500 hover:bg-blue-100";

    return (
        <div className="flex justify-center items-center py-5 px-5 bg-[#f6faff]">
            {alert.show && (
                <Alert type={alert.type} message={alert.message} onClose={() => setAlert({ show: false })} />
            )}

            <form
                method="post"
                onSubmit={handleSubmit(handleSendRequest)}
                id='uploadForm'
                className="flex flex-col gap-6 bg-white shadow-xl rounded-xl p-8 w-full max-w-lg"
            >
                <h1 className="text-3xl font-bold text-center text-[#1266ed]">Upload a Resource</h1>

                {/* Title */}
                <div className="flex flex-col gap-1">
                    <label className="text-gray-700 font-semibold">Title:</label>
                    <input
                        type="text"
                        {...register("title", { required: true })}
                        placeholder="Title of the resource"
                        className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && <p className="text-red-500 text-sm">Title is required.</p>}
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                    <label className="text-gray-700 font-semibold">Description:</label>
                    <input
                        type="text"
                        {...register("description", { required: true })}
                        placeholder="Description of the resource"
                        className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.description && <p className="text-red-500 text-sm">Description is required.</p>}
                </div>

                {/* Category */}
                <div>
                    <p className="text-gray-700 font-semibold mb-2">Category:</p>
                    <div className="flex flex-wrap gap-3">
                        {["Notes", "Question Banks", "Question Banks Solution"].map((category, i) => (
                            <div key={category} className="relative">
                                <input
                                    type="radio"
                                    id={`category-${i}`}
                                    value={category}
                                    {...register("category", { required: true })}
                                    className={radioStyles}
                                />
                                <label htmlFor={`category-${i}`} className={labelStyles}>
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                    {errors.category && <p className="text-red-500 text-sm mt-1">Please select a category.</p>}
                </div>

                {/* Semester */}
                <div>
                    <p className="text-gray-700 font-semibold mb-2">Semester:</p>
                    <div className="flex flex-wrap gap-2">
                        {["1", "2", "3", "4", "5", "6", "7", "8"].map((sem, i) => (
                            <div key={sem} className="relative">
                                <input
                                    type="radio"
                                    id={`semester-${i}`}
                                    value={sem}
                                    {...register("semester", { required: true })}
                                    className={radioStyles}
                                />
                                <label htmlFor={`semester-${i}`} className={labelStyles}>
                                    {sem}
                                </label>
                            </div>
                        ))}
                    </div>
                    {errors.semester && <p className="text-red-500 text-sm mt-1">Please select a semester.</p>}
                </div>

                {/* Course */}
                <div>
                    <p className="text-gray-700 font-semibold mb-2">Course:</p>
                    <div className="flex flex-wrap gap-2">
                        {["CSE Core", "ISE", "CS(CY)", "CS(BS)", "CSD", "CS(DS)", "CS(IOT)"].map((course, i) => (
                            <div key={course} className="relative">
                                <input
                                    type="radio"
                                    id={`course-${i}`}
                                    value={course}
                                    {...register("course", { required: true })}
                                    className={radioStyles}
                                />
                                <label htmlFor={`course-${i}`} className={labelStyles}>
                                    {course}
                                </label>
                            </div>
                        ))}
                    </div>
                    {errors.course && <p className="text-red-500 text-sm mt-1">Please select a course.</p>}
                </div>

                {/* File Upload */}
                <div className="flex flex-col gap-1">
                    <label className="text-gray-700 font-semibold">Upload PDF:</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        {...register("file", { required: true, validate: (value) => value[0]?.type === "application/pdf" })}
                        onChange={handlePdfChange}
                        className="file:border file:border-gray-300 file:rounded-lg file:px-4 file:py-2 file:text-sm file:cursor-pointer text-gray-600"
                    />
                    {errors.file && <p className="text-red-500 text-sm">Please upload a PDF file.</p>}

                    {/* PDF Preview */}
                    {pdfURL && (
                        <iframe
                            src={pdfURL}
                            title="PDF Preview"
                            className="mt-3 w-full h-64 border rounded-lg"
                        />
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Submit Upload
                </button>
            </form>
        </div>
    );
};

export default UploadForm;
