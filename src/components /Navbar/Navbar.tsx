// 'use-client'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

export default function NavigationBar() {


  return (
    <div className="sticky bottom-0 left-0 z-50 w-full flex justify-center bg-white ">

      <nav className="w-5/6  flex justify-between items-center  p-5">

        <button className="text-gray-600 hover:text-emerald-600" >
          <MenuBookOutlinedIcon />
          <div>Menu</div>
        </button>

        <button className="text-gray-600 hover:text-emerald-600" >
          <Person2OutlinedIcon />
          <div>Profile</div>
        </button>

        <button className="text-gray-600 hover:text-emerald-600" >
          <ShoppingCartOutlinedIcon />
          <div>Cart</div>
        </button>

        <button className="text-gray-600 hover:text-emerald-600" >
          <RestoreOutlinedIcon />
          <div>Orders</div>
        </button>

      </nav>
    </div >
  )
}