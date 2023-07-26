import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import './styles/index.scss';
import {useEffect} from 'react';

const App = () => {
  const {theme} = useTheme();

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error('ALOHA BRO');
    }
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <div className='content-page'>
        <Sidebar/>
        <div className='page-wrapper'>
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
