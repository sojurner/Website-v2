import Footer from '../templates/Footer';
import MainLanding from '../templates/Main_Landing';
import MainTimeline from '../templates/Main_Timeline';
import Base from '../templates/Base';
import { useMainRefs } from '../../utils/hooks';
import MainDescription from '../templates/Main_Description';

const root = 'root';
const header = 'header';
const main = 'main';
const timeline = 'timeline';
const description = 'description';
const footer = 'footer';

const App = () => {
  const [refs, scrollToRef] = useMainRefs(3);

  return (
    <div className={root}>
      <Base headerClass={`${root}__${header}`}>
        <MainLanding
          className={`${root}__${main}`}
          scrollToRef={scrollToRef}
          ref={refs[0]}
        />
        <MainDescription
          scrollToRef={scrollToRef}
          ref={refs[1]}
          className={`${root}__${description}`}
        />
        <MainTimeline className={`${root}__${timeline}`} ref={refs[2]} />
        <Footer scrollToRef={scrollToRef} className={`${root}__${footer}`} />
      </Base>
      <style jsx>{`
        .root {
          height: 100vh;
          padding: 50px 0 50px 0;
        }
      `}</style>
    </div>
  );
};

export default App;
