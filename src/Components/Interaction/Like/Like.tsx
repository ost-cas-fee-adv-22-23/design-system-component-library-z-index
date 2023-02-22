import React, { FC, useEffect, useState } from 'react';
import { Interaction } from '../Interaction';
import {
  ActionBackGroundColor,
  IconColor,
  IconHoverColor,
  LikeProps,
  TextColor,
  TextHoverColor,
} from '../../../models';

export const Like: FC<LikeProps> = ({ value, isLiked }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isCurrentlyLiked, setIsCurrentlyLiked] = useState(isLiked);

  const toggleLikedStatus = (): void => {
    setIsCurrentlyLiked(() => !isCurrentlyLiked);
  };

  useEffect(() => {
    isCurrentlyLiked ? setCurrentValue(() => currentValue + 1) : setCurrentValue(() => currentValue - 1);
  }, [isCurrentlyLiked]);

  useEffect(() => setCurrentValue(() => value), [value]);
  useEffect(() => setIsCurrentlyLiked(() => isLiked), [isLiked]);

  return (
    <div>
      <div className="hidden md:block">
        <Interaction
          iconId={currentValue === 0 ? 'heart-empty' : 'heart-full'}
          label={
            currentValue === 0 || (currentValue === 1 && !isCurrentlyLiked)
              ? 'Like'
              : currentValue === 1 && isCurrentlyLiked
              ? 'Liked'
              : 'Likes'
          }
          value={currentValue === 1 && isCurrentlyLiked ? undefined : currentValue > 0 ? currentValue : undefined}
          iconColor={currentValue === 0 ? IconColor.Gray : IconColor.Pink}
          textColor={currentValue === 0 ? TextColor.Gray : TextColor.DarkPink}
          iconHoverColor={IconHoverColor.Pink}
          textHoverColor={TextHoverColor.Pink}
          backgroundColor={ActionBackGroundColor.Pink}
          size="standard"
          onClickFn={toggleLikedStatus}
        />
      </div>
      <div className="block md:hidden">
        <Interaction
          iconId={currentValue === 0 ? 'heart-empty' : 'heart-full'}
          label=""
          value={currentValue === 1 && isCurrentlyLiked ? undefined : currentValue > 0 ? currentValue : undefined}
          iconColor={currentValue === 0 ? IconColor.Gray : IconColor.Pink}
          textColor={currentValue === 0 ? TextColor.Gray : TextColor.DarkPink}
          iconHoverColor={IconHoverColor.Pink}
          textHoverColor={TextHoverColor.Pink}
          backgroundColor={ActionBackGroundColor.Pink}
          size="standard"
          onClickFn={toggleLikedStatus}
        />
      </div>
    </div>
  );
};
