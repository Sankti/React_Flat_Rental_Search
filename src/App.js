import React from 'react';
import './App.css'

import Header from './components/header/header.component';
import SearchBox from './components/search-box/search-box.component';
import WarsawMap from './components/warsaw-map/warsaw-map.component';
import ButtonOption from './components/button-option/button-option.component';
import ButtonExecute from './components/button-execute/button-execute.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      bialoleka: false,
      bielany: false,
      bemowo: false,
      ursus: false,
      wlochy: false,
      pragapn: false,
      srodmiescie: false,
      targowek: false,
      zoliborz: false,
      wola: false,
      ochota: false,
      rembertow: false,
      wesola: false,
      pragapd: false,
      wawer: false,
      mokotow: false,
      wilanow: false,
      ursynow: false,
      vistula: false,
      gumtree: false,
      olx: false,
      nieruchomosci: false,
      queryGumtree: "https://www.gumtree.pl/s-mieszkania-i-domy-do-wynajecia/warszawa/v1c9008l3200008p1?q=",
      queryOlx: "https://www.olx.pl/nieruchomosci/mieszkania/wynajem/warszawa/q-",
      queryNieruchomosci: "https://warszawa.nieruchomosci-online.pl/szukaj.html?3,mieszkanie,wynajem,,Warszawa "
    };
  };

  changeSearchField = (event) => {
    this.setState({ searchField: event.target.value });
  };

  changeStateClick = (event) => {
    let state = event.target.id;
    console.log(state);

    switch(state) {
      case "bialoleka":
        this.setState({bialoleka: !this.state.bialoleka});
        break;
      case "bielany":
        this.setState({bielany: !this.state.bielany});
        break;
      case "bemowo":
        this.setState({bemowo: !this.state.bemowo});
        break;
      case "ursus":
        this.setState({ursus: !this.state.ursus});
        break;
      case "wlochy":
        this.setState({wlochy: !this.state.wlochy});
        break;
      case "pragapn":
        this.setState({pragapn: !this.state.pragapn});
        break;
      case "srodmiescie":
        this.setState({srodmiescie: !this.state.srodmiescie});
        break;
      case "targowek":
        this.setState({targowek: !this.state.targowek});
        break;
      case "zoliborz":
        this.setState({zoliborz: !this.state.zoliborz});
        break;
      case "wola":
        this.setState({wola: !this.state.wola});
        break;
      case "ochota":
        this.setState({ochota: !this.state.ochota});
        break;
      case "rembertow":
        this.setState({rembertow: !this.state.rembertow});
        break;
      case "wesola":
        this.setState({wesola: !this.state.wesola});
        break;
      case "pragapd":
        this.setState({pragapd: !this.state.pragapd});
        break;
      case "wawer":
        this.setState({wawer: !this.state.wawer});
        break;
      case "mokotow":
        this.setState({mokotow: !this.state.mokotow});
        break;
      case "wilanow":
        this.setState({wilanow: !this.state.wilanow});
        break;
      case "ursynow":
        this.setState({ursynow: !this.state.ursynow});
        break;
      case "vistula":
        this.setState({vistula: !this.state.vistula});
        break;
      case "gumtree":
        this.setState({gumtree: !this.state.gumtree});
        break;
      case "olx":
        this.setState({olx: !this.state.olx});
        break;
      case "nieruchomosci":
        this.setState({nieruchomosci: !this.state.nieruchomosci});
        break;
      default:
        console.log("No district selected.");
    };
    console.log(this.state);
  };

  getDistricts = (website) => {
    let chosenDistricts = [];
      if (this.state.bialoleka) {chosenDistricts.push("Białołęka");};
      if (this.state.bielany) {chosenDistricts.push("Bielany");};
      if (this.state.bemowo) {chosenDistricts.push("Bemowo");};
      if (this.state.bielany) {chosenDistricts.push("Ursus");};
      if (this.state.wlochy) {chosenDistricts.push("Włochy");};
      if (this.state.pragapn) {chosenDistricts.push("Praga", "Północ");};
      if (this.state.srodmiescie) {chosenDistricts.push("Śródmieście");};
      if (this.state.targowek) {chosenDistricts.push("Targówek");};
      if (this.state.zoliborz) {chosenDistricts.push("Żoliborz");};
      if (this.state.wola) {chosenDistricts.push("Wola");};
      if (this.state.ochota) {chosenDistricts.push("Ochota");};
      if (this.state.rembertów) {chosenDistricts.push("Rembertów");};
      if (this.state.wesola) {chosenDistricts.push("Wesoła");};
      if (this.state.pragapd) {chosenDistricts.push("Praga", "Południe");};
      if (this.state.wawer) {chosenDistricts.push("Wawer");};
      if (this.state.mokotow) {chosenDistricts.push("Mokotów");};
      if (this.state.wilanow) {chosenDistricts.push("Wilanów");};
      if (this.state.ursynow) {chosenDistricts.push("Ursynów");};
      if (this.state.vistula) {chosenDistricts.push("Wisła");};
      chosenDistricts.push(this.state.searchField);
      
      if (website.includes("gumtree")) {
        return chosenDistricts.join("+");
      } else if (website.includes("olx")) {
        return chosenDistricts.join("-");
      } else if (website.includes("nieruchomosci")) {
        return chosenDistricts.join(" ");
      };
    };

  changeWebsiteQuery = (website) => {
    let newQuery = "";
    switch(website) {
      case "gumtree":
        newQuery = this.getDistricts("gumtree");
        this.setState({queryGumtree: "https://www.gumtree.pl/s-mieszkania-i-domy-do-wynajecia/warszawa/v1c9008l3200008p1?q="});
        this.setState({queryGumtree: this.state.queryGumtree.concat(newQuery)});
        break;
      case "olx":
        newQuery = this.getDistricts("olx");
        this.setState({queryOlx: "https://www.olx.pl/nieruchomosci/mieszkania/wynajem/warszawa/q-"});
        this.setState({queryOlx: this.state.queryOlx.concat(newQuery)});
        break;
      case "nieruchomosci":
        newQuery = this.getDistricts("nieruchomosci");
        this.setState({queryNieruchomosci: "https://warszawa.nieruchomosci-online.pl/szukaj.html?3,mieszkanie,wynajem,,Warszawa "});
        this.setState({queryNieruchomosci: this.state.queryNieruchomosci.concat(newQuery)});
        break;
      default:
        console.log("No website selected.");
    };
  };

  executeClick = () => {
    if (this.state.gumtree) {
      this.changeWebsiteQuery("gumtree");
      setTimeout(() => {
        window.open(this.state.queryGumtree)
      }, 100);
    };
    if (this.state.olx) {
      this.changeWebsiteQuery("olx");
      setTimeout(() => {
        window.open(this.state.queryOlx)
      }, 100);
    };
    if (this.state.nieruchomosci) {
      this.changeWebsiteQuery("nieruchomosci");
      setTimeout(() => {
        window.open(this.state.queryNieruchomosci)
      }, 100);
    };
    console.log(this.state);
  };
  
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="user-panel">
            <p>
              Kliknij na dzielnice, dla których chcesz zobaczyć ogłoszenia.<br />
              {/* Wybrane dzielnice: {this.state.chosenDistricts.join(", ")} */}
            </p>
            <p>
              Dodatkowe tagi: <SearchBox placeholder="Wpisz swoje tagi" handleChange={this.changeSearchField} /><br />
              Wybierz, jakie wyszukiwarki uwzględnić w zapytaniu:<br />
            </p>
            <ButtonOption id="gumtree" pushFunction={this.changeStateClick.bind(this)} text="Gumtree" buttonState={this.state.gumtree} />
            <ButtonOption id="olx" pushFunction={this.changeStateClick.bind(this)} text="OLX" buttonState={this.state.olx} />
            <ButtonOption id="nieruchomosci" pushFunction={this.changeStateClick.bind(this)} text="Nieruchomości-Online" buttonState={this.state.nieruchomosci} />
            <br />
            <ButtonExecute pushFunction={this.executeClick.bind(this)} text="Pokaż wyniki" />

          </div>
          <WarsawMap pathClick={this.changeStateClick.bind(this)} state={this.state} />
        </div>
      </div>
    )
  }
};

export default App;