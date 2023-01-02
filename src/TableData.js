import React from "react";
import './Header.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'





function TableData(props) {
    const navigate = useNavigate();
    return (<>
        <div className="tablediv">
            <h1></h1>
            <div>

                <Table striped bordered hover className="tableform">
                    <thead>
                        <tr>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE NUMBER</th>
                            <th>ADDRESS</th>
                            <th>ADDRESS</th>
                            <th>STATE</th>
                            <th>COUNTRY</th>
                            <th>ZIP CODE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.Data.map((item) => {
                            return (

                                <tr key={item.id}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phnnum}</td>
                                    <td>{item.address1}</td>
                                    <td>{item.address2}</td>
                                    <td>{item.state}</td>
                                    <td>{item.country}</td>
                                    <td>{item.zipcode}</td>

                                    <td><Button variant="primary" size="sm" onClick={() => {
                                        navigate('/edit')
                                        props.editRow(item)
                                    }}>Edit</Button>
                                        <Button variant="primary" size="sm" onClick={() => props.deleteuser(item.id)}>Delete</Button>
                                    </td>
                                </tr>


                            )
                        })}
                    </tbody>

                </Table>

            </div>

        </div>
    </>)
}
export default TableData;