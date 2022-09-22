import RateStyle from "./Rate.style";
import { Image } from "../../Atoms";
import Rating from "../../../assets/images/rate.png";

function Rate() {
    return (
      <RateStyle >
          <Image
                src={Rating}
                alt="A Rating Image"
            />
     </RateStyle>
  );
}

export default Rate;