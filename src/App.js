import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css"
import Row from './Row';
function App() {
  return (
    <div className="App">
      {/* Body */}
      {/*<Card title="Starter" price={0} description="Per User,Per Month" buttonTitle="Go Starter"/>*/}
      <div className="container">
      <table class="table table-striped table-borderless">
          <thead>
            <tr>
              <th scope="col"><bold className="feature">Features</bold></th>
              <th scope="col"><Card title="Starter" price={0} description="Per user,per month" buttonTitle="Go Starter"/></th>
              <th scope="col"><Card title="Professional" price={25} description="Per user,per month" buttonTitle="Go Professional"/></th>
              <th scope="col"><Card title="Organization" price={50} description="Per user,per month" buttonTitle="Go Organization"/></th>
              
            </tr>
          </thead>
          <tbody>
            <Row name="Centralized Teams" first="yes" second="yes" third="yes"/>
            
            <Row name="Version history" first="yes" second="yes" third="yes"/>
            
            <Row name="Plugin administration" first="yes" second="yes" third="yes"/>
            <Row name="Facebook & Instagram Ads" first="no" second="yes" third="yes"/>
            <Row name="Design System Analytics" first="no" second="no" third="yes"/>
            <Row name="Unlimited cloud storage" first="no" second="no" third="no"/>
            
            
            
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default App;
