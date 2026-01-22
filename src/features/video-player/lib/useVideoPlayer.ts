import { VideoPlayerContext } from '../model/VideoPlayerContext'

export const useVideoPlayer = () => {
  const screenSize = VideoPlayerContext.useSelector(
    (state) => state.context.screenSize,
  )
  const isPlaying = VideoPlayerContext.useSelector((state) =>
    state.matches({ opened: 'playing' }),
  )
  const isModalOpen = VideoPlayerContext.useSelector((state) =>
    state.matches('opened'),
  )
  const actorRef = VideoPlayerContext.useActorRef()

  return { screenSize, isPlaying, isModalOpen, send: actorRef.send }
}
