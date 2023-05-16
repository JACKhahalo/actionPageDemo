import FirstSection from './sections/firstSection';
import SecondSection from './sections/secondSection';
import ThirdSection from './sections/thirdSection';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
    </div>
  );
}

export default App;
