# PokerCalculator
A simple mechanism to calculate the strength of any poker hand. (According to Texas Holdem Rules)

The only function here you need to bother with is handEvaluator. This yields a floating point number which increases as the absolute hand strength increases.

The underlying algorithm by which ranking is preserved, was developed in a totally arbitrary manner by pounding out values into an excel spreadsheet. I do not claim that the expressions used are elegant or evidence of any proper mathematical technique..

As usually goes, one's first poker app will likely contain an explicit char or string mapping, because that most closely resembles the real life game. Of course, coding a calculator for such a mapping is quite arduous. Since Poker is a mathematical game, I figured it would be simpler in the long term to come up with a bunch of universal expressions which take a single integer input, and return a single numerical output. Although the actual code used is inelegant, it is conceptually sound.

Cards are represented by the numbers 1-52. Suits are represented by consecutive blocks of 13 integers ascending in the order Clubs, Hearts, Spades, Diamonds. The individual cards can be derived for higher suits by the result of a modulo operation, e.g. 13 -> 26 : Ace of Diamonds -> Ace of Spades. We use the zero index as a placeholder for the low Ace in a straight. 

The way to compare the output of handEvaluator is as follows:

hands = a,b,c,d, where each hand includes two hidden cards, and five table cards. The handEvaluator returns the maximum value given any set of seven cards. 
The winning hand is the maximum of (handEvaluator(a),handEvaluator(b)...)

