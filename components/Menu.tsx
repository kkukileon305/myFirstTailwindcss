import { Dispatch, SetStateAction } from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai';

type MenuProps = {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ menu, setMenu }: MenuProps) => {
  return (
    <aside className={`fixed transition duration-300 ${menu ? 'translate-x-none' : 'translate-x-full'} w-[90%] h-full bg-slate-400 shadow-lg top-0 right-0 z-10`}>
      <div className='flex justify-between items-center px-3 py-3'>
        <AiOutlineSwapRight onClick={() => setMenu(false)} size={40} color='white' />
      </div>
    </aside>
  );
};

export default Menu;
