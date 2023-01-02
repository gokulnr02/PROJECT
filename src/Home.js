import React from 'react';
import './Home.css'
export default function Home() {

    return (
        <>

            <div className='homecomponent1'>
                <div>
                    <h1 className='homecomponent2'>CRUD OPERATION</h1>
                    <p>Row editing makes it possible to create a full-featured CRUD <strong>(Create, Read, Update, Delete)</strong> component similar to those found in enterprise applications.
                        In the following demo, the typical ways to start and stop editing are all disabled.
                        Instead, use the buttons available in each row or in the toolbar.</p>
                </div>
                <div>
                    <h2>FORM VALIDATION</h2>
                    <p>
                        Before submitting data to the server, it is important to ensure all required form controls are filled out,
                        in the correct format.This is called client-side form validation,
                        and helps ensure data submitted matches the requirements set forth in the various form controls
                    </p>
                </div>
            </div>
        </>
    )
}

