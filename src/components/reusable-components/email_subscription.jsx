import React, { Component } from "react";
import emailjs from "@emailjs/browser";

class EmailSubscription extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = [React.createRef()]; // only one input ref for email

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY); // Initialize EmailJS with your public key
  }

  doSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if the input field has a value
    const emailValue = this.inputRefs[0].current.value;
    if (emailValue) {
      this.handleSubmit(emailValue); // Proceed with submitting the form
    }
  };

  handleSubmit = async (email) => {
    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;

    try {
      this.setState({ loading: true });

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        from_email: email, // Send the email address in the template
      });

      // Clear the input field after successful submission
      this.inputRefs[0].current.value = '';
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="emailsubscription" id="emailsubscription">
          <form onSubmit={this.doSubmit}>
            <input
              ref={this.inputRefs[0]} // Referencing the first input (email)
              type="email"
              className="email"
              placeholder="name@mail.com"
              name="email"
              size="30"
              required
            />
            <button
              className={`${loading ? 'loading' : ''}`}
              disabled={loading}
              type="submit" // Ensure the button submits the form
            >
              {loading ? '' : ''}
            </button>
          </form>
      </div>
    );
  }
}

export default EmailSubscription;
