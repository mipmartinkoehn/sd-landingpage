import React, { Component } from 'react';
import './callback-form.css';
import Form from '../form/forms.module';
import '../form/forms.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


class CallbackForm extends Component {
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
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, firm, email, phone, message } = this.state;
        return (
            <div className="contact">
                <Form name="callback" method="POST" action="/contact-success" submit={this.handleSubmit} netlify >
                    <input type="hidden" name="form-name" value="callback" />
                    <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field"/>
                    </label>
                    </p>
                    <p>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={email} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="firm">Firma</label>
                        <input type="text" name="firm" id="firm" value={firm} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="phone">Telefon*</label>
                        <input type="text" name="phone" id="phone" required value={phone} onChange={this.handleChange}/>
                        <label className="invalid-feedback" />
                    </p>
                    <p className="full-width">
                        <label htmlFor="message">Ihre Nachricht an uns</label>
                        <textarea name="message" id="message" rows="12" value={message} onChange={this.handleChange} />
                        
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