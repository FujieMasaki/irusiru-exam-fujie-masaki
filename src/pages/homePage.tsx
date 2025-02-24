import React from "react";
import { Slide } from "../features/slide";
import { currentUser } from "../recoil";
import { useRecoilValue } from "recoil";
import { useVersionEffect } from "../hooks";

export const HomePage = () => {
  console.log("HomePage レンダリング");
  const _currentUser = useRecoilValue(currentUser);

  // 問題⑤以下のhooksにより無限レンダリングが発生しているので修正してください

  useVersionEffect();

  return _currentUser ? (
    <div>
      あなたは{_currentUser.type}の権限でログインしています。
      <Slide />
    </div>
  ) : null;
};
