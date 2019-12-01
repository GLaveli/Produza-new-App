import React, { Component } from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';

const Container = styled.div`
background-color: #13b18e;
color: #ffff;
height: 30px;
width: 100%;
position: absolute
padding-top: 5px;
text-align: center;
font-weight: bold;
top: ${props => props.top}px;
z-index: -1;
transition: top 0.5s ease;
`;

const emitter = new ee();

export const notify = (msg) => {
    emitter.emit('notification', msg)
}

class Notifications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            top: -100,
            msg: 'Aguarde, Isso pode levar um tempo...',
        };

        this.timeout = null;

        emitter.on('notification', (msg) => {
            this.onShow(msg);
        });
    }

    onShow = (msg) => {

        if (msg) {
            this.setState({ msg: msg })
        }

        if (this.timeout) {
            clearTimeout(this.timeout);
            this.setState({ top: -100 }, () => {
                this.timeout = setTimeout(() => {
                    this.showNotifications(msg);
                }, 500)
            });
        } else {
            this.showNotifications(msg);
        }

    }

    showNotifications = (msg) => {
        this.setState({
            top: 71,
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    top: -100,
                    msg: ''
                })
            }, 3500)
        });
    }

    render() {
        return (
            <>
                <Container top={this.state.top}>{this.state.msg}</Container>
            </>
        );
    }
}

export default Notifications;