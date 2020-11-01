import { h } from 'preact';
import TopAppBar from 'preact-material-components/TopAppBar';
import 'preact-material-components/TopAppBar/style.css';

export default () => {
  return (
    <div>
      <TopAppBar className="topappbar">
        <TopAppBar.Row>
          <TopAppBar.Section align-start>
            {/* <TopAppBar.Icon navigation>menu</TopAppBar.Icon> */}
            <TopAppBar.Title>
              Last Update
              </TopAppBar.Title>
          </TopAppBar.Section>
          {/* <TopAppBar.Section align-end>
            <TopAppBar.Icon>cached</TopAppBar.Icon>
          </TopAppBar.Section> */}
        </TopAppBar.Row>
      </TopAppBar>
    </div>
  );
};
