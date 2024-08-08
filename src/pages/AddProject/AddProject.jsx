import React from 'react';
import './add-project.css' ;
import Title from "../../components/Title/Title";

const AddProject = () => {
    return (
        <div className='add-project add-page'>
            <Title text={"Add Project"} />
            <form className="add-form">
                <div className="form-inputs">
                    <div className="form-input">
                        <i className="uil uil-text"></i>
                        <input type="text" placeholder="Project Name" />
                    </div>
                <div className='dates'>
                    <div className="form-input">
                        <i class="uil uil-calender"></i>
                        <input type="calendar" placeholder="Start Date" />
                    </div>
                    <div className="form-input">
                        <i class="uil uil-calender"></i>
                        <input type="calendar" placeholder="End Date" />
                    </div>
                </div>
                    <div className="form-input">
                        <i className="uil uil-bitcoin-circle"></i>
                        <input type="text" placeholder="Budget" />
                    </div>
                    <div className="form-input">
                        <i className="uil uil-user-plus"></i>
                        <input type="text" placeholder="Add Members" />
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
            <th>ID</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Budget</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>01</td>
                <td>Project 1</td>
                <td>10/2/2022</td>
                <td>10/3/2022</td>
                <td>$100</td>
                <td>5</td>
            </tr>
            <tr>
                <td>02</td>
                <td>Project 2</td>
                <td>27/4/2023</td>
                <td>1/6/2023</td>
                <td>$75</td>
                <td>3</td>
            </tr>
            <tr>
                <td>03</td>
                <td>Project 3</td>
                <td>12/5/2023</td>
                <td>15/9/2023</td>
                <td>$250</td>
                <td>6</td>
            </tr>
            <tr>
                <td>04</td>
                <td>Project 4</td>
                <td>25/9/2023</td>
                <td>10/1/2024</td>
                <td>$500</td>
                <td>8</td>
            </tr>
          </tbody>
          </table>
          </div>
          <div style={{height:"80px"}}></div>
        </div>
    )
}

export default AddProject

