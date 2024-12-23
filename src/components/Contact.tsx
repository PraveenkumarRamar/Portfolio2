import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com'; // Import emailjs-com for email sending

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null); // Ref for form element

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    setNameError(name === ''); // Set errors based on empty fields
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) { // Ensure fields are not empty
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      emailjs.send('service_id', 'template_id', templateParams, 'api_key') // Your emailjs configuration
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send the message. Please try again.');
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail} // Attach the submit event handler
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
