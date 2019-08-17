import Footer from '../templates/Footer';
import Main from '../templates/Main';
import Base from '../templates/Base';

const root = 'root';
const header = 'header';
const main = 'main';
const footer = 'footer';

const App = () => (
  <div className={root}>
    <Base headerClass={`${root}__${header}`}>
      <Main className={`${root}__${main}`} />
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
