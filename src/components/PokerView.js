//import handEvaluator from './HandCalculator';
import React, {Component} from 'react';
import {UncontrolledTooltip, Button, Card, CardImg, Figure, Container, Row, Col} from 'reactstrap';
import {handEvaluator} from './HandCalculator';
function fillDeck () {

    return new Array(52).fill(0).map((value, index) => index+1);

}

function winsOrLoses (a,b) {

    if(a===b) return "Tied"
    else return (a>b) ? "Wins" : "Loses";

}

function shuffleDeck (times, cards) {
    let deck = [...cards]
    for(let i = 0; i<times; i++){

        for(let i in deck){

            let swap = Math.floor(Math.random() * Math.floor(52));
            
            [deck[i],deck[swap]] = [deck[swap], deck[i]];
        }

    }

    return deck;

}



export default class PokerView extends Component {

    constructor(props){
        super(props);
        this.state = {

            //53 is the face down image
            tableCards: [53,53,53,53,53],
            handA: [53,53],
            handB: [53,53],
            handsPlayed: 0,
            leftWins: 0,
            rightWins: 0,
            ties: 0,
            deck: fillDeck(),
            dealt: false,
            handAValue: 0,
            handBValue: 0

        }



        this.dealHand = () => {

            let [a,b,table, deck] = [[],[],[], this.state.deck];

            deck = shuffleDeck(5,deck);

            //deal to players
            a.push(deck.pop());
            b.push(deck.pop());
            a.push(deck.pop());
            b.push(deck.pop());
            //burn 1
            deck.pop();
            //flop
            table.push(deck.pop());
            table.push(deck.pop());
            table.push(deck.pop());
            //burn 2
            deck.pop();
            //turn card
            table.push(deck.pop());
            //burn 3
            deck.pop();
            //river
            table.push(deck.pop());
            
            this.setState({
                //deck: [...deck],
                handA: [...a],
                handB: [...b],
                tableCards: [...table],
                dealt: true,
                handAValue: handEvaluator([...a], [...table]),
                handBValue: handEvaluator([...b], [...table])
            });

        }
    }

    table = () => {

        let builder = [];

        for(let i in this.state.tableCards){

            builder.push(

                <>
                    
                            <Col><Card>
                                <CardImg 
                                
                                src={`/images/${this.state.tableCards[i]}.svg`} />
                            </Card></Col>
                
                </>
                
                    

            )
        }

        return (
            <>
                    {builder}

            </>

        )

    }
    
    leftHand = () => {

        return (
            <>

            <Card>
                <CardImg src={`/images/${this.state.handA[0]}.svg`} />
            </Card>
            <Card>
                <CardImg src={`/images/${this.state.handA[1]}.svg`} />
            </Card>
            
            </>

        )

    }

    rightHand = () => {

        return (
            <>

            <Card>
                <CardImg src={`/images/${this.state.handB[0]}.svg`} />
            </Card>
            <Card>
                <CardImg src={`/images/${this.state.handB[1]}.svg`} />
            </Card>
            
            </>

        )

    }


    render() {
            return (
                <div className="text-center">
                    <h1>Compare two Poker Hands</h1>

                    <p>Deal two poker hands and then guess which one is the winner.</p>

                    <Button onClick={this.dealHand}>
                        Shuffle and Deal.
                    </Button>
                <Container fluid>
                    <Row>
                        <Col>
                            <this.leftHand />
                            <p>{(this.state.dealt) ? this.state.handAValue : 0}</p>
                            <p>{winsOrLoses(this.state.handAValue,this.state.handBValue)}</p>
                        </Col>
                        <this.table />
                        <Col>
                            <this.rightHand />
                            <p>{(this.state.dealt) ? this.state.handBValue : 0}</p>
                            <p>{winsOrLoses(this.state.handBValue, this.state.handAValue)}</p>
                        </Col>
                        
                    </Row>
                    
                </Container>
                
                
                



                </div>
                    
            );
    }
}
