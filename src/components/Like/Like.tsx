import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type LikeProps = {
  onClick: () => void;
  liked?: boolean;
};

export default function Like({ onClick, liked = false }: LikeProps) {
  const [isLiked, setIsLiked] = useState(liked);
  const onClicked = () => {
    onClick();
    setIsLiked(!isLiked);
  };

  return isLiked ? (
    <AiFillHeart onClick={onClicked} color='#ff6b81' size={30} />
  ) : (
    <AiOutlineHeart onClick={onClicked} color='grey' size={30} />
  );
}
