export default function Intro() {
    return (
        <section className="intro">
            <h2>Welcome to ThriveTogether</h2>
            <p>We are building a stronger community by helping customers connect with local businesses. Start by telling us who you are:</p>
            
            <div className="quiz-form">
                <form>
                    <fieldset>
                        <legend>Are you a customer or a business owner?</legend>
                        <label>
                            <input type="radio" name="userType" value="customer" required />
                            I am a customer looking for local businesses
                        </label><br />
                        <label>
                            <input type="radio" name="userType" value="business" required />
                            I am a business owner wanting to showcase my shop
                        </label><br />
                        <button type="submit">Continue</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

