import React from 'react';
import { motion } from 'framer-motion';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

const UserDemograophicsChart = () => {
  return (
    <motion.div>
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>User Demographics</h2>
      <div style={{ width:"100%", height: 300 }}>
        <ResponsiveContainer>
           <PieChart>
            <Pie
              data={userDemographicsData}
              cx='50%'
              cy="50%"
              outerRadius={100}
              fill='#8884d8'
              dataKey='value'
              label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
            >
              { userDemographicsData.map((entry, index)=>(
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor:"rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }} 
              itemStyle={{ color: "#E5E7EB"}}
            />
            <Legend/>
           </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserDemograophicsChart