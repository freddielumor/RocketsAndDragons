import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PageTitle } from '../PageTitle/PageTitle'
import { getDragonItemData } from '../../redux/actions/dragonItemActions'
import {
  dragonItemSelector,
  dragonItemStageSelector,
} from '../../redux/selectors'
import { CardStatus, CardType } from '../Card/index.styles'
import {
  Divider,
  Text,
  FlexContainer,
  AnchorLink,
  LoadingSpinner,
} from '../Shared/index.styled'
import loadingImage from '../../images/loading.svg'

interface IDragonParams {
  id: string
  path?: string
}

const DragonItem: React.FC = () => {
  let { id } = useParams<IDragonParams>()
  const dispatch = useDispatch()
  const stage = useSelector(dragonItemStageSelector)
  const dragonItemData = useSelector(dragonItemSelector)

  React.useEffect(() => {
    dispatch(getDragonItemData(id))
  }, [])

  const {
    name,
    description,
    launch_payload_mass = {},
    crew_capacity,
    active,
    type,
    height_w_trunk = {},
    dry_mass_kg,
    orbit_duration_yr,
    first_flight,
    wikipedia,
    diameter = {},
  } = dragonItemData

  const firstFlightDate = new Date(first_flight)

  if (stage === 'pending')
    return <LoadingSpinner src={loadingImage} alt="Loading" />

  return (
    <section className="rockets__item">
      <PageTitle>{name}</PageTitle>

      <Divider width={50} />

      <Text align={'center'} margin={'3rem auto 1.5rem'}>
        {description}
      </Text>

      <Text align={'center'} margin={'0'}>
        {' '}
        <AnchorLink href={wikipedia}>Learn More</AnchorLink>
      </Text>

      <Divider width={50} />

      <FlexContainer>
        <CardType type={type} />
        <Text>First Flight: {firstFlightDate.toDateString()}</Text>
        <CardStatus active={active} />

        <Text>Crew capacity: {crew_capacity}</Text>
        <Text>Height: {height_w_trunk.feet} feet</Text>
        <Text>Mass: {dry_mass_kg} KG</Text>

        <Text>Orbit duration: {orbit_duration_yr} years</Text>
        <Text>Diameter: {diameter.meters} meters</Text>
        <Text>launch payload mass: {launch_payload_mass.kg}KG</Text>
      </FlexContainer>
    </section>
  )
}

export default DragonItem
