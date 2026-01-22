import {
  OpenPlayerButton,
  VideoPlayer,
  VideoPlayerProvider,
} from './features/video-player'

const App: React.FC = () => {
  return (
    <VideoPlayerProvider>
      <OpenPlayerButton />
      <VideoPlayer />
    </VideoPlayerProvider>
  )
}

export default App
