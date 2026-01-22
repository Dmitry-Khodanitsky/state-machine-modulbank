import { assign, setup } from 'xstate'

export const playerMachine = setup({
  types: {
    context: {} as { screenSize: 'small' | 'large' },
    events: {} as { type: 'open' | 'togglePlay' | 'close' | 'toggleSize' },
  },
  actions: {
    toggleScreenSize: assign({
      screenSize: ({ context }) =>
        context.screenSize === 'small' ? 'large' : 'small',
    }),
  },
}).createMachine({
  id: 'videoPlayer',
  initial: 'closed',
  context: {
    screenSize: 'small',
  },
  states: {
    closed: {
      on: {
        open: 'opened',
      },
    },
    opened: {
      initial: 'playing',
      on: {
        close: 'closed',
        toggleSize: { actions: 'toggleScreenSize' },
      },
      states: {
        playing: {
          on: {
            togglePlay: 'paused',
          },
        },
        paused: {
          on: {
            togglePlay: 'playing',
          },
        },
      },
    },
  },
})
