import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleContinue = () => {
        if (selectedOption === 'customer') {
            navigate('/customer');
        } else if (selectedOption === 'business') {
            navigate('/business');
        }
    };

    return (
        <section className="intro">
            <h2>Welcome to ThriveTogether</h2>
            <p>We are building a stronger community by helping customers connect with local businesses. Start by telling us who you are:</p>
            
            <div className="quiz-form">
                <div className="quiz-options">
                    <h3 className="quiz-question">Are you a customer or a business owner?</h3>
                    {/* https://stackoverflow.com/questions/68555716/how-to-access-data-attribute-in-button-click-event-in-react-js */}
                    <button 
                        className="quiz-option"
                        data-selected={selectedOption === 'customer'}
                        type="button" 
                        onClick={() => setSelectedOption('customer')}
                    >
                        I am a customer looking for local businesses
                    </button>
                    <button 
                        className="quiz-option"
                        data-selected={selectedOption === 'business'}
                        type="button" 
                        onClick={() => setSelectedOption('business')}
                    >
                        I am a business owner wanting to showcase my shop
                    </button>
                    <button 
                        className="continue-btn" 
                        type="button" 
                        onClick={handleContinue}
                        disabled={selectedOption === ''}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </section>
    );
}

