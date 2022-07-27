import { BiMenu } from 'react-icons/bi';
import { IoMdSearch, IoMdRemoveCircleOutline } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Aside = () => {
  const router = useRouter();
  const { id } = router.query;
  const [curMenu, setCurMenu] = useState(0);

  useEffect(() => {
    if (router.isReady && id) {
      setCurMenu(Number(id));
    }
  }, [router.isReady, id]);

  const liClickHandler = (i: number) => {
    router.push(`/menus/${i}`);
  };

  return (
    <div className='hidden p-2 lg:block fixed left-0 border-r-2 w-64 h-[calc(100%-64px)] top-16'>
      <h2 className='font-bold text-2xl mt-4'>Menu</h2>
      <div className='border-2 p-2 overflow-hidden rounded-lg mt-4 flex items-center gap-2'>
        <IoMdSearch size={20} />
        <input type='text' className='focus:outline-none w-[calc(100%-20px)] placeholder:text-slate-300' placeholder='Search...' />
      </div>
      <div className='mt-4'>
        <ul className=''>
          {[1, 2, 3].map((e) => (
            <li
              key={e} //
              className={`${curMenu === e ? 'text-sky-300 border-sky-300' : 'text-slate-300 border-transparent'} cursor-pointer font-light mt-2 px-2 border-l-2`}
              onClick={() => liClickHandler(e)}
            >
              Touch Event{e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
