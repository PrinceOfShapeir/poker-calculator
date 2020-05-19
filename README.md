# PokerCalculator
A simple mechanism to calculate the strength of any poker hand. (According to Texas Holdem Rules)

The only function here you need to bother with is handEvaluator. This yields a floating point number which increases as the absolute hand strength increases.

The underlying algorithm by which ranking is preserved, was developed in a totally arbitrary manner by pounding out values into an excel spreadsheet. I do not claim that the expressions used are elegant or evidence of any proper mathematical technique, as these are foreign concepts in my home country.

As usually goes, baby's first poker app will likely contain an explicit char or string mapping, because that most closely resembles the real life game. Of course, coding a calculator for such a mapping is ludicrously complex. Since Poker is a mathematical game, I figured it would be simpler in the long term to come up with a bunch of universal expressions which take a single integer input, and return a single numerical output. Although the actual code used is inelegant garbage, it is conceptually sound.

The way to compare the output of handEvaluator is as follows:

hands = 1, 2, 3, 4.

Max (handEvaluator(1),handEvaluator(2)...)

