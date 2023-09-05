import { FC, useContext, useEffect, useState } from "react";
import { CarGalleryContainer } from "./style";
import Car from "../Car";
import { PagenationContext } from "../../contexts/PagenationContextProvider";

const CarGallery: FC = () => {
  const display_num = 12;

  const { currentPg, setTotalPages } = useContext(PagenationContext);

  const [galleryData, setGalleryData] = useState<any[]>([]);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    displayData();
  }, []);

  useEffect(() => {
    // console.log("Data: ", data);
    const length = Math.ceil(data.length / display_num);
    // console.log("length: ", length);
    setTotalPages(length);

    // let index = 0;
    let arr: any = [];
    data?.map((item: any, index: any) => {
      if (
        index >= display_num * (currentPg - 1) &&
        index <= display_num * currentPg - 1
      ) {
        let temp: any = {
          brand: item[3],
          model: item[4],
          ez: item[8],
          fuel_type: item[109],
          kilometre: item[9],
          gear_type: item[110],
          price: item[10],
          ab133: "ab 133 €",
          emission: item[99],
          consumption_combined: item[98],
        };
        arr.push(temp);
      }
    });
    setGalleryData(arr);
  }, [data, currentPg]);

  const displayData = () => {
    const fileInput: any = document.getElementById("csv_file");

    fileInput.addEventListener("change", (event: any) => {
      const file = event?.target?.files[0];
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const fileContents: any = event?.target.result;
        var _data = fileContents.split("\n"); // split by lines
        for (var row in _data) _data[row] = _data[row].split(";"); // split all lines by comas

        // console.log("File contents:", _data);
        setData(_data);
      };

      reader.readAsText(file);
    });
  };
  return (
    <CarGalleryContainer>
      <input id="csv_file" type="file" />
      {galleryData &&
        galleryData.map((item, index) => <Car key={index} data={item} />)}
    </CarGalleryContainer>
  );
};

export default CarGallery;
