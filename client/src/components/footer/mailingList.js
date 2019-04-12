import React from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

import theme from "../../theme"

const MailingList = props => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Your email address"
          />
        </FormGroup>
        <Button style={{ background: theme.cyan }}>Submit</Button>
      </Form>
    </>
  )
}

export default MailingList
