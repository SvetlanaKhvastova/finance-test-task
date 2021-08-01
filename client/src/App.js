import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Panel from '../src/components/Shared/Panel';

import TickersPage from '../src/views';

function App() {
  return (
    <div>
      <Panel />

      <Container>
        <Typography component="div" style={{ height: '100vh' }}>
          <h1 className="titleTickers">Tickers in realtime</h1>

          <TickersPage />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
