import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Navbar from './components/navigation';
import AddMovies from './components/addmovie';
import Auth from './components/auth';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Layout } from 'antd';
// import { Content, Header } from 'antd/lib/layout/layout';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className='layout'>

        <Header>
          <Navbar />
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" exact component={AddMovies} />
            <Route path="/login" exact component={Auth} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Created By Ross Woolfenden for Lumia Learning Graduate Assessment</Footer>
        </Layout>

    </Router>
    
  );
}

export default App;
