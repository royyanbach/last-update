import { openDB } from 'idb';
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Context from '../context';
import Navbar from './Navbar';
import SavedItems from './SavedItems';
import CreateButton from './CreateButton';

export default () => {
  const [showFab, setShowFab] = useState(true);
  const [db, setDb] = useState({});
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    openDB('Last Updates', 1, {
      upgrade(db) {
        // Create a store of objects
        const store = db.createObjectStore('lastUpdates', {
          keyPath: 'id',
          autoIncrement: true,
        });
        // Create an index on the 'date' property of the objects.
        store.createIndex('date', 'date');
      },
    }).then(dbObject => {
      setDb(dbObject);
      return dbObject.getAllFromIndex('lastUpdates', 'date');
    }).then(data => {
      setSavedItems(data);
    });
  }, []);

  return (
    <Context.Provider value={{
      showFab,
      setShowFab,
      db,
      savedItems,
      setSavedItems,
    }}>
      <Navbar />
      <SavedItems />
      <CreateButton />
    </Context.Provider>
  );
};
