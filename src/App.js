import React, { Component } from 'react';
import './App.css';
import STORE from './STORE'
import FeatureList from './Feature-List'
import Total from './Total'
import SummaryList from './Summary-List'

class App extends Component {
  state = {
    selected: STORE
  };


  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form" key="1">
            <h2>Customize your laptop</h2>
            {<FeatureList
              feature={this.props.features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
            />}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {<SummaryList
              selected={this.state.selected}
            />}
            {<Total
              selected={this.state.selected}
            />}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
