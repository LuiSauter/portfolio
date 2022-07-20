import { useState } from "react";

function useToggle(): [boolean, () => void] {
  const [toggle, setToggle] = useState<boolean>(false)
  const handleToggle = (): void => setToggle(!toggle)
  return [toggle, handleToggle]
}

export default useToggle;
