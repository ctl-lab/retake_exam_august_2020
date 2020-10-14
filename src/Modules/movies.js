import axios from "axios";

const Movies = {
  async index() {
    let result = await axios.get("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga");
    
    return result.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
  },
};
export {Movies};