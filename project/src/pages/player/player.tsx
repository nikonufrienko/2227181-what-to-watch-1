import { Link, useParams } from 'react-router-dom';
import { FilmData } from '../../mocks/filmes_mocks';
import NotFound from '../not-found/not-found';

function Player(props: { filmesData: Record<string, FilmData> }): JSX.Element {
  const params = useParams();
  if (!(params.id as string in props.filmesData)) {
    return (<NotFound />);
  }
  const id = params.id as string;
  const filmData = props.filmesData[id];
  return (
    <div className="player">
      <video src={filmData.videoSrc} className="player__video" poster={filmData.imgPreviewSrc} autoPlay></video>
      <Link to={`/films/${id}`} style={{ textDecoration: 'none' }}><button type="button" className="player__exit">Exit</button></Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
