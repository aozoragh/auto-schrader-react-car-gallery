import { FC } from "react";
import { CircleiIcon, YellowStar } from "../icons";
import {
  CarContainer,
  Content,
  EditionAndMTL,
  ImageArea,
  MTL,
  NameAndPrice,
  Text,
  ViewCarButton,
} from "./style";
import Button from "../Button";

export type CarComponentProps = {
  data: {
    brand?: string;
    model?: string;
    ez?: string;
    fuel_type?: string;
    kilometre?: string;
    gear_type?: string;
    price?: string;
    ab133?: string;
    emission?: string;
    consumption_combined?: string;
  };
};

const Car: FC<CarComponentProps> = ({ data }) => {
  // --- convert fuel type from number to string ---
  const convertFuelType = (_fuel: string | undefined) => {
    switch (_fuel) {
      case "0":
        return "other";
      case "1":
        return "petrol";
      case "2":
        return "diesel";
      case "3":
        return "autogas";
      case "4":
        return "natural gas";
      case "6":
        return "electric";
      case "7":
        return "hybrid";
      case "8":
        return "hydrogen";
      case "9":
        return "ethanol";
      case "10":
        return "hybrid diesel";
      case "11":
        return "bi-fuel";
      default:
        return "wrong";
    }
  };

  // --- convert gear type from number to string ---
  const convertGearType = (_gear: string | undefined) => {
    switch (_gear) {
      case "0":
        return "no entry";

      case "1":
        return "manual transmission";
      case "2":
        return "semi-automatic";
      case "3":
        return "automatic";
      default:
        return "wrong";
    }
  };

  return (
    <CarContainer>
      <ImageArea>
        <YellowStar />
      </ImageArea>
      <Content>
        <NameAndPrice>
          <span>{data.brand}</span>
          <span>{data.price}€</span>
        </NameAndPrice>
        <EditionAndMTL>
          <Text>{data.model}</Text>
          <MTL>
            <Text>{data.ab133}</Text>
            <CircleiIcon />
          </MTL>
        </EditionAndMTL>
        <Text>
          {data.ez} • {convertFuelType(data.fuel_type)}
        </Text>
        <Text>
          {data.kilometre} km • {convertGearType(data.gear_type)}
        </Text>
        <Text>
          {data.emission}g CO2/km (komb.) • {data.consumption_combined} 1/100
          km(komb.)
        </Text>
        <ViewCarButton>
          <Button label="Dieses Auto ansehen" />
        </ViewCarButton>
      </Content>
    </CarContainer>
  );
};

export default Car;
