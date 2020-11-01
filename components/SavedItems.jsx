import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks'
import Icon from 'preact-material-components/Icon';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';
import Context from '../context';

export default () => {
  const { savedItems, db, setSavedItems } = useContext(Context);

  const handleRemoveItem = (itemId) => {
    const tx = db.transaction('lastUpdates', 'readwrite');
    const store = tx.objectStore('lastUpdates');
    store.delete(itemId)
    .then(() => db.getAllFromIndex('lastUpdates', 'date'))
    .then((data) => setSavedItems(data));
  };

  return (
    <div style={{ paddingTop: 56 }}>
      <List>
        <List.Group>
          {
            savedItems.reverse().map((item, index) => (
              <>
                {
                  index === 0 && (
                    <List.GroupHeader>
                      <strong>{new Date(item.date).toLocaleDateString('id-ID')}</strong>
                    </List.GroupHeader>
                  )
                }
                {
                  (
                    index > 0 && new Date(item.date).toLocaleDateString() !== new Date(savedItems[index - 1].date).toLocaleDateString()
                  ) && (
                    <>
                      <List.Divider />
                      <List.GroupHeader>
                        <strong>{new Date(item.date).toLocaleDateString('id-ID')}</strong>
                      </List.GroupHeader>
                    </>
                  )
                }
                <List.Item key={item.id}>
                  {new Date(item.date).toLocaleTimeString('en-US', { hour12: false })}
                  <List.ItemMeta onClick={() => handleRemoveItem(item.id)}>
                    <Icon>delete</Icon>
                  </List.ItemMeta>
                </List.Item>
              </>
            ))
          }
        </List.Group>
      </List>
    </div>
  );
};
