import Footer from '../templates/Footer';
import MainLanding from '../templates/Main_Landing';
import MainTimeline from '../templates/Main_Timeline';
import Base from '../templates/Base';

const root = 'root';
const header = 'header';
const main = 'main';
const timeline = 'timeline';
const footer = 'footer';

const App = () => (
  <div className={root}>
    <Base headerClass={`${root}__${header}`}>
      <MainLanding className={`${root}__${main}`} />
      <MainTimeline className={`${root}__${timeline}`} />
      <Footer className={`${root}__${footer}`} />
    </Base>
    <style jsx>{`
      .root {
        height: 100vh;
      }
    `}</style>
  </div>
);

export default App;
