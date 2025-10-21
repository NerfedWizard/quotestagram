import React, { useState } from 'react';
import './../Guestbook.css';
import './../App.css';
import { useNavigate } from "react-router-dom";


function Guestbook() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Replace with your API endpoint
            const response = await fetch('/api/guestbookData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting message:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
     const handleHome = (e) => {
        navigate("/");
    }
    return (
        <div>
        <nav className="columns" 
        style={{justifyContent:"flex-end"}}>
        <button className="custom-button" onClick={handleHome}>
        <ion-icon class="heartPulse" name="heart-outline">
        </ion-icon>
         Homepage 
         <ion-icon class="heartPulse" name="heart-outline">
         </ion-icon>
         </button>
         </nav>
            <div className="guestbook-container">
            <div className="made-by">
                <h1>Guest Book</h1>
                <p>Leave a message and let me know you were here!</p>
            </div>

            <form className="guestbook-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Don't get too excited none of this works yet!"
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        required
                        disabled={isSubmitting}
                        placeholder="Share your thoughts or just say hello..."
                    />
                </div>

                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Sign Guest Book'}
                </button>

                {submitStatus === 'success' && (
                    <div className="status-message success">
                        Thank you for signing the guest book!
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="status-message error">
                        Something went wrong. Please try again.
                    </div>
                )}
            </form>
            </div>
        </div>
    );
}
export default Guestbook;