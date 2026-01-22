import { createActorContext } from '@xstate/react'
import { videoPlayerMachine } from './VideoPlayerMachine'

export const VideoPlayerContext = createActorContext(videoPlayerMachine)

export const VideoPlayerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <VideoPlayerContext.Provider>{children}</VideoPlayerContext.Provider>
}
