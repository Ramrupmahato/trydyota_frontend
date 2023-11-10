import update from "immutability-helper";
import { useCallback } from "react";
import Card from "./Card";
import {AiFillEye} from 'react-icons/ai'

const Container = ({
  setImageUrl,
  imageUrl,
  handleRemoveImage,
  pdf,
  pdfName,
}) => {
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      setImageUrl((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    },
    [setImageUrl]
  );

  const renderCard = useCallback(
    (card, i) => {
      return (
        <Card
          key={i + 1}
          index={i}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          image={card}
          handleRemoveImage={handleRemoveImage}
        />
      );
    },
    [moveCard, handleRemoveImage]
  );
  return (
    <>
      {pdf === true ? (
        <>
          {pdfName && (
            <a
              href={imageUrl && imageUrl[0]} // Provide the URL or file path to your PDF here
              target="_blank"
              className="text-sm flex justify-center items-center gap-1 cursor-pointer"
            >
              <AiFillEye /> {pdfName}
            </a>
          )}
        </>
      ) : (
        <>{imageUrl?.map((card, i) => renderCard(card, i))}</>
      )}
    </>
  );
};

export default Container;
