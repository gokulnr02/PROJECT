import React, { useState } from 'react';
import './App.css';
import Form1 from "./Form";
import TableData from './TableData';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import EditUser from './EdituserForm';


function App() {

  const InitialData = [
    { id: 1, firstName: "gokul", lastName: "NR", email: "gokulnr02@gmail.com", phnnum: 6382837062, address1: 'kolathur', address2: 'mettur', state: 'tamil nadu', country: 'india' ,zipcode:636303},
    { id: 2, firstName: "gokul", lastName: "ramanan", email: "gokulramanan123@gmail.com", phnnum: 9080427619, address1: 'chinna mettur', address2: 'mettur', state: 'salem', country: 'india',zipcode:630303 },
    { id: 3, firstName: "gokul", lastName: "raj", email: "gokulraj@gmail.com", phnnum: 9080908090, address1: 'velur', address2: '', state: 'tamil nadu', country: 'inida' ,zipcode:630303 }]

  const [FormData, setFormData] = useState(InitialData);


  const adduser = (user) => {
    user.id = FormData.length + 1;
    setFormData([...FormData, user])
  }

  const deleteuser = (id) => {
    setFormData(FormData.filter((val) => val.id !== id))
  }


  const [editing, setEditing] = useState(false);

  const InitialState = { id: null, firstName: '', lastName: '', email: '', phnnum: null, address1: '', address2: '', state: '', country: '' ,zipcode:null}
  const [current, setCurrent] = useState(InitialState);

  const editRow = (user) => {
    setEditing(true);
    setCurrent({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, phnnum: user.phnnum, address1: user.address1, address2: user.address2, state: user.state, country: user.country,zipcode:user.zipcode })
  }

  const updateUser = (id, upadatedUser) => {
    setEditing(false);
    setFormData(FormData.map((user) => (user.id === id ? upadatedUser : user)))


  }
  return (
    <div className="App">

      <div className='RouteApp'>
        <Router>
          <div className='navdiv'>
            <span className='titletag'>CRUD OPERATION</span>
            <Link className='link' to='/home'>HOME </Link>
            <Link className='link' to='/form'>FORM</Link>
            <Link className='link' to='/table'>LIST  </Link>
            
          </div>
          <Routes>
            <Route path="/form" element={<Form1 adduser={adduser} />} />
            <Route path='/edit' element={<EditUser setEditing={setEditing} current={current} updateUser={updateUser} />} />
            <Route path="/table" element={<TableData Data={FormData} deleteuser={deleteuser} editRow={editRow} />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
