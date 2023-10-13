import { ButtonLink } from './styles'

type Props = {
  title: string
  to?: string
  children: string
}

const Button = ({ title, to, children }: Props) => {
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
