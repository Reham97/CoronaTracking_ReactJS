import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import Cards from './components/Cards/cards.js';
import Chart from './components/Chart/chart.js';
import CountryPicker from './components/CountryPicker/country_picker.js';

import { fetchData } from "./api/index";
import image from './images/image.png';

class App extends React.Component {
  // like a constructor 
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (

      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;


 // why styles.container 
 // to prevent interferance