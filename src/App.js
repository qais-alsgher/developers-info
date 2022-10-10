import './App.css';
import { useReducer } from 'react';
import { devloperReducer } from './reducers/developerReducer';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function App() {

  const [developer, dispatch] = useReducer(devloperReducer, []);
  console.log(developer);
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <DeveloperForm dispatch={dispatch} />
          </Col>
          <Col>
            <DeveloperList
              developer={developer}
              dispatch={dispatch}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
