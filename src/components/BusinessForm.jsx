import { useState } from "react";

export default function BusinessForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        phone: "",
        hours: "",
        description: "",
        badges: [],
        amenities: [],
    });

    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    const validatePhone = (phone) => {
        // Remove all non-digit characters and check if it has exactly 10 digits
        const digitsOnly = phone.replace(/\D/g, '');
        return digitsOnly.length === 10;
    };

    const validateField = (name, value) => {
        const requiredFields = ['name', 'category', 'location', 'phone', 'hours', 'description'];
        
        // Check if field is required and empty
        if (requiredFields.includes(name)) {
            if (!value || value.trim() === '') {
                setErrors(prev => ({ ...prev, [name]: 'This field is required' }));
                return false;
            }
        }

        // Validate phone number
        if (name === 'phone' && value) {
            if (!validatePhone(value)) {
                setErrors(prev => ({ ...prev, phone: 'Phone number must have exactly 10 digits, and no text' }));
                return false;
            }
        }

        // Clear error if field is valid
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
        return true;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error for this field when user starts typing (if it was a required field error)
        if (errors[name] && errors[name] === 'This field is required') {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }

        // Validate phone number in real-time
        if (name === 'phone' && value) {
            if (!validatePhone(value)) {
                setErrors(prev => ({ ...prev, phone: 'Phone number must have exactly 10 digits, and no text' }));
            } else {
                // Clear phone error if valid
                if (errors.phone) {
                    setErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.phone;
                        return newErrors;
                    });
                }
            }
        }
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
    };

    const handleCheckbox = (event) => {
        const { name, value, checked } = event.target;
        setFormData(prev => {
            const currentArray = Array.isArray(prev[name]) ? prev[name] : [];
            if (checked) {
                return { ...prev, [name]: [...currentArray, value] };
            } else {
                return { ...prev, [name]: currentArray.filter(item => item !== value) };
            }
        });
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['name', 'category', 'location', 'phone', 'hours', 'description'];
        
        // Check required fields
        requiredFields.forEach(field => {
            if (!formData[field] || formData[field].trim() === '') {
                newErrors[field] = 'This field is required';
            }
        });

        // Validate phone number
        if (formData.phone) {
            if (!validatePhone(formData.phone)) {
                newErrors.phone = 'Phone number must have exactly 10 digits';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return; // Don't submit if validation fails
        }

        if (onSubmit) onSubmit(formData);
        console.log("Submitting business:", formData);
        
        // Show success popup
        setShowSuccess(true);
        
        // Hide popup after 3 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    const getFieldClassName = (fieldName) => {
        return errors[fieldName] ? 'error' : '';
    };

    return (
        <section className="business-form-section">
            <div className="container">
                <div className="form-intro">
                    <h2>Create or Update Your Business Profile</h2>
                    <p>Fill out the form below to add your business to ThriveTogether. <strong>All fields marked with * are required.</strong></p>
                </div>

                {showSuccess && (
                    <div className="success-popup">
                        <div className="success-popup-content">
                            <span className="success-icon">✓</span>
                            <p>Saved!</p>
                        </div>
                    </div>
                )}

                <form className="business-profile-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Basic Information</legend>
                        <div className="form-group">
                            <label htmlFor="name">Business Name *</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your business name"
                            className={getFieldClassName('name')}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="category">Business Category *</label>
                            <select
                                id="category"
                                name="category"
                                required
                                value={formData.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getFieldClassName('category')}>
                                <option value="">Select a category</option>
                                <option value="Food & Dining">Food & Dining</option>
                                <option value="Retail">Retail</option>
                                <option value="Services">Services</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Health & Wellness">Health & Wellness</option>
                            </select>
                            {errors.category && <span className="error-message">{errors.category}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Address *</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="123 Main St, Seattle, WA"
                                className={getFieldClassName('location')}
                            />
                            {errors.location && <span className="error-message">{errors.location}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="(555) 555-5555"
                                className={getFieldClassName('phone')}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="hours">Business Hours *</label>
                            <input
                                type="text"
                                id="hours"
                                name="hours"
                                required
                                value={formData.hours}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Mon–Fri: 9am–5pm"
                                className={getFieldClassName('hours')}
                            />
                            {errors.hours && <span className="error-message">{errors.hours}</span>}
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Business Description</legend>
                        <div className="form-group">
                            <label htmlFor="description">Description *</label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                rows="4"
                                value={formData.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Describe what makes your business special"
                                className={getFieldClassName('description')}
                            />
                            {errors.description && <span className="error-message">{errors.description}</span>}
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Business Badges</legend>
                        <p>You can pick more than one:</p>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="badges"
                                    value="Women"
                                    checked={formData.badges.includes("Women")}
                                    onChange={handleCheckbox}
                                /> Women-owned
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="badges"
                                    value="Minority"
                                    checked={formData.badges.includes("Minority")}
                                    onChange={handleCheckbox}
                                /> Minority-owned
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="badges"
                                    value="LGBTQ+"
                                    checked={formData.badges.includes("LGBTQ+")}
                                    onChange={handleCheckbox}
                                /> LGBTQ+ owned
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="badges"
                                    value="Family"
                                    checked={formData.badges.includes("Family")}
                                    onChange={handleCheckbox}
                                /> Family-owned
                            </label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Amenities</legend>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="wheelchair"
                                    checked={formData.amenities.includes("wheelchair")}
                                    onChange={handleCheckbox}
                                /> Wheelchair Accessible
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="parking"
                                    checked={formData.amenities.includes("parking")}
                                    onChange={handleCheckbox}
                                /> Parking
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="delivery"
                                    checked={formData.amenities.includes("delivery")}
                                    onChange={handleCheckbox}
                                /> Delivery
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="dine in"
                                    checked={formData.amenities.includes("dine in")}
                                    onChange={handleCheckbox}
                                /> Dine In
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="takeout"
                                    checked={formData.amenities.includes("takeout")}
                                    onChange={handleCheckbox}
                                /> Takeout
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary">Save Business Profile</button>
                </form>
            </div>
        </section>
    );
}