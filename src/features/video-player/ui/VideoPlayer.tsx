import { Button, Modal, Space } from 'antd'
import { useVideoPlayer } from '../lib/useVideoPlayer'
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from '@ant-design/icons'
import ReactPlayer from 'react-player'

export const VideoPlayer: React.FC = () => {
  const { screenSize, isPlaying, isModalOpen, send } = useVideoPlayer()

  const screenConfig = {
    small: {
      icon: <FullscreenOutlined />,
      modalWidth: 500,
      playerHeight: '340px',
    },
    large: {
      icon: <FullscreenExitOutlined />,
      modalWidth: 1000,
      playerHeight: '560px',
    },
  } as const

  return (
    <Modal
      title="Player"
      open={isModalOpen}
      onCancel={() => send({ type: 'close' })}
      width={screenConfig[screenSize].modalWidth}
      footer={
        <Space>
          <Button
            icon={screenConfig[screenSize].icon}
            onClick={() => send({ type: 'toggleSize' })}
          ></Button>

          <Button
            icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={() => send({ type: 'togglePlay' })}
          ></Button>
        </Space>
      }
    >
      <ReactPlayer
        src="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8"
        height={screenConfig[screenSize].playerHeight}
        playing={isPlaying}
        muted={true}
        width="100%"
      />
    </Modal>
  )
}
