import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import './contact-form.css';
import Form from '../form/forms.module';
import '../form/forms.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { formSend: false, name: "", email: "", message: "", phone: "", firm: "" };
    }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => navigateTo('/contact-success'))
          .catch(error => console.log(error));
  
        e.preventDefault();
      };
  
    handleChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        return (
            <div className="contact">
                <Form name="contact" method="POST" action="/contact-success" submit={this.handleSubmit} netlify >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field"/>
                    </label>
                    </p>
                    <p>
                        <label htmlFor="name">Name*</label>
                        <input type="text" name="name" id="name" required/>
                        <label className="invalid-feedback" />
                    </p>
                    <p>
                        <label htmlFor="email">Email*</label>
                        <input type="text" name="email" id="email" required/>
                        <label className="invalid-feedback" />
                    </p>
                    <p>
                        <label htmlFor="firm">Firma</label>
                        <input type="text" name="firm" id="firm"/>
                    </p>
                    <p>
                        <label htmlFor="phone">Telefon</label>
                        <input type="text" name="phone" id="phone"/>
                    </p>
                    <p className="full-width">
                        <label htmlFor="message">Ihre Nachricht an uns*</label>
                        <textarea name="message" id="message" rows="12" required/>
                        <label className="invalid-feedback" />
                    </p>
                    <div netlify-recaptcha></div>
                    <p className="full-width">
                        <input type="submit" value="Nachricht absenden" />
                    </p>
                </Form>
            </div>
        )
    }
}
export default ContactForm;