import { FC, useContext, useEffect, useState } from "react";
import { PagenationNextIcon, PagenationPrevIcon } from "../icons";
import { PagenationButton, PagenationContainer } from "./style";
import { PagenationContext } from "../../contexts/PagenationContextProvider";

const Pagenation: FC = () => {
  const { totalPages, setCurrentPg, currentPg } = useContext(PagenationContext);
  const [obj, setObj] = useState<number[]>([]);

  useEffect(() => {
    let tempObj = [];
    let i = 1;
    for (; i <= totalPages; ) {
      if (totalPages > 5 && i === 4) tempObj.push(0);
      else tempObj.push(i++);
    }
    setObj(tempObj);
  }, [totalPages]);

  const onPagenationClick = (_currentPg: any) => {
    console.log(_currentPg);
    setCurrentPg(_currentPg);
  };

  const onPrevClick = () => {
    if (currentPg === 1) return;
    setCurrentPg(currentPg - 1);
  };

  const onNextClick = () => {
    if (currentPg === totalPages) return;
    setCurrentPg(currentPg + 1);
  };

  return (
    <PagenationContainer>
      <PagenationButton onClick={onPrevClick}>
        <PagenationPrevIcon />
      </PagenationButton>
      {obj &&
        obj.map((item, index) => {
          if (item === 0) return "...";
          return (
            <PagenationButton
              key={index}
              onClick={() => onPagenationClick(item)}
            >
              {item}
            </PagenationButton>
          );
        })}
      <PagenationButton onClick={onNextClick}>
        <PagenationNextIcon />
      </PagenationButton>
    </PagenationContainer>
  );
};

export default Pagenation;
