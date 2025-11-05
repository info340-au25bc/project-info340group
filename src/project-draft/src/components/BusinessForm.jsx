export default function BusinessForm() {
    return (
        <section class="business-form-section">
            <div class="container">
                <div class="form-intro">
                    <h2>Create or Update Your Business Profile</h2>
                    <p>Fill out the form below to add your business to ThriveTogether. <strong>All fields marked with * are required.</strong></p>
                </div>

                <form class="business-profile-form">
                    <fieldset>
                        <legend>Basic Information</legend>
                        <div class="form-group">
                            <label htmlFor="business-name">Business Name *</label>
                            <input type="text" id="business-name" name="business-name" required placeholder="Enter your business name"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}