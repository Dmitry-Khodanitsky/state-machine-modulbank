import { Button, Flex } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

export const OpenPlayerButton: React.FC = () => {
  return (
    <Flex justify="center" align="center" style={{ minHeight: '100vh' }}>
      <Button type="primary" size="large">
        <PlayCircleOutlined style={{ fontSize: '25px' }} />
      </Button>
    </Flex>
  )
}
