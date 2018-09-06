import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import './contact-form.css'
import Recaptcha from 'react-google-recaptcha'
import '../form/forms.css'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    if (!this.state['g-recaptcha-response']) {
      alert('recaptcha nicht bestätigt')
      return
    }
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className="contact">
        <form
          name="contact"
          method="POST"
          action="/contact-success"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="firm">Firma</label>
            <input
              type="text"
              name="firm"
              id="firm"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="phone">Telefon</label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={this.handleChange}
            />
          </p>
          <p className="full-width">
            <label htmlFor="message">Ihre Nachricht an uns*</label>
            <textarea
              name="message"
              id="message"
              rows="12"
              required
              onChange={this.handleChange}
            />
          </p>
          <Recaptcha
            ref={"recaptcha"}
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <p className="full-width">
            <input type="submit" value="Nachricht absenden" />
          </p>
        </form>
      </div>
    )
  }
}
export default ContactForm
