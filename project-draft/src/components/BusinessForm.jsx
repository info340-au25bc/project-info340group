import { useState } from "react";

export default function BusinessForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        phone: "",
        hours: "",
        description: "",
        badges: "",
        amenities: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (event) => {
        const { name, value, checked } = event.target;
        setFormData(prev => {
            const updated = new Set(prev[name]);
            if (checked) updated.add(value);
            else updated.delete(value);
            return { ...prev, [name]: Array.from(updated) };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit) onSubmit(formData);
        console.log("Submitting business:", formData);
    };

    return (
        <section className="business-form-section">
            <div className="container">
                <div className="form-intro">
                    <h2>Create or Update Your Business Profile</h2>
                    <p>Fill out the form below to add your business to ThriveTogether. <strong>All fields marked with * are required.</strong></p>
                </div>

                <form className="business-profile-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Basic Information</legend>
                        <div className="form-group">
                            <label htmlFor="name">Business Name *</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required value ={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your business name"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="category">Business Category *</label>
                            <select
                                id="category"
                                name="category"
                                required
                                value={formData.category}
                                onChange={handleChange}>
                                <option value="">Select a category</option>
                                <option value="Food">Food & Dining</option>
                                <option value="Retail">Retail & Shops</option>
                                <option value="Services">Services</option>
                                <option value="Wellness">Wellness</option>
                            </select>
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
                                placeholder="123 Main St, Seattle, WA"
                            />
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
                                placeholder="(555) 555-5555"
                            />
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
                                placeholder="Mon–Fri: 9am–5pm"
                            />
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
                                placeholder="Describe what makes your business special"
                            />
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
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Amenities</legend>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="Wheelchair Accessible"
                                    checked={formData.amenities.includes("Wheelchair Accessible")}
                                    onChange={handleCheckbox}
                                /> Wheelchair Accessible
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="Parking"
                                    checked={formData.amenities.includes("Parking")}
                                    onChange={handleCheckbox}
                                /> Parking
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value="Delivery"
                                    checked={formData.amenities.includes("Delivery")}
                                    onChange={handleCheckbox}
                                /> Delivery
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary">Save Business Profile</button>
                </form>
            </div>
        </section>
    );
}