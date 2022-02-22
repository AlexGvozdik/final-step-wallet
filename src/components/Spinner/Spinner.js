import { Oval } from 'react-loader-spinner';
import s from './Spinner.module.css';
const Spinner = () => {
  return (
    <div className={s.Loader}>
      <Oval color="#4A56E2" height={100} width={100} visible={true} />
    </div>
  );
};

export default Spinner;
