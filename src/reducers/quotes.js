export default (state = [], action) => {
  
  let indx
  let altQuote
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      indx = state.findIndex(quote => quote.id === action.quoteId)
      altQuote = {...state[indx]}
      altQuote.votes = altQuote.votes + 1
      return [...state.slice(0, indx), altQuote, ...state.slice(indx + 1, state.length)]
    case 'DOWNVOTE_QUOTE':
      indx = state.findIndex(quote => quote.id === action.quoteId)
      altQuote = {...[indx]}
      altQuote.votes = (altQuote.votes > 0 ? altQuote.votes - 1 : 0)
      return [...state.slice(0, indx), altQuote, ...state.slice(indx + 1, state.length)]
    default:
      return state
    }
}
