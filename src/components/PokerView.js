//import handEvaluator from './HandCalculator';
import React, {Component} from 'react';
import {Button, Card, CardImg, Figure, Container, Row, Col} from 'reactstrap'

function fillDeck () {

    return new Array(53).fill(0).map((value, index) => index+1);

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
            deck: fillDeck()

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
                deck: [...deck],
                handA: [...a],
                handB: [...b],
                tableCards: [...table]
            });

        }
    }

    table = () => {

        return (
            <>
                
                    <Col><Card>
                            <CardImg src={`/images/${this.state.tableCards[0]}.svg`} />
                        </Card></Col>
                    <Col><Card>
                            <CardImg src={`/images/${this.state.tableCards[1]}.svg`} />
                        </Card></Col>
                    <Col><Card>
                            <CardImg src={`/images/${this.state.tableCards[2]}.svg`} />
                        </Card></Col>
                    <Col><Card>
                            <CardImg src={`/images/${this.state.tableCards[3]}.svg`} />
                        </Card></Col>
                    <Col><Card>
                            <CardImg src={`/images/${this.state.tableCards[4]}.svg`} />
                        </Card></Col>
                      

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
                        </Col>
                        <this.table />
                        <Col>
                            <this.rightHand />
                        </Col>
                        
                    </Row>
                    
                </Container>
                
                
                



                </div>
                    
            );
    }
}
