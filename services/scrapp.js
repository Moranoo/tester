import axios from 'axios';
import cheerio from 'cheerio';

class Scraper {
  constructor(url) {
    this.url = url;
  }

  async scrape() {
    try {
      const response = await axios.get(this.url);
      const html = response.data;
      const $ = cheerio.load(html);
      // ici vous pouvez utiliser la bibliothèque cheerio pour extraire les données dont vous avez besoin de la page html
      // Par exemple, pour extraire tous les liens sur la page:
      const links = $('a');
      console.log(links);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Scraper;
