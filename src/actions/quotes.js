/*
TODO: Create action creators as defined in tests:
these are the actions that are dispatching ot the reducer, when our reducer
goes through it's switch statment these are what it will be stopping at
and then action.quoteid will be avaliable to us by these actions

Quotes Actions:
1. addQuote(quote: {})
        should return an Object with a type of "ADD_QUOTE" and a quote object:
2. removeQuote(quoteId: Integer)
         should return an Object with a type of "REMOVE_QUOTE" and a quoteId:
3. upvoteQuote(quoteId: Integer)
        should return an Object with a type of "UPVOTE_QUOTE" and a quoteId:
4.   downvoteQuote(quoteId: INteger)
         should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId:
*/

//should return an Object with a type of "ADD_QUOTE" and a quote object:
export const addQuote = quote => {
    return {
        type: "ADD_QUOTE",
        quote
    }
}

//should return an Object with a type of "REMOVE_QUOTE" and a quoteId
export const removeQuote = quoteId => {
    return {
        type: "REMOVE_QUOTE",
        quoteId
    }
}

//should return an Object with a type of "UPVOTE_QUOTE" and a quoteId:
export const upvoteQuote = quoteId => {
    return {
        type: "UPVOTE_QUOTE",
        quoteId
    }
}

//should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId:
export const downvoteQuote = quoteId => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }
}
