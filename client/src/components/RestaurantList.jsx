/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'

function RestaurantList() {

  useEffect(() => {
    const fetchData = async () => {
      
      try {
       const response = await RestaurantFinder.get("/")
       console.log(response)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='list-group'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Rating</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mcdonalds</td>
            <td>Hamilton</td>
            <td>$$</td>
            <td>**</td>
            <td><button className='btn btn-warning'>Update</button></td>
            <td><button className='btn btn-danger'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList