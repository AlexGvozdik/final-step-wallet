import s from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <div className={s.notFoundContainer}>
      <h2 className={s.errorTitle}>ВЖУХ!!</h2>
      <img
        className={s.imageError}
        //   src="https://cdn.pixabay.com/photo/2016/04/24/22/30/monitor-1350918_960_720.png"
        //   src="https://cdn.pixabay.com/photo/2016/10/25/23/54/not-found-1770320_960_720.jpg"
        src="https://www.clipartmax.com/png/full/212-2123541_avatan-plus-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D1%82%D0%BE%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%BE%D1%80-%D0%BA%D0%BE%D1%82-%D0%B2%D0%B6%D1%83%D1%85-png.png"
        //   src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg"
        alt="error"
      />
      {/* <Link className={s.link} to={ROUTES.MAIN}> */}
      <p> Телепорт в начало</p>
      {/* </Link> */}
    </div>
  );
}
