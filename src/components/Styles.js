import styled from 'styled-components'


export const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const ContentStyles = styled.div`
  flex-grow: 8;
  background-color: #F5F5F5;
  text-align: center;
  padding: 20px 50px;
`

export const HeaderStyles = styled.div`
  flex-grow: 1;
`

export const FooterStyles = styled.div`
  flex-grow: 1;
`

export const FlexboxStyles = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  width: ${props => props.width};
  align-items: ${props => props.alignItems};
`

export const InputStyles = styled.input`
  margin: ${props => props.margin};
`

export const ButtonStyles = styled.button`
  margin: ${props => props.margin}
`

export const ContainerStyles = styled.div`
  margin: ${props => props.margin}
`