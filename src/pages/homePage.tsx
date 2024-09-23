import React from 'react';
import { Slide } from '../features/slide';
import { currentUser } from '../recoil';
import { useRecoilValue } from 'recoil';

export const HomePage = () => {
    const _currentUser = useRecoilValue(currentUser);
    return _currentUser? (
        <div>
            あなたは{_currentUser.type}の権限でログインしています。
            <Slide />
        </div>
    ) : null
}