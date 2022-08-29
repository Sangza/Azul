import React from 'react';
import PlayerViews from './PlayerViews';
import Deployer from '../components/Deployer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/style.css'
import '../css/base.css'
import '../css/dark.css'
import '../css/flickity.css'
import '../css/fontello.css'
import '../css/hamburger.css'
import '../css/select2.css'
import '../css/tippy.css'

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="anor_fn_main">
          {content}
          {/* <Header/>
          <Deployer/>
          <Footer/> */}
      </div>
    );
  }
}

exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit, defaultFundAmt} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div class="price_box">
        <h4 class="fn_title">Set the Wager</h4>
        <ul className="fields">
              <li className="field">
                <div className="field_item">
                  <input type='number' placeholder={defaultFundAmt} onChange={(e) => this.setState({wager: e.currentTarget.value})}/>
                </div>
              </li>
        </ul>
        <div className="disc_button">
          <a className="anor_fn_button" onClick={() => parent.setWager(wager)}>Set wager</a>
        </div>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div className="anor_fn_modal opened share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Deployer (Francis)</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}</h3>
            </div>
            <div className="disc_button">
              <a className="anor_fn_button" onClick={() => parent.deploy()}>Deploy</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div className="anor_fn_modal opened share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Deployer (Francis)</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">Deploying... please wait.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div className="anor_fn_modal opened share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Please give them this contract info:</div>
          <div className="modal_content">
            <div className="share_title">
              Waiting for Attacher to join...
              <pre className='ContractInfo'>
                {ctcInfoStr}
              </pre>
            </div>
            <div className="disc_button">
              <a className="anor_fn_button" onClick={(e) => this.copyToClipboard(e.currentTarget)}>Copy to clipboard</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div className="anor_fn_modal opened share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Deployer (Francis)</div>
          <div className="modal_content">
            <div className="share_title">
            <h3 className="fn_title">
                Waiting for results...
              </h3>
              
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

exports.Timeout = class extends React.Component {
  render() {
    
    return (
      <div className="anor_fn_modal opened share_box" onClick ={() => window.location.reload()}>
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="Close" className="fn__svg"/></div>
          <div className="modal_title">Deployer (Francis)</div>
          <div className="modal_content">
            <div className="share_title">
            <h3 className="fn_title">
                Oops! Time is up.
              </h3>
              
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

exports.Done = class extends React.Component {
  render() {
    const { outcome, price, guess } = this.props.parent.state;
    const parseOutcome = () => {
      if (/Bob/ig.test(outcome)) {
        return 'You win!!'
      }

      if (/alice/ig.test(outcome)) {
        return 'You lose!!'
      }

      return 'It was a draw!!'
    }
    return (
      <div className="anor_fn_modal opened share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Deployer (Francis)</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">
                { parseOutcome() }
                <br />
                The correct price is { price } and your guess was { guess }.
              </h3>
              
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default exports;
