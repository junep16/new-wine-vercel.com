import { Beer } from "../types/Beer";

interface BeerCardProps {
  beerData: Beer
}

export const BeerCard = ({ beerData }: BeerCardProps) => {
  const { name, price } = beerData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  )
}