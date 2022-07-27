import { useRouter } from 'next/router';
import { ChangeEventHandler, Dispatch, MouseEventHandler, SetStateAction, TouchEventHandler, useEffect, useRef, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoMdSearch, IoMdRemoveCircleOutline } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [curMenu, setCurMenu] = useState(0);
  const [menuTouched, setMenuTouched] = useState(false);
  const [homeTouched, setHomeTouched] = useState(false);
  const [touchTime, setTouchTime] = useState(0);
  const [value, setValue] = useState('');
  const [timeId, setTimeId] = useState<NodeJS.Timeout>();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { id } = router.query;

  const touchStartHandler: TouchEventHandler<HTMLButtonElement> = () => {
    setMenuTouched(true);
    setTouchTime(new Date().getTime());
  };

  useEffect(() => {
    if (router.isReady && id) {
      setCurMenu(Number(id));
    }
  }, [router.isReady, id]);

  const touchEndHandler: TouchEventHandler<HTMLButtonElement> = () => {
    setMenuTouched(false);
    const duration = new Date().getTime() - touchTime;

    if (duration < 200) {
      setMenu(!menu);
    }
  };

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    clearTimeout(timeId);
    setTimeId(setTimeout(() => setValue(value), 500));
  };

  const removeHandler = () => {
    setValue('');

    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const homeBtnStart: TouchEventHandler<HTMLButtonElement> = () => {
    setHomeTouched(true);
    setTouchTime(new Date().getTime());
  };

  const homeBtnEnd: TouchEventHandler<HTMLButtonElement> = () => {
    setHomeTouched(false);
    const duration = new Date().getTime() - touchTime;

    if (duration < 200) {
      router.push('/');
    }
  };

  const liClickHandler = (i: number) => {
    router.push(`/menus/${i}`);
    setTimeout(() => setMenu(false), 200);
  };

  return (
    <header className={`fixed z-10 overflow-hidden bg-white w-full h-full ${menu ? 'max-h-full' : 'max-h-16'} transition-max-height duration-500 top-0 p-2 shadow-md lg:flex`}>
      <div className='flex justify-between items-center lg:w-full'>
        <h2 className='font-bold text-2xl ml-2'>My Portfolio</h2>
        <div className='flex gap-2 items-center '>
          <button //
            className={`${homeTouched ? 'bg-slate-300 duration-100' : 'duration-300'} w-12 h-12 rounded-lg flex justify-center items-center`}
            onTouchStart={homeBtnStart}
            onTouchEnd={homeBtnEnd}
            onTouchCancel={homeBtnEnd}
          >
            <AiFillHome size={30} onClick={() => router.push('/')} />
          </button>
          <button //
            className={`${menuTouched ? 'bg-slate-300 duration-100' : 'duration-300'} lg:hidden w-12 h-12 flex justify-center items-center rounded-lg`}
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            onTouchCancel={touchEndHandler}
          >
            <BiMenu size={40} />
          </button>
        </div>
      </div>
      <div className={`mt-4 mx-2 lg:hidden duration-300 ${menu ? 'delay-500 opacity-100' : 'delay-0 opacity-0'}`}>
        <div className='border-2 mb-4 flex gap-1 items-center rounded-lg px-2'>
          <IoMdSearch className='text-slate-500' size={24} />
          <input type='text' onChange={changeHandler} className='w-full h-8 py-4 pl-2 text-slate-700 font-light focus:outline-none placeholder:font-light' ref={inputRef} placeholder='디바운싱 0.5s...' />
          <IoMdRemoveCircleOutline onClick={removeHandler} className='text-slate-500' size={24} />
        </div>
        <h3 className='font-bold text-2xl text-slate-600'>Menu</h3>
        <ul className='mt-7'>
          {[1, 2, 3].map((e) => (
            <li className='mb-4' key={e} onClick={() => liClickHandler(e)}>
              <p className={`text-left font-light pl-2 border-l-2 transition-all ${Number(id) === e ? 'text-sky-400 border-sky-400' : 'text-slate-400 border-transparent'}`}>Touch Event {e}</p>
            </li>
          ))}
        </ul>
        <h3 className='font-bold text-slate-700 text-2xl mt-8'>Input</h3>
        <div className='border-2 rounded-lg mt-4 p-2'>
          <p className='font-light h-40 overflow-y-auto'>{value}</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
