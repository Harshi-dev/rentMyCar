import React, { useState, useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import { Button, Space, Row, Col} from 'antd';
import Spinner from '../components/Spinner';


const Home = () => {
  const { cars } = useSelector(state => state.carsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
    

  return (
    <DefaultLayout>
      { loading === true && (<Spinner/>)}
    {/* <div>length of cars array is  {cars.length}</div> */}
      <Row justify="center" gutter={16} className="mt-5">

        {cars.map(car=>{
          return  <Col lg={5} sm={24} xs={24} >
            <div className='car p-2 bs1 mt-3'>
              <img src={car.image} alt='a car' className='carimg'/>

              <div className='car-content d-flex align-items-center justify-content-between'>
                <div>
                  <p>{car.name}</p>
                  <p>{car.rentPerHour} Rent Per Hour /-</p>
                </div>
                <div>
                  <button className='btn1'>Book Now</button>
                </div>
              </div>

            </div>
          </Col>
        })}

      </Row>
    </DefaultLayout>
  )
}

export default Home