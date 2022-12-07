import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAl-XghXzVClVpAK2vsLYS1Nb7vOLF6xtg");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.fromLatLng("48.8583701", "2.2922926").then(
  (response) => {
    let city, state, country;
    for (let i = 0; i < response.results[0].address_components.length; i++) {
      for (
        let j = 0;
        j < response.results[0].address_components[i].types.length;
        j++
      ) {
        switch (response.results[0].address_components[i].types[j]) {
          case "locality":
            city = response.results[0].address_components[i].long_name;
            break;
          case "administrative_area_level_1":
            state = response.results[0].address_components[i].long_name;
            break;
          case "country":
            country = response.results[0].address_components[i].long_name;
            break;
        }
      }
    }
  },
  (error) => {
    console.error(error);
  }
);
