export default (state = [], action) => {

  let idx
  let updatedQuote
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      const newArr = state.filter(quote => quote.id !== action.quoteId)
      return newArr
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      updatedQuote = {...state[idx]}

      updatedQuote.votes = updatedQuote.votes + 1
      return [...state.slice(0, idx), updatedQuote, ...state.slice(idx +1, state.length)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      updatedQuote = {...state[idx]}

      updatedQuote.votes = (updatedQuote.votes > 0 ? updatedQuote.votes - 1 : 0)
      return [...state.slice(0, idx), updatedQuote, ...state.slice(idx +1, state.length)]
    default:
      return state
  }
}