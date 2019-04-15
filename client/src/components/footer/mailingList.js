import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

import theme from "../../theme"

export default class MailingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
    }
  }

  _handleSubmit = async e => {
    e.preventDefault()
    const response = await addToMailchimp(this.state.email, this.state)
    console.log(response)
    this.setState({ result: response.result, message: response.msg })
  }

  _handleChange = ({ target: { type, name, checked, value } }) => {
    //const newValue = type === "checkbox" ? checked : value
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={this._handleSubmit}>
          <FormGroup>
            <Label for="mc-email">Email</Label>
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
            <Label for="mc-firstname">First Name</Label>
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
            <Label for="mc-lastname">Last Name</Label>
            <Input
              type="text"
              name="LNAME"
              id="mc-lastname"
              placeholder="Your last name"
              value={this.state.LNAME}
              onChange={this._handleChange}
            />
          </FormGroup>
          <div class="content__gdpr">
            <label>Marketing Permissions</label>
            <p>
              Please select all the ways you would like to hear from Yalla
              Cooperative:
            </p>
            <fieldset
              class="mc_fieldset gdprRequired mc-field-group"
              name="interestgroup_field"
            >
              <label class="checkbox subfield" htmlFor="gdpr_20951">
                <input
                  type="checkbox"
                  id="gdpr_20951"
                  name="gdpr[20951]"
                  value="Y"
                  class="av-checkbox gdpr"
                  onChange={this._handleChange}
                />
                <span>Email Newsletter</span>{" "}
              </label>
              <label class="checkbox subfield" htmlFor="gdpr_20975">
                <input
                  type="checkbox"
                  id="gdpr_20975"
                  name="gdpr[20975]"
                  value="Y"
                  class="av-checkbox gdpr"
                  onChange={this._handleChange}
                />
                <span>Information and updates about events</span>
              </label>
            </fieldset>
            <p>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              visit our website.
            </p>
          </div>
          <div class="content__gdprLegal">
            <p>
              We use Mailchimp as our marketing platform. By clicking below to
              subscribe, you acknowledge that your information will be
              transferred to Mailchimp for processing.
              <a href="https://mailchimp.com/legal/">
                Learn more about Mailchimp's privacy practices here.
              </a>
            </p>
          </div>
          <Button style={{ background: theme.cyan }}>Submit</Button>
        </Form>
      </>
    )
  }
}
