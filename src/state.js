import { reactive } from "vue"
import axios from "axios"

export const state = reactive(
  {
    apiCardsUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cards: [],
    numberOfCards: null,
    startingCard: 0,
    filter: "",
    loading: true,
    archetypes: [],
    /**
     * Makes a first call to the API to retrieve the total number of cards
     * @param {string} apiToFetch The URL to call with Axios
     */
    retrieveNumberOfCards(apiToFetch) {
      axios.get(apiToFetch)
      .then(response => {
        this.numberOfCards = response.data.data.length;
        this.startingCard = this.generateStartingCard(this.numberOfCards);
        this.fetchCardsToUse(this.startingCard, this.apiCardsUrl);
      })
      .catch(error => {
        console.error(error.message);
      })
    },
    /**
     * Returns a random number between 0 and the total number of cards - 50
     * @param {number} totalCards The total number of cards retrieved after the API call
     * @returns {number} A random number between 0 and the total number of cards - 50. -50 because we want to show 50 items on our page
     */
    generateStartingCard(totalCards) {
      if (totalCards >= 50) {
        return Math.floor(Math.random() * (totalCards - 50));
      } else {
        return 0;
      }
    },
    /**
     * Make the definitive API call to retrieve 50 random cards, starting from the random index generated with the generateStartingCard method
     * @param {number} number The index of the first card to fetch
     * @param {string} api The URL to call with Axios
     */
    fetchCardsToUse(number, api) {
      let url = "";
      if (this.numberOfCards >= 50) {
        url = `${api}?num=50&offset=${number}`;
      } else {
        url = `${api}?num=${this.numberOfCards}&offset=0`;
      }
      axios.get(url)
      .then(response => {
        this.cards = response.data.data;
        this.loading = false;
      })
      .catch(error => {
        console.error(error.message);
      })
    },
  }
)