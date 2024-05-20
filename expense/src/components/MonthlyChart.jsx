import React from 'react';
import { BarChart, Bar, XAxis,YAxis, ResponsiveContainer, Tooltip } from 'recharts';


const MonthlyChart = ({data}) => {

//axis
const renderCustomAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y + 10} dy={10} textAnchor="middle" fill="black">
      {payload.value}
    </text>
  );
};

  return (
<div className= 'chart mx-auto p-8 rounded-lg shadow-lg w-full max-w-6xl mx-4 mb-4'style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barCategoryGap="20%">
        <XAxis dataKey="name" tick={renderCustomAxisTick} axisLine={false} tickLine={false} />
        <Bar dataKey="uv" fill="#4a148c" stackId="stack" barSize={30} shape={<rect rx={10} ry={10} stroke="black"/>} />
      </BarChart>
    </ResponsiveContainer>
</div>
  );
};

export default MonthlyChart;