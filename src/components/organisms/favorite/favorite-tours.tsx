import styled from "styled-components";
import ToursSliderCard from "../../molecules/home-tours/tours-slider-card";
import { containerMixin } from "@/styles/global-styles";
import { favoritesToursState } from "@/states/atom";
import { useRecoilState } from "recoil";
import FavoriteToursHeader from "@/components/atoms/favorite-tours/favorite-tours-header";
import FavoriteToursHeaderClearButton from "@/components/atoms/favorite-tours/favorite-tours-header-button";
import FavoriteToursList from "./favorite-tours-list";

const FavoriteToursWrapper = styled.section`
  ${containerMixin}
  padding-bottom:104px;
`;

const FavoriteTours = () => {
  const [favoritesTours, setFavoritesTours] =
    useRecoilState(favoritesToursState);

  return (
    <FavoriteToursWrapper>
      <FavoriteToursHeader>
        <FavoriteToursHeaderClearButton onClick={() => setFavoritesTours([])}>
          Clear all
        </FavoriteToursHeaderClearButton>
      </FavoriteToursHeader>
      <FavoriteToursList>
        {favoritesTours.map((tour) => (
          <ToursSliderCard
            $isFavoriteItem={true}
            image={tour.img}
            text={tour.description}
            title={tour.name}
            key={tour.id}
            tourId={tour.id}
          />
        ))}
      </FavoriteToursList>
    </FavoriteToursWrapper>
  );
};

export default FavoriteTours;
