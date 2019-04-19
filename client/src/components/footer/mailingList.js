import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Form, FormGroup, Label, Input, FormMessage } from "../shared/forms"
import { P } from "../shared/text"
import { ExternalLink, Button } from "../shared/linksAndButtons"

import theme from "../../theme"

export default props => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailConsent, setEmailConsent] = useState(false)
  const [eventsConsent, setEventsConsent] = useState(false)
  const [message, setMessage] = useState({ show: false, type: "", text: "" })

  const handleSubmit = async e => {
    e.preventDefault()
    setMessage({ show: true, type: "info", text: "Loading..." })
    if (emailConsent || eventsConsent) {
      try {
        const response = await addToMailchimp(email, {
          FNAME: firstName,
          LNAME: lastName,
          "gdpr[20951]": emailConsent ? "Y" : null,
          "gdpr[20975]": eventsConsent ? "Y" : null,
        })
        setMessage({ show: true, type: response.result, text: response.msg })
      } catch {
        setMessage({
          show: true,
          type: "error",
          text: "There was an error when processing your request",
        })
      }
    } else {
      setMessage({
        show: true,
        type: "error",
        text:
          "Please select at least one way that you would like to be contacted",
      })
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} {...props}>
        <FormGroup>
          <Label for="mc-email" style={{ marginBottom: "0.25em" }}>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="mc-email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <div>
          <Label style={{ marginBottom: "0.25em" }}>
            Please select all the ways you would like to hear from NEU Hackney:
          </Label>
          <FormGroup check>
            <Label check style={{ lineHeight: "1.8em" }}>
              <Input
                type="checkbox"
                id="gdpr_20951"
                name="gdpr[20951]"
                value="Y"
                className="av-checkbox gdpr"
                onChange={e => setEmailConsent(e.target.checked ? true : false)}
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
                className="av-checkbox gdpr"
                onChange={e =>
                  setEventsConsent(e.target.checked ? true : false)
                }
              />{" "}
              Information about events
            </Label>
          </FormGroup>
        </div>
        <P small>
          You can unsubscribe at any time by clicking the link in the footer of
          our emails. For any other privacy requests, please contact us by email
          and we will be happy to help.
        </P>
        <P small secondary>
          We use Mailchimp as our marketing platform. By clicking subscribe, you
          acknowledge that your information will be transferred to Mailchimp for
          processing.
          <ExternalLink href="https://mailchimp.com/legal/">
            Learn more about Mailchimp's privacy practices here.
          </ExternalLink>
        </P>
        <Button style={{ background: theme.cyan }}>Submit</Button>
        {message.show ? (
          <FormMessage
            color={
              message.type === "error"
                ? "danger"
                : message.type === "success"
                ? "success"
                : "info"
            }
          >
            {message.text}
          </FormMessage>
        ) : null}
      </Form>
    </>
  )
}
