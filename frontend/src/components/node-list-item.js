import React, { Component } from 'react'
import './node-list.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Moment from 'react-moment';
import Badge from 'react-bootstrap/Badge';

import styled from 'styled-components'

const ListItem = styled.p`
width: 100%;

background: #5008FF;
border-radius: 16px;
margin-top: 20px;

display: flex;
flexDirection row

padding-top: 30px;
padding-bottom: 30px;
`

const EventImage = styled.img`
width: 273px;
height: 195px;
left: 0px;
top: 0px;

`

const EventTitle = styled.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 24px;
margin-bottom: -5px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 100%;
/* identical to box height, or 32px */

letter-spacing: -0.04em;
background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`

const EventLocationTime = styled.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 10px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;
/* identical to box height, or 18px */

letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

opacity: 0.6;
`

const WalletSignedUpImg = styled.img`
width: 32px;
height: 32px;
left: 20px;
margin-top: 40px;
margin-left: 20px;

background: #FFFFFF;
border-radius: 103.571px;
`

const WalletSignedUpText = styled.span`
height: 18px;
left: 341px;
margin-top: 10px;
margin-left: 24px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;

/* identical to box height, or 18px */
letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`

const RegisterButton = styled.button`
width: 151px;
height: 45px;
paddingLeft: 12px;
background-color: white;
background: #FFFFFF;
border-radius: 100px;
font-family: 'Satoshi';
margin-right: 16px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 100%;
color: #000000;
margin-top: 20px;
margin-left: 400px;

`

export default class NodeListItem extends Component {

    constructor(props) {
        super()
        this.node = props.node1;
        this.routeToPage = props.routeToPage
        console.log(this.node.responses)
    };

    onStartClick = () => {
        this.routeToPage('result', '1234')
    }

    render() {
        return (
            <>
                <ListItem>


                    <div style={{ dislay: 'flex', flexDirection: 'column' }}>

                        <div style={{
                            display: 'flex', flexDirection: 'row', textAlign: 'left', justifyContent: 'space-between', flexGrow: 1
                        }}>

                            <div style={{
                                display: 'flex', flexDirection: 'column'
                            }}>

                                <EventTitle>{this.node.cost == 0 ? "Free" : this.node.cost}</EventTitle>
                                <EventLocationTime>{this.node.address.substring(36, 42)}<br></br>
                                    {/* <Moment format=" MMM DD hh:mm - " date={this.startDate} />
                            <Moment format=" MMM DD hh:mm " date={this.endDate} /> */}
                                </EventLocationTime>
                                <WalletSignedUpText>{this.node.countInferences} previous outputs</WalletSignedUpText>

                            </div>

                            <div style={{
                                display: 'flex', flexDirection: 'column'
                            }}>

                                <RegisterButton onClick={this.onStartClick}>Confirm</RegisterButton>

                                <span className="attendee-lens-text" style={{ fontSize: '16px', marginRight: '40px' }}><Badge>{this.node.averageRating}</Badge>  score</span>

                            </div>


                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '25px', marginLeft: 'px'}}>

                            {this.node.responses.slice(0, 4).map((response, index) => {
                                    return <img width={100} height={100} src={response.url} style={{ objectFit: 'cover', margin: '16px'}}></img>
                                })}
                        </div>


                    </div>


                    <div>

                    </div>
                </ListItem>
            </>
        );
    }
}