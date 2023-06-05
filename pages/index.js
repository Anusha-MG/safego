import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../Components/Navbar';

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-screen md:w-[400px] w-full py-[3rem] fixed md:top-0 top-[15rem] md:right-[2rem] flex flex-col justify-end z-20`,
  rideRequest: `h-screen bg-white rounded-lg flex flex-col overflow-scroll text-white bg-primary`,
}

export default function Home() {
  //const { ride, setRide, offer, setOffer } = useContext(SolWagContext);
  return (
    <div className={style.wrapper}>
      <Navbar />
      {/* 
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <PoolList ride={ride}/>
          <LocationSelector offer={offer}/>
          <Confirm offer={offer}/>
        </div>
      </div> */}
    </div>
  )
}

