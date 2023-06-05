import Image from 'next/image'
// import avatar from '../temp/avatar.jpg'
// import { BsPerson } from 'react-icons/bs'
// import { useContext } from 'react'
// import { SolWagContext } from '../context/solWagContext'
// import SolWagLogo from '../assets/SolWagLogo.png'

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

const Navbar = () => {
  //const { currentAccount, connectWallet, currentUser, setRide, setOffer, offer } = useContext(SolWagContext)

  return (
    <div className={style.wrapper}>
        Navbar
      {/* <div className={style.leftMenu}>
        <div className={style.logoContainer}>
          <Image src={SolWagLogo} height={30} width={30} />
          <div className={style.logo}>SolWag</div>
        </div>
        <div className={style.menuItem} onClick={()=>{setOffer('hidden'); setRide('block'); console.log(offer)}}>Ride Pool</div>
        <div className={style.menuItem} onClick={()=>{setOffer('block'); setRide('hidden')}}>Offer Pool</div>
        <div className={`${style.menuItem} md:block hidden`}><a href="https://docs.google.com/document/d/1zsikHSiVQscm2C_g5148DYDx7WeUF6isvKnBppvdzWg/edit?usp=sharing" target="blank" rel="noreferrer">White Paper</a></div>
      </div> */}
      
    </div>
  )
}

export default Navbar
