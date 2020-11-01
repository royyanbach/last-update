import { h } from 'preact';
import { useContext } from 'preact/hooks'
import Icon from 'preact-material-components/Icon';
import Fab from 'preact-material-components/Fab';
import 'preact-material-components/Fab/style.css';
import Context from '../context';

export default () => {
  const { showFab, db, setSavedItems } = useContext(Context);

  const handleClick = () => {
    db.add('lastUpdates', {
      date: new Date(),
    })
    .then(() => db.getAllFromIndex('lastUpdates', 'date'))
    .then((data) => setSavedItems(data));
  }

  return (
    <Fab
      exited={!showFab}
      onClick={() => handleClick()}
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16
      }}
    >
      <Icon>add</Icon>
    </Fab>
  );
}
