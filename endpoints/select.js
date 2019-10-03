import React from 'react'

//Role, Department, Designation, Category, Batch, ClassI/C, ExamType, Class, Year
export default function Select(id='none',name='none',required='false'){
    return(
        <select id={id} name={name} required={required} className="custom-select">
            <option value="rabbit">Rabbit</option>
            <option value="rabbit1">Rabbit</option>
            <option value="rabbit2">Rabbit</option>
            <option value="rabbit3">Rabbit</option>
            <option value="rabbit4">Rabbit</option>
        </select>
    )
}