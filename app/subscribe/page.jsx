'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Validation from '../../utils/subscribeValidation.jsx';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/dist/server/api-utils/index.js';

export default function SubscribePage() {

    const router = useRouter();

    const [values, setValues] = React.useState({
        fname: '',
        lname: '',
        gender: '',
        email: '',
        category: ''
    });
    
    const [errors, setErrors] = React.useState({});
    const [buttonDisabled, setButonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
      if(values.fname.length > 0 && values.lname.length > 0 && values.gender.length > 0 && values.email.length > 0 && values.category.length > 0) {
        setButonDisabled(false);
      } else {
        setButonDisabled(true);
      }
    }, [values]);
    

    const handleSubmit = async(e) => {

        e.preventDefault();
        setErrors(Validation(values));

        if(errors.fname === "" && errors.lname === "" && errors.gender === "" && errors.email === "" && errors.category === "") {
            try {
                setLoading(true);
                const res = await fetch('/api/member', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });
                const respo = await res.json();
                router.push('/');

            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        }

    };

    return (
        <div className='flex justify-center font-serif items-center h-screen bg-gray-200'>
            <div className='p-3 bg-white rounded w-80'>
                <form action='' onSubmit={handleSubmit}>
                    <div className='text-xl flex justify-center items-center'>
                    <h1>REGISTER AS A MEMBER</h1>

                    </div>
                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='fname' placeholder='First Name' 
                        onChange={(e) => setValues({...values, fname:e.target.value})}/>
                        {errors.fname && <span className='text-red-600'>{errors.fname}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='lname' placeholder='Second Name' 
                        onChange={(e) => setValues({...values, lname:e.target.value})}/>
                        {errors.lname && <span className='text-red-600'>{errors.lname}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='text' name='gender' placeholder='Gender' 
                        onChange={(e) => setValues({...values, gender:e.target.value})}/>
                        {errors.gender && <span className='text-red-600'>{errors.gender}</span>}
                    </div>

                    <div className='mb-3 mt-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2' type='email' name='email' placeholder='Email' 
                        onChange={(e) => setValues({...values, email:e.target.value})}/>
                        {errors.email && <span className='text-red-600'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <input className='w-full border-2 border-neutral-200 p-2 my-2'  type='text' name='category' placeholder='(e.g Player, Sponsor, other specify...)' 
                        onChange={(e) => setValues({...values, category:e.target.value})}/>
                        {errors.category && <span className='text-red-600'>{errors.category}</span>}
                    </div>
                    <div>
                        <h2 className='text-center font-sans text-gray-600'>{loading ? 'Registering, please wait....' : ''}</h2>
                    </div>

                    <div>
                        <h1 className='text-center text-gray-800'>Note: Please register ONCE.</h1>
                        <h2 className='text-center font-sans text-gray-600'>{loading ? '' : '(After registering, check your inbox, you will be notified through email. )'}</h2>
                    </div>

                    <button type='submit' className='w-full bg-brightRed text-white hover:bg-red-500 rounded-lg border-2 my-2 py-2'>{buttonDisabled ? 'Please Enter Details' : 'Register'}</button>
                </form>
            </div>
        </div>
    )
}