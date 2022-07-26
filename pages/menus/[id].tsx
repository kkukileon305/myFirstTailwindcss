import { useRouter } from 'next/router';
import Header from '../../components/Header';

const Menu = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div className='mt-20 px-4'>
        <p className='font-bold'>Here is {id} Page</p>
      </div>
    </>
  );
};

export default Menu;
