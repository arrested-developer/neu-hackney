import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { FormP as P, FormMessage } from "./footer.styles"

import theme from "../../theme"

export default class MailingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      message: { show: false, type: "", text: "" },
    }
  }

  _handleSubmit = async e => {
    e.preventDefault()
    this.setState({ message: { show: true, type: "info", text: "Loading..." } })
    if (this.state["gdpr[20951]"] === "Y" || this.state["gdpr[20975"] === "Y") {
      const response = await addToMailchimp(this.state.email, this.state)
      this.setState({
        message: {
          show: true,
          type: response.result,
          text: response.msg,
        },
      })
    } else {
      this.setState({
        message: {
          show: true,
          type: "error",
          text:
            "Please select at least one way that you would like to be contacted",
        },
      })
    }
  }

  _handleChange = ({ target: { name, type, checked, value } }) => {
    const newValue = type === "checkbox" ? (checked ? value : false) : value
    this.setState({
      [name]: newValue,
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={this._handleSubmit}>
          <FormGroup>
            <Label for="mc-email" style={{ marginBottom: "0.25em" }}>
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="mc-email"
              placeholder="Your email address"
              value={this.state.email}
              onChange={this._handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="mc-firstname" style={{ marginBottom: "0.25em" }}>
              First Name
            </Label>
            <Input
              type="text"
              name="FNAME"
              id="mc-firstname"
              placeholder="Your first name"
              value={this.state.FNAME}
              onChange={this._handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="mc-lastname" style={{ marginBottom: "0.25em" }}>
              Last Name
            </Label>
            <Input
              type="text"
              name="LNAME"
              id="mc-lastname"
              placeholder="Your last name"
              value={this.state.LNAME}
              onChange={this._handleChange}
            />
          </FormGroup>
          <P>
            <Label style={{ marginBottom: "0.25em" }}>
              Please select all the ways you would like to hear from NEU
              Hackney:
            </Label>
            <FormGroup check>
              <Label check style={{ lineHeight: "1.8em" }}>
                <Input
                  type="checkbox"
                  id="gdpr_20951"
                  name="gdpr[20951]"
                  value="Y"
                  class="av-checkbox gdpr"
                  onChange={this._handleChange}
                />{" "}
                Email Newsletter
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check style={{ lineHeight: "1.8em" }}>
                <Input
                  type="checkbox"
                  id="gdpr_20975"
                  name="gdpr[20975]"
                  value="Y"
                  class="av-checkbox gdpr"
                  onChange={this._handleChange}
                />{" "}
                Information about events
              </Label>
            </FormGroup>
          </P>
          <P>
            You can unsubscribe at any time by clicking the link in the footer
            of our emails. For any other privacy requests, please contact us by
            email and we will be happy to help.
          </P>
          <P>
            We use Mailchimp as our marketing platform. By clicking below to
            subscribe, you acknowledge that your information will be transferred
            to Mailchimp for processing.
          </P>
          <P>
            <a href="https://mailchimp.com/legal/">
              Learn more about Mailchimp's privacy practices here.
            </a>
          </P>
          <Button style={{ background: theme.cyan }}>Submit</Button>
          {this.state.message.show ? (
            <FormMessage type={this.state.message.type}>
              {this.state.message.text}
            </FormMessage>
          ) : null}
        </Form>
      </>
    )
  }
}
