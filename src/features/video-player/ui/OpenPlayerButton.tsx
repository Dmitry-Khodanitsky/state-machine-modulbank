import { Button, Card, Flex } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useVideoPlayer } from '../lib/useVideoPlayer'

export const OpenPlayerButton: React.FC = () => {
  const { send } = useVideoPlayer()
  return (
    <Flex justify="center" align="center" style={{ minHeight: '100vh' }}>
      <Card
        cover={
          <img src="https://s0.rbk.ru/v6_top_pics/media/img/8/34/755823570765348.jpeg" />
        }
        style={{ width: 300 }}
        actions={[
          <Button
            type="primary"
            size="large"
            icon={<PlayCircleOutlined />}
            onClick={() => send({ type: 'open' })}
          />,
        ]}
      >
        <Card.Meta
          title="Прогулка друзей"
          description="Смотрите как гуляют друзья"
        />
      </Card>
    </Flex>
  )
}
