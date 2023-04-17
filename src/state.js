import { reactive } from "vue"
import axios from "axios"

export const state = reactive(
  {
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cards: [],
    numberOfCards: null,
    startingCard: 0,
    types: [],
    filter: "",
    loading: true,
    /**
     * Makes a first call to the API to retrieve the total number of cards
     * @param {string} apiToFetch The URL to call with Axios
     */
    retrieveNumberOfCards(apiToFetch) {
      axios.get(apiToFetch)
      .then(response => {
        this.numberOfCards = response.data.data.length;
        this.startingCard = this.generateStartingCard(this.numberOfCards);
        this.fetchCardsToUse(this.startingCard, this.apiUrl);
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
      const startingCard = Math.floor(Math.random() * ((totalCards - 50) + 1));
      return startingCard;
    },
    /**
     * Make the definitive API call to retrieve 50 random cards, starting from the random index generated with the generateStartingCard method
     * @param {number} number The index of the first card to fetch
     * @param {string} api The URL to call with Axios
     */
    fetchCardsToUse(number, api) {
      axios.get(`${api}?num=50&offset=${number}`)
      .then(response => {
        this.cards = response.data.data;
        this.retrieveTypes(this.cards);
      })
      .catch(error => {
        console.error(error.message);
      })
    },
    /**
     * Returns the types of cards fetched with the API call
     * @param {array} cards The array of fetched cards
     */
    retrieveTypes(cards) {
      cards.forEach(card => {
        if(!this.types.includes(card.type)) {
          this.types.push(card.type)
        }
      })
      this.loading = false;
    }
  }
)