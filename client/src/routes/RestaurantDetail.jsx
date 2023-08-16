import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';

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
    <div>{selectedRestaurant && selectedRestaurant.restaurant.name}</div>
  )
}

export default RestaurantDetail