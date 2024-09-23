import React from 'react'
import { InsertItem } from './InsertItem'
import { useRecoilValue } from 'recoil'
import { currentSlide } from '../../recoil/currentSlide'
import { Recognizer } from './Recognizer'
import './style.css'

export const Slide = () => {
    const _currentSlide = useRecoilValue(currentSlide)
    return (
        <div>
            <InsertItem />
            <div className='container'>
                {_currentSlide.items.map(item => <Recognizer item={item} key={item.id} />)}
            </div>
        </div>
    )
}