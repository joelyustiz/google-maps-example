import styled from 'styled-components'

export const Button = styled.input`
  background: #F1404B;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 98%;
  margin: 0 auto;  
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`
