import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from '../components/StarRating';

function RestaurantDetail() {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {

       try {
         const response = await RestaurantFinder.get(`/${id}`);
         console.log(response);

         setSelectedRestaurant(response.data.data);
       } catch (err) {
        console.log(err);
       }
    };

    fetchData();
  }, [])
  return (
    <div>{selectedRestaurant && <StarRating rating={3.5} />}</div>
  )
}

export default RestaurantDetail