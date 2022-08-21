import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Atropos from 'atropos/react'
import style from './modal.module.css'
import Link from 'next/link'

type Props = {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  link: string
}

const Modal: React.FC<Props> = ({ isOpen, onClose, imageSrc, link }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const modalEl = typeof document !== 'undefined' ? document.getElementById('modal') : null
    if (modalEl) {
      if (isOpen) {
        modalEl.style.display = 'grid'
      } else {
        modalEl.style.display = 'none'
      }
    }
  }, [isOpen])

  return mounted
    ? createPortal(
        <div id='modal' className={style.modal}>
          <Link href={link}>
            <a target={'_blank'}>
              <Atropos
                className={style.atropos}
                highlight={false}
                shadow={true}
              >
                <Image
                  src={imageSrc}
                  alt='Certificate.'
                  layout='fill'
                  objectFit='contain'
                />
              </Atropos>
            </a>
          </Link>
          <div onClick={onClose} className={style.close} />
        </div>,
        document.getElementById('portal-root')!
      )
    : null
}

export default Modal
