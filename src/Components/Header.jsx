import React from 'react'
import logo from '../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv, HiStar } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'
const Header = () => {
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
    ]
    return (
    <div className='flex items-center justify-between p-5'>
            <div className='flex gap-3 items-center gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px] lg:w-[200px] object-cover' alt="" />
                {menu.map((item) => (<HeaderItem name={item.name} Icon={item.icon}>
                </HeaderItem>))}
            </div>
            <img src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
                className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header
