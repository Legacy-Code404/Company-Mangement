import './add-task.css';
import Title from '../../components/Title/Title';
import React from 'react';

const AddTask = () => {
    return (
        <div className="add-task add-page">
            <Title text="Add Task" />
                <form className="add-form">
                    <div className="form-inputs">
                        <div className="form-input">
                        <i className="uil uil-text"></i>
                            <input type="text"  placeholder="Task Title" />
                        </div>
                        <div className="form-input">
                        <i className="uil uil-text"></i>
                            <input type="details"  placeholder="Task Description" />
                        </div>
                        <div className="form-input">
                        <i className="uil uil-user-plus"></i>
                            <input type="text"  placeholder="Assigned To" />
                        </div>
                        <div className="form-input">
                        <i className="uil uil-calender"></i>
                            <input type="text"  placeholder="Start Date" />
                        </div>
                        <div className="form-input">
                        <i className="uil uil-calender"></i>
                            <input type="text"  placeholder="End Date" />
                        </div>
                    </div>
                        <button type="submit">
                            <i className="uil uil-sign-out-alt"></i>
                            <span>Save</span>
                        </button>
                </form>
                <div className='table_component'>
                    <table>
                        <thead>
                            <tr>
                                <th>Task Title</th>
                                <th>Assigned To</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Task 1</td>
                                <td>Member 1</td>
                                <td>10/3/2022</td>
                                <td>15/3/2022</td>
                                <td><i class="uil uil-check-circle"></i></td>
                            </tr>
                            <tr>
                                <td>Task 2</td>
                                <td>Assigned To</td>
                                <td>12/3/2022</td>
                                <td>14/3/2022</td>
                                <td><i class="uil uil-check-circle"></i></td>
                            </tr>
                            <tr>
                                <td>Task 3</td>
                                <td>Assigned To</td>
                                <td>20/3/2022</td>
                                <td>25/3/2022</td>
                                <td><i class="uil uil-clock"></i></td>
                            </tr>
                            <tr>
                                <td>Task 4</td>
                                <td>Assigned To</td>
                                <td>24/3/2022</td>
                                <td>26/3/2022</td>
                                <td><i class="uil uil-clock"></i></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{height:"80px"}}></div>
        </div>
    )
}

export default AddTask