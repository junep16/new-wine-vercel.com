import type { NextPage } from "next";
import { WineCardList } from "../../components/WineCardList";
 

const PortWinePage: NextPage = () => {
  const name = 'port';

  return (
    <div>
      {/* {컴포넌트 추상화} */}
      <WineCardList name={name} />
    </div>
  )
}

export default PortWinePage;