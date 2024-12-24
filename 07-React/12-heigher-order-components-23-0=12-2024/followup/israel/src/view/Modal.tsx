import {FC, ReactNode} from 'react'
import './modal.scss'

interface Props{
    children?: ReactNode
}

const Modal:FC<Props> = ({children}) => {
    return (
        <div className='modal'>
        {children}
    </div>
    )
}

export default Modal