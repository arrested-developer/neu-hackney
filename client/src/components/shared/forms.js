import styled from "styled-components"

import {
  Form as _Form,
  FormGroup as _FormGroup,
  Label as _Label,
  Input as _Input,
  Alert,
} from "reactstrap"

import { Button as _Button } from "./linksAndButtons"

export const Button = _Button

export const Form = styled(_Form)``

export const FormGroup = styled(_FormGroup)``

export const Label = styled(_Label)``

export const Input = styled(_Input)``

export const FormMessage = styled(Alert).attrs({
  role: "alert",
  "aria-live": "assertive",
})`
  margin-top: ${({ theme }) => theme.m};
`
