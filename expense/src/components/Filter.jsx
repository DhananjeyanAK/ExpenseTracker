import React from 'react';

const Filter = ({ filteredExpenses }) => {
    const years = Array.from({ length: 100 }, (_, index) => 2024 - index);

    return (
        <div className="filter mb-4 flex justify-between">
        <p className="text-white expense-title font-normal md:font-extrabold text-2xl">Filter by year</p>
            <select id="year-select">
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default Filter;