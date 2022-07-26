type PropsSound = {
  audioSrc: string,
  volume: number,
  time?: number
}

const useSound = (): { playSound: ({ audioSrc, volume, time}: PropsSound) => void } => {
  function playSound({ audioSrc= '', volume = 1, time = 0 }: PropsSound): void {
    const audio = new Audio(audioSrc)
    audio.volume = volume
    audio.currentTime = time
    audio.play().catch(() => {/* not sounds */})
    setTimeout(() => {
      audio.pause()
    }, 300)
  }
  return { playSound }
}

export default useSound
