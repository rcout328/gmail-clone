import React from 'react';
import './Sendmail.css';
import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import firebase from 'firebase/compat/app';
import { db } from './firebase';
// initialize the db


function Sendmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formdata1) => {
    console.log(formdata1);

    // Add email data to the Firestore database
    db.collection('emails').add({
      to: formdata1.to,
      subject: formdata1.subject,
      message: formdata1.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Fix typo in serverTimestamp()
    });

    // Close the SendMail component after sending the email
    dispatch(closeSendMessage());
  };

  return (
    <div className='sendmail'>
      <div className='sendmail-header'>
        <h3>New message</h3>
        <Close className='sendmail-close' onClick={() => dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('to', { required: true })} type='email' placeholder='To' />
        {errors.to && <p className='sendmail-error'>This field is required</p>}

        <input {...register('subject', { required: true })} type='text' placeholder='Subject' />
        {errors.subject && <p className='sendmail-error'>This field is required</p>}

        <input
          {...register('message', { required: true })}
          type='text'
          placeholder='Message..'
          className='sendmail-message'
        />
        {errors.message && <p className='sendmail-error'>This field is required</p>}
        <div className='sendmail-option'>
          <Button className='sendmail-button' variant='contained' color='primary' type='submit'>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Sendmail;
