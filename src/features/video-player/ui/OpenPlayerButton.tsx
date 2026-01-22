import { Button, Flex } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { VideoPlayerContext } from '../model/VideoPlayerContext'

export const OpenPlayerButton: React.FC = () => {
  const videoPlayerRef = VideoPlayerContext.useActorRef()
  return (
    <Flex justify="center" align="center" style={{ minHeight: '100vh' }}>
      <Button
        type="primary"
        size="large"
        onClick={() => videoPlayerRef.send({ type: 'open' })}
      >
        <PlayCircleOutlined style={{ fontSize: '25px' }} />
      </Button>
    </Flex>
  )
}
