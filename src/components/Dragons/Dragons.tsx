import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageTitle } from '../PageTitle/PageTitle'
import {
  dragonsDataSelector,
  dragonsDataStageSelector,
} from '../../redux/selectors'
import { getDragonsData } from '../../redux/actions/dragonsActions'
import loadingImage from '../../images/loading.svg'
import { LoadingSpinner, Content, NoData } from '../Shared/index.styled'
import Card from '../Card/Card'

interface DragonProps {
  path?: string
}

const Dragons: React.FC<DragonProps> = () => {
  const dispatch = useDispatch()
  const stage = useSelector(dragonsDataStageSelector)
  const dragonsData = useSelector(dragonsDataSelector)
  const dragonsDataIsEmpty = !dragonsData.length

  React.useEffect(() => {
    // Only fetch data if needed
    if (!dragonsData.length) {
      dispatch(getDragonsData())
    }
  }, [])

  if (stage === 'pending')
    return <LoadingSpinner src={loadingImage} alt="Loading" />

  if (dragonsDataIsEmpty) return <NoData>Data Currently Unavailable</NoData>

  return (
    <section>
      <PageTitle>dragons</PageTitle>

      <Content>
        {dragonsData.map((dragon: any) => {
          const dragonUrl = `/dragons/${dragon.id}`

          return (
            <Card
              key={dragon.id}
              name={dragon.name}
              images={dragon.flickr_images}
              description={dragon.description}
              type={dragon.type}
              active={dragon.active}
              url={dragonUrl}
            />
          )
        })}
      </Content>
    </section>
  )
}

export default Dragons
