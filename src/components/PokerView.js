//import handEvaluator from './HandCalculator';
import React, {Component} from 'react';
import {UncontrolledTooltip, Button, Card, CardImg, Figure, Container, Row, Col} from 'reactstrap';
import {handEvaluator, thirteen} from './HandCalculator';

function fillDeck () {

    return new Array(52).fill(0).map((value, index) => index+1);

}

function winsOrLoses (a,b) {

    if(a===b) return "Tied"
    else return (a>b) ? "Wins" : "Loses";

}

function highCardKicker (hand, table) {

    let value = Math.max(...hand.concat(table).map(val=>thirteen(val)));


    switch(value) {

        case 13:
            return "an Ace "
        case 12:
            return "a King "
        case 11:
            return "a Queen "
        case 10:
            return "a Jack "
        case 9:
            return "a Ten "
        case 8:
            return "a Nine "
        case 7:
            return "an Eight "
        case 6:
            return "a Seven "
        case 5:
            return "a Six "
        case 4:
            return "a Five "
        case 3:
            return "a Four "
        case 2:
            return "a Three "
        case 1:
            return "a Two "
        default:
            return "nothing "
        
    }

}


function handName (value, hand, table, determine=false) {
    const determiner = () => (determine) ? "a " : "";

    if(value>=7000) return determiner() + "Straight Flush";
    else if (value>=6000) return "Four of a Kind";
    else if (value>=5000) return determiner() + "Full House";
    else if (value>=4000) return determiner() + "Flush";
    else if (value>=3500) return determiner() + "Straight";
    else if (value>=3000) return "Three of a Kind";
    else if (value>=2500) return "Two Pair";
    else if (value>=2000) return determiner() + "Pair";
    else return highCardKicker(hand, table) + "High Card";
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
            leftWins: (localStorage.getItem("leftWins")) ? parseInt(localStorage.getItem("leftWins")) : 0,
            rightWins: (localStorage.getItem("rightWins")) ? parseInt(localStorage.getItem('rightWins')) : 0,
            ties: (localStorage.getItem("ties")) ? parseInt(localStorage.getItem('ties')) : 0,
            deck: fillDeck(),
            debug: false,
            handAValue: 0,
            handBValue: 0,
            flop: false,
            turn: false,
            river: false,
            displayCards: false, 
            dealt: false,
            revealRight: false,
            revealLeft: false,
            orientationLocked : false,
            revealWinner: false,
            winCounted: false,
            chips: [500,500],
            bets: [0,0]

        }

        this.betHands = (hand, chips) => {

            if(hand===0){

                if(this.state.chips[hand]>=chips) {
                    return this.setState({
                        chips: [this.state.chips[hand]-chips, this.state.chips[1]],
                        bets: [this.state.bets[hand]+chips, this.state.bets[1]]
                    })
                }

            } else {

                
                if(this.state.chips[hand]>=chips) {
                    return this.setState({
                        chips: [this.state.chips[0], this.state.chips[hand]-chips],
                        bets: [this.state.bets[0], this.state.bets[hand]+chips]
                    })
                }


            }

            

        }

        this.countWins = () => {

            if(this.state.dealt&&this.state.river&&!this.state.winCounted) {

                if(!isNaN(this.state.handAValue)&&!isNaN(this.state.handBValue)) {

                    let a = (this.state.handAValue>=this.state.handBValue) ? (this.state.handAValue>this.state.handBValue) ?  1 : 0 
                    : -1;
                    let b = (this.state.handBValue>=this.state.handAValue) ? (this.state.handBValue>this.state.handAValue) ?  1 : 0 
                    : -1;
                    this.setState({winCounted: true})

                    if(a>0) return localStorage.setItem("leftWins", this.state.leftWins + a), this.setState({leftWins: this.state.leftWins + a}), this.divideChips(0);
                    else if(b>0) return localStorage.setItem("rightWins", this.state.rightWins + b), this.setState({rightWins: this.state.rightWins + b}), this.divideChips(1);
                    else if(a===b===0) return localStorage.setItem("ties", this.state.ties + 1), this.setState({ties: this.state.ties + 1}), this.divideChips(-1);


                } else console.log("Error, non numeric hand value");


            }
            
        }

        this.divideChips = (result) => {

                if(result>=1) return this.setState({
                    chips: [this.state.chips[0], this.state.chips[1]+this.state.bets.reduce((a,b)=>a+b)],
                    bets: [0,0]
                });
                else if(result===0) return this.setState({
                    chips: [this.state.chips[0]+this.state.bets.reduce((a,b)=>a+b), this.state.chips[1]],
                    bets: [0,0]
                }); else return this.setState({
                    chips: [this.state.chips[0]+this.state.bets[0], this.state.chips[1] + this.state.bets[1]],
                    bets: [0,0]
                })


        }

        this.fold = (player) => {

            return this.divideChips(player ? 0 : 1);

        }

        this.lockOrientation = () => {
            this.setState({
                orientationLocked: true
            })
        }

        this.showDebug = () => {
            this.setState({
                debug: !this.state.debug
            })
        }
        this.revealAll = () => {
            this.setState({
                revealLeft: true,
                revealRight: true,
                flop: true,
                turn: true,
                river: true
            })
        }

        this.revealLeft = () => {
            this.setState({
                revealLeft: !this.state.revealLeft
            })
        }
        this.revealRight = () => {
            this.setState({
                revealRight: !this.state.revealRight
            })
        }
        this.flopCards = () =>{
            this.setState({
                flop: !this.state.flop
            })
        }
        this.turnCards = () =>{
            this.setState({
                turn: !this.state.turn
            })
        }
        this.riverCards = () =>{
            this.setState({
                river: !this.state.river
            })
        }
        this.revealWinners = () => {
            this.countWins();
            return this.setState({
                revealWinner: !this.state.revealWinner
            });
        }

        this.dealHand = () => {

            this.countWins();

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
            
            console.log([...a, ...table]);
            this.setState({
                //deck: [...deck],
                handA: [...a],
                handB: [...b],
                tableCards: [...table],
                handAValue: handEvaluator([...a, ...table]),
                handBValue: handEvaluator([...b, ...table]),
                dealt: true,
                flop: false,
                river: false,
                turn: false, 
                revealRight: false,
                revealLeft: false,
                revealWinner: false,
                winCounted: false
            });

        }
    }

    table = () => {

        let builder = [];

        for(let i in this.state.tableCards){

            builder.push(

                <>
                    
                            <Col><Card onClick={(i<=2) ? this.flopCards : ((i<=3) ? this.turnCards : this.riverCards)}
                            className={(this.state.flop&&i<=2) ? "flipCard" : ((this.state.turn&&i<=3) ? "flipCard" : ((this.state.river&&i<=4) ? "flipCard" : ""))}
                            
                            >
                                <CardImg 

                                
                                
                                src={((i<=2&&this.state.flop)||(i<=3&&this.state.turn)||(i<=4&&this.state.river)) ? `./images/${this.state.tableCards[i]}.svg` : `./images/53.svg`} />
                            </Card><p>{(this.state.debug) ? this.state.tableCards[i] +
                                " (" + (thirteen(this.state.tableCards[i])+1) + ")": ""}</p></Col>
                
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
           
            <Card onClick={this.revealLeft}
                className={(this.state.revealLeft) ? "flipCard" : "" }
            >
                <CardImg src={(this.state.revealLeft) ? `./images/${this.state.handA[0]}.svg` : './images/53.svg'} />
            </Card>
            <Card onClick={this.revealLeft}
                className={(this.state.revealLeft) ? "flipCard" : "" }
                >
                <CardImg src={(this.state.revealLeft) ? `./images/${this.state.handA[1]}.svg` : './images/53.svg'} />
            </Card>
            
            </>

        )

    }

    rightHand = () => {

        return (
            <>

            
            <Card onClick={this.revealRight}
                className={(this.state.revealRight) ? "flipCard" : "" }
            >
                <CardImg src={(this.state.revealRight) ? `./images/${this.state.handB[0]}.svg` : './images/53.svg' } />
            </Card>
            <Card onClick={this.revealRight}
                className={(this.state.revealRight) ? "flipCard" : "" }
                >
                <CardImg src={(this.state.revealRight) ? `./images/${this.state.handB[1]}.svg` : './images/53.svg'} />
            </Card>
            
            </>

        )

    }


    render() {
            return (
                <div className="text-center" style={{
                    backgroundColor: "#4caf50",
                    border: "thick solid #A0522D",
                    minHeight: "100vh",
                    height: '100%'
                }}>
                    {(() => {if (!this.state.orientationLocked){
                        screen.lockOrientation('landscape');
                        this.lockOrientation();
                    }})}
                    <h1>Compare two Poker Hands</h1>

                    <p>Deal two poker hands and then guess which one is the winner.</p>

                    <Button onClick={this.dealHand}>
                        Shuffle and Deal.
                    </Button>
                    <>{(this.state.dealt&&!this.state.flop) ? <Button onClick={this.flopCards}>Reveal Flop</Button> : "" }</>
                    <>{(this.state.dealt&&this.state.flop&&!this.state.turn) ? <Button onClick={this.turnCards}>Reveal Turn</Button> : "" }</>
                    <>{(this.state.dealt&&this.state.turn&&!this.state.river) ? <Button onClick={this.riverCards}>Reveal River</Button> : "" }</>
            

                <Container fluid>
                    <Row>
                        <Col xs="2">
                            <this.leftHand />
                            <Button onClick={this.revealLeft}>Reveal Hand</Button>
                            <p>{this.state.chips[0]}</p>
                            <Button onClick={()=>this.fold(0)}>Fold</Button>
                            <Button onClick={()=>this.betHands(0,5)}>Bet 5 Chips</Button>
                            
                        </Col>
                        <Col xs="8">
                        <Row>
                            <this.table />
                        </Row>
                        
                        <Row style={{fontSize:15}}>
                            <Col>
                                <p>{(this.state.debug) ? this.state.handAValue : ""}</p>
                                <p>{(this.state.debug) ? this.state.handA.toString() + 
                                " (" + 
                                this.state.handA.map(val => 
                                thirteen(val+1)).toString() + ")" : ""}</p>
                                <p>{(this.state.river&&this.state.revealWinner) ? `Left ${winsOrLoses(this.state.handAValue,this.state.handBValue)} with ${handName(this.state.handAValue, this.state.handA, this.state.tableCards, true)}!` : ""}</p>
                                <p>{(this.state.river&&this.state.revealWinner) ? `Left total wins: ${this.state.leftWins}` : ""}</p>
                               

                            </Col>
                            <Col>
                                <Button onClick={this.revealWinners}>
                                    Reveal Winner
                                </Button>
                                <p>{this.state.bets.reduce((a,b)=>a+b)}</p>
                                <p>{(this.state.river&&this.state.revealWinner) ? `Total ties: ${this.state.ties}` : ""}</p>
                            </Col>
                            <Col>
                                <p>{(this.state.debug) ? this.state.handBValue : ""}</p>
                                <p>{(this.state.debug) ? this.state.handB.toString() + 
                                " (" + this.state.handB.map(val => 
                                    thirteen(val+1)).toString() + ")" 
                                    : ""}</p>
                                <p>{(this.state.river&&this.state.revealWinner) ? `Right ${winsOrLoses(this.state.handBValue, this.state.handAValue)} with ${handName(this.state.handBValue, this.state.handB, this.state.tableCards, true)}!`: ""}</p>
                                <p>{(this.state.river&&this.state.revealWinner) ? `Right total wins: ${this.state.rightWins}` : ""}</p>
                            </Col>
                        </Row>
                        </Col>
                        <Col xs="2">
                            <this.rightHand />
                            <Button onClick={this.revealRight}>Reveal Hand</Button>
                            <p>{this.state.chips[1]}</p>
                            <Button onClick={()=>this.fold(1)}>Fold</Button>
                            <Button onClick={()=>this.betHands(1,5)}>Bet 5 Chips</Button>
                        </Col>
                        
                        
                    </Row>
                    </Container>

                    <p>See an error? Please copy the debug info, and file a report on our <a href="https://github.com/PrinceOfShapeir/poker-calculator">Github page.</a></p>
                    <Button onClick={this.showDebug}>
                        Show debug info
                    </Button>
                    {//note aces will display as (14), this is not a bug, as "8" is actually the "7th" card
                     //the display values on the right are for convenience and do not factor into any calculations
                    }
                    <>{(this.state.debug) ? <Button onClick={navigator.clipboard.writeText(this.state.handA.toString() + "," + this.state.tableCards.toString() + "," + this.state.handB.toString())}>Copy Debug Info</Button> : ""}</>
                    <>{((!this.state.revealLeft||!this.state.revealRight||!this.state.flop||!this.state.turn||!this.state.river)&&this.state.dealt) ? <Button onClick={this.revealAll}>Reveal All</Button> : ""}</>

                
                
                
                



                </div>
                    
            );
    }
}
