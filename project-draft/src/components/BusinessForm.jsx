export default function BusinessForm() {
    return (
        <section className="business-form-section">
            <div className="container">
                <div className="form-intro">
                    <h2>Create or Update Your Business Profile</h2>
                    <p>Fill out the form below to add your business to ThriveTogether. <strong>All fields marked with * are required.</strong></p>
                </div>

                <form className="business-profile-form">
                    <fieldset>
                        <legend>Basic Information</legend>
                        <div className="form-group">
                            <label htmlFor="business-name">Business Name *</label>
                            <input type="text" id="business-name" name="business-name" required placeholder="Enter your business name"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}