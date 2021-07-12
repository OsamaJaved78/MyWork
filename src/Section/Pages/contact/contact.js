import React from 'react'
import emailjs from 'emailjs-com';
import './contact.css';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import swal from 'sweetalert2';
import { AnimatePresence,motion } from "framer-motion";

const Contact = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(`service_62cbey8`, "template_hndqsg6",
                 e.target, "user_aPBYMDCBiHpIZ4W0FsTc0")
            .then((result) => {
                console.log(result.text);
                swal.fire(
                    'Message Sent',
                    'Gene will get back to you as soon as he can!',
                    'success'
                )
            }, (error) => {
                console.log(error.text);
                swal.fire(
                    'Message Error',
                    error.text,
                    'error'
                )
            });
        e.target.reset()
    }


    return (
        <section className="section" id="reservation">
            
        <motion.div className="container"
        initial={{opacity: 0}}
		animate={{opacity:1}}
		exit={{opacity: 0 }}
        >
                <div className="col-lg-6 align-self-center">
                    <div className="left-text-content">
                        <div className="section-heading">
                            <h1 >Contact Us</h1>
                            <h2>We'd love to hear from you</h2>
                        </div>
                        <p>Feel free to gave us your Feedback.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="phone">
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                    <h4>Phone Numbers</h4>
                                    <span><a href="#">+090078601</a><br/><a href="#">+9230221546</a></span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="message">
                                    <i className="fa fa-envelope"></i>
                                    <h4>Emails</h4>
                                    <span><a href="#">Buskaroo@gmail.com</a><br/><a href="#">Buskaroo@gmail.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-form">
                        
                          <div className='contact-row'>
        <div className='contact-form-card'>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    type="email"
                    name='user_email'
                    placeholder='Type your email here...'
                    required
                    icon='mail'
                    iconPosition="left"

                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Type your name here...'
                    required
                    icon='user circle'
                    iconPosition="left"

                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Type your message here...'
                    required
                />
                <Button
                    label='Send Message'
                    icon='send'
                    color='green'
                />
            </Form>
        </div>
                          </div>
                    </div>
                </div>
        </motion.div>
    </section>
    )
}


export default Contact;