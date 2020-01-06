export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      const newArray = state.filter(quote => quote.id !== action.quoteId)
      return newArray

    case "UPVOTE_QUOTE":
      var quote = state.find(quote => quote.id === action.quoteId)
      var index = state.indexOf(quote)
      var updatedQuote = {
        ...quote,
        votes: quote.votes + 1
      }

      return [...state.slice(0, index), updatedQuote, ...state.slice(index + 1, state.length)]


    case "DOWNVOTE_QUOTE":
        var quote = state.find(quote => quote.id === action.quoteId)
        var index = state.indexOf(quote)
        var updatedQuote = {
          ...quote,
          votes: quote.votes > 0 ? (quote.votes -1) : 0
        }
  
        return [...state.slice(0, index), updatedQuote, ...state.slice(index + 1, state.length)]


    default:
    return state
  }
}
