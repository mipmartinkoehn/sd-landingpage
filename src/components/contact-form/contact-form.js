import React, { Component } from 'react';
import './contact-form.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { formSend: false};
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state
          })
        })
          .then(() => this.setState({formSend: true}))
          .catch(error => alert(error));
      };

    render() {

        if (!this.state.formSend) {
            return (
                <div className="contact">
                    <form name="contact"
                            method="post"
                            action="/thanks/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={this.handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                        <label>
                            Don’t fill this out:{" "}
                            <input name="bot-field" onChange={this.handleChange} />
                        </label>
                        </p>
                        <p>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={this.handleChange} />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" onChange={this.handleChange} />
                        </p>
                        <p>
                            <label htmlFor="firm">Firma</label>
                            <input type="text" name="firm" id="firm" onChange={this.handleChange} />
                        </p>
                        <p>
                            <label htmlFor="phone">Telefon</label>
                            <input type="text" name="phone" id="phone" onChange={this.handleChange}/>
                        </p>
                        <p className="full-width">
                            <label htmlFor="message">Ihre Nachricht an uns</label>
                            <textarea name="message" id="message" rows="12" onChange={this.handleChange} />
                        </p>
                        <p className="full-width">
                            <input type="submit" value="Nachricht absenden" />
                        </p>
                    </form>
                </div>
            )
        } else {
            return (
                <h3> Vielen Dank für ihre Anfrage</h3>
            )
        }
        
    }
}
export default ContactForm;