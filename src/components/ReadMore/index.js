// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isReadMore, setIsReadMore] = useState(false)

  const onClickButton = () => {
    setIsReadMore(prevState => !prevState)
  }

  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  console.log(isReadMore)

  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          alt="react hooks"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore
