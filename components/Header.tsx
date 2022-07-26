import { Dispatch, SetStateAction } from 'react';
import { BiMenu } from 'react-icons/bi';

type HeaderProps = {
  setMenu: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setMenu }: HeaderProps) => {
  return (
    <header className='fixed bg-white w-full top-0 flex justify-between px-2 py-2 items-center shadow-md'>
      <h2 className='font-bold text-2xl ml-2'>My Portfolio</h2>
      <button className='w-12 h-12 flex justify-center items-center rounded-lg bg-slate-200'>
        <BiMenu
          onClick={(e) => {
            e.preventDefault();
            setMenu(true);
          }}
          size={40}
        />
      </button>
    </header>
  );
};
export default Header;
