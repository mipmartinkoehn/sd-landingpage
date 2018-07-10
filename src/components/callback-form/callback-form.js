import React, { Component } from 'react';
import './callback-form.css';
import Form from '../form/forms.module';
import '../form/forms.css';

class CallbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = { formSend: false};
    }

    render() {
        return (
            <div className="contact">
                <Form form name="callback" method="POST" action="/contact-success" netlify >
                    <input type="hidden" name="form-name" value="callback" />
                    <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field"/>
                    </label>
                    </p>
                    <p>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                    </p>
                    <p>
                        <label htmlFor="firm">Firma</label>
                        <input type="text" name="firm" id="firm"/>
                    </p>
                    <p>
                        <label htmlFor="phone">Telefon*</label>
                        <input type="text" name="phone" id="phone" required/>
                        <label className="invalid-feedback" />
                    </p>
                    <p className="full-width">
                        <label htmlFor="message">Ihre Nachricht an uns</label>
                        <textarea name="message" id="message" rows="12" />
                        
                    </p>
                    <div data-netlify-recaptcha />
                    <p className="full-width">
                        <input type="submit" value="Rückruf Wunsch absenden" />
                    </p>
                </Form>
            </div>
        )
    }
}
export default CallbackForm;