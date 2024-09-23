import { useRecoilValue } from "recoil"
import { currentSlide, CurrentSlideManager } from "../recoil/currentSlide"
import { useEffect } from "react"

export const useVersionEffect = () => {
    const _currentSlide = useRecoilValue(currentSlide)

    const handleSetVersion = () => CurrentSlideManager.set(prev => ({
        ...prev,
        version: prev.version + 1
      }))
    
    useEffect(() => { 
        handleSetVersion()
      }, [_currentSlide])
      
    return null;
}