import { useState } from 'react';
import RestaurantMenuItem from './RestaurantMenuItem';
import useRestaurantsMenu from "../hooks/useRestaurantsMenu";

const RestaurantMenu = () => {
  const { restaurant } = useRestaurantsMenu(611107);
  const menu = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

  const handleToggleAccordion = (index) => {
    if (index === activeAccordionIndex) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };

  if (!menu) {
    console.log("Menu is null or undefined");
  } else {
    console.log("Menu is available:", menu);
  }

  return (
    <div className='my-4'>
      {menu?.map((m, i) => {
        if (m?.card?.card?.title) {
          return (
            <RestaurantMenuItem
              items={m}
              key={i}
              index={i}
              activeIndex={activeAccordionIndex}
              setActiveIndex={handleToggleAccordion}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantMenu;
