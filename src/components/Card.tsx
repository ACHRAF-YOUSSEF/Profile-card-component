import bg_card_top from '../assets/bg-pattern-card.svg';
import person from '../assets/image-victor.jpg';

interface CardProps {
  name: string;
  age: number;
  city: string;
  followers: string;
  likes: string;
  photos: string;
}

const Card: React.FC<CardProps> = ({
  name,
  age,
  city,
  followers,
  likes,
  photos
}) => {
  return (
    <div
      className="
        flex
        flex-col 
        justify-center 
        items-center
        bg-white
        rounded-xl 
        mx-auto
        my-4
        shadow-xl
      "
    >
      {/* upper part */}
      <img
        className="
          rounded-t-xl 
          w-full
        "
        src={bg_card_top}
        alt="bg-top"
      />
      {/* middle part */}
      <div
        className="
        rounded-full 
        -mt-14
        p-2
        bg-white
      "
      >
        <img
          className="
          rounded-full
          baseline
          w-fit
        "
          src={person}
          alt="person"
        />
      </div>
      {/* lower part */}
      <div
        className="
        bg-white 
          text-center 
          justify-center 
          flex 
          flex-col 
          items-center
          w-full
          rounded-lg
      "
      >
        <div
          className="
            m-4 
            flex 
            flex-col 
            text-center 
            justify-center 
            items-center
          "
        >
          <div className="py-1">
            <span className="font-extrabold text-Very-dark-desaturated-blue">
              {name}
            </span>
            <span className="text-Dark-gray"> {age}</span>
          </div>
          <div className="text-Dark-gray text-sm">{city}</div>
        </div>
        <div
          className="
            flex 
            flex-row 
            justify-center 
            items-center 
            space-x-8 
            my-5
            p-2
            border-t-2
            w-full
          "
        >
          <div className="flex flex-col">
            <span className="font-extrabold text-Very-dark-desaturated-blue">
              {followers}
            </span>
            <span className="text-Dark-gray text-xs">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-Very-dark-desaturated-blue">
              {likes}
            </span>
            <span className="text-Dark-gray text-xs">Likes</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-Very-dark-desaturated-blue">
              {photos}
            </span>
            <span className="text-Dark-gray text-xs">Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;