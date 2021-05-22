# PokerCalculator
A simple mechanism to calculate the strength of any poker hand. (According to Texas Holdem Rules)

Cards are represented by the numbers 1-52. Suits are represented by consecutive blocks of 13 integers ascending in the order Clubs, Hearts, Spades, Diamonds. The individual cards can be derived for higher suits by the result of a modulo operation, e.g. 13 -> 26 : Ace of Diamonds -> Ace of Spades. We use the zero index as a placeholder for the low Ace in a straight. 

The way to compare the output of handEvaluator is as follows:

hands = a,b,c,d, where each hand includes two hidden cards, and five table cards. The handEvaluator returns the maximum value given any set of seven cards. 
The winning hand is the maximum of (handEvaluator(a),handEvaluator(b)...)



** Cards obtained from https://tekeye.uk/playing_cards/svg-playing-cards 

#Live Version Features

* Heads up poker simulation 
* Simulated betting 
* Win statistics saved in local storage
