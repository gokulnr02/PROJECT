import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsPersonFill, BsFillEnvelopeFill, BsTelephoneFill, BsHouseFill } from "react-icons/bs";
import './Form.css';
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Form1(props) {

  const navigate = useNavigate();
  const InitialData = { id: null, firstName: '', lastName: '', email: '', phnnum: null, address1: '', address2: '', state: '', country: '', zipcode: '' }

  const [getData, setgetda] = useState(InitialData);

  console.log(getData);

  const handleChange = (e) => {
    const { name, value } = e.target
    setgetda({ ...getData, [name]: value })
  }


  const [countrie, setCountrie] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(res => setCountrie(res))
    // .then(res => console.log(res));
  }, []);


  return (<>

    <div className='FormDiv'>

      <div className='FormDiv1'>

        <form name='form1' className='form1' onSubmit={
          event => {
            event.preventDefault();
            if (!getData.firstName || !getData.lastName || !getData.email || !getData.phnnum || !getData.address1) return;
            props.adduser(getData);
            setgetda(InitialData);
            navigate("/table");
          }
        }>

          <h3>REGISTRATION FORM</h3>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm"><BsPersonFill /></InputGroup.Text>
            <Form.Control
              name='firstName'
              onChange={handleChange}
              value={getData.firstName}
              minLength={5}
              required
              placeholder='First Name'

            />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm"><BsPersonFill /></InputGroup.Text>
            <Form.Control
              name='lastName'
              onChange={handleChange}
              value={getData.lastName}
              placeholder='Last Name'
              minLength={5}
              required
            />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm"><BsFillEnvelopeFill /></InputGroup.Text>
            <Form.Control
              type='email'
              name='email'
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              onChange={handleChange}
              value={getData.email}
              placeholder='email'
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm"><BsTelephoneFill /></InputGroup.Text>
            <Form.Control
              type='number'
              name='phnnum'
              placeholder='Phone Num'
              pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/"
              onChange={handleChange}
              value={getData.phnnum}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm"><BsHouseFill /></InputGroup.Text>
            <Form.Control
              name='address1'
              onChange={handleChange}
              value={getData.address1}
              placeholder='Address'
              required
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm"><BsHouseFill /></InputGroup.Text>
            <Form.Control
              name='address2'
              onChange={handleChange}
              value={getData.address2}
              placeholder='Address'
            />
          </InputGroup>
          <Form.Select
            name='state'
            onChange={handleChange}
            value={getData.state}
            className="mb-3">
            <option>choose your state</option>
            <option value="Tamil nadu">TamilNadu</option>
            <option value="karnataka">karnataka</option>
            <option value="kerala">kerala</option>
          </Form.Select>

          <Form.Select className="mb-3"
            name='country'
            onChange={handleChange}
            value={getData.country}>
            <option>choose your country</option>
            {/* <option>{countrie}</option> */}
            {countrie.map((item) => <option value={item.name}>{item.name}</option>)}
          </Form.Select>

          <InputGroup className="mb-3">
            <Form.Control
              type='number'
              name='zipcode'
              placeholder='Zip code'
              onChange={handleChange}
              value={getData.zipcode}
            />
          </InputGroup>

          <Button type='submit' >
            Submit
          </Button>

        </form>

      </div>


    </div>
  </>)

}
export default Form1;