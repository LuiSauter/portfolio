
const useSound = (): { playSound: (audioSrc: string) => void } => {
  async function playSound(audioSrc: string = ''): Promise<void> {
    try {
      await new Audio(audioSrc).play()
    } catch (error) {
      // any error handling
    }
  }
  return { playSound }
}

export default useSound
