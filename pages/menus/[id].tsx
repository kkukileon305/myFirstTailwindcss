import { useRouter } from 'next/router';
import Aside from '../../components/Aside';
import Header from '../../components/Header';

const Menu = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <Aside />
      <div className='mt-20 px-4 lg:w-[calc(100%-256px)] lg:ml-64'>
        <p className='font-bold'>Here is {id} Page</p>
      </div>
    </>
  );
};

export default Menu;
