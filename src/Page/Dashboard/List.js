import { Button, Grid } from '@mui/material';
import React from 'react'
import { style }  from "./Style"

function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr  style={style.th}>
                
                        <th style={style.th}>No.</th>
                     
                        <th style={style.th}>First Name</th>
                     
                        <th style={style.th}>Last Name</th>
                      
                        <th style={style.th}>Email</th>
                       
                        <th style={style.th}>Salary</th>
                     
                        <th style={style.th}>Date</th>
                     
                                
                     
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
            
                                <td>{i + 1}</td>
                                <td style={style.th}>{employee.firstName}</td>
                                <td style={style.th}>{employee.lastName}</td>
                                <td style={style.th}>{employee.email}</td>
                                <td style={style.th}>{formatter.format(employee.salary)}</td>
                                <td style={style.th}>{employee.date} </td>
                            
                              
                                <td className="text-right">
                              
                                    <Button variant="contained" color="secondary" size="small"
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </Button>
                                </td>
                                <td className="text-left">
                                    <Button variant="contained" color="secondary" size="small"
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List