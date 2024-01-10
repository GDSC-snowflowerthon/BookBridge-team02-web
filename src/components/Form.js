import React from 'react'
import styled from 'styled-components'

const Form = ({ formItem }) => {
const { id, label, inputValue, onChange, onfocus, onblur } = formItem

return (
    <FormBox>
    <Label htmlFor={id}>{label}</Label>
    <Input
        type='text'
        id={id}
        value={inputValue}
        onChange={onChange}
        onFocus={onfocus}
        onBlur={onblur}
    />
    </FormBox>
)
}

const FormBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 300px;
height: 100px;
margin: 0 auto 50px auto;
`

const Label = styled.label``

const Input = styled.input`
display: inline-block;
width: 200px;
height: 50px;
border: 1px solid lightgray;
text-align: center;
padding: auto;
&:focus {
    outline: 3px solid tomato;
}
`

export default Form