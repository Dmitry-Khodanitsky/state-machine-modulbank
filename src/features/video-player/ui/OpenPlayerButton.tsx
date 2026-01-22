import { Button, Flex } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useVideoPlayer } from '../lib/useVideoPlayer'

export const OpenPlayerButton: React.FC = () => {
  const { send } = useVideoPlayer()
  return (
    <Flex justify="center" align="center" style={{ minHeight: '100vh' }}>
      <Button
        type="primary"
        size="large"
        onClick={() => send({ type: 'open' })}
      >
        <PlayCircleOutlined style={{ fontSize: '25px' }} />
      </Button>
    </Flex>
  )
}
