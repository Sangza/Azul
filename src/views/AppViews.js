import React from 'react';
import Footer from '../components/Footer';
import Connect from '../components/Connect';
import Discover from '../components/Discover';
import '../css/style.css'
import '../css/base.css'
import '../css/dark.css'
import '../css/flickity.css'
import '../css/fontello.css'
import '../css/hamburger.css'
import '../css/select2.css'
import '../css/tippy.css'

const exports = {};

exports.Wrapper = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      connected: false,
    }
  }
  render() {
    const {content, parent} = this.props

    let connected = false;
    return (
      <div>
          <header className="anor_fn_header">
            <div className="container">
              <div className="header_in">
                
                <div className="header_left">
                  <div className="fn_logo">
                    <a><img src= "../img/logo.png" alt=""/></a>
                  </div>
                  <div className="nav_list">
                    <ul className="main_menu">
                      <li>
                        <a 
                          onClick={
                            async () => {
                              if (!this.state.connected) {
                                alert('Please connect to your account first.')
                                return;
                              }
                              parent.startGame();
                            }
                          }
                        >
                          Play Game
                        </a>
                      </li>
                      <li><a>Fund Account</a></li>
                      <li><a>View NFTs</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="header_right">
                  <div className="fn_signin">
                    {this.state.connected ? 
                      <h3 className="fn_title">Connected</h3> :
                      <a className="anor_fn_button small anor_fn_share_item" 
                        onClick={
                            async () => {
                              await parent.connectWallet();
                              connected = true
                              this.setState(({ connected: true }));
                            }
                          }>
                        Connect Wallet
                      </a>
                    }
                  </div>
                </div>
                
              </div>
            </div>
          </header>

          <div className="anor_fn_mobile_menu">
            <div className="mobile_menu_inner">
              <div className="mobile_in">
                <div className="logo">
                  <a><img src="../img/mobile-logo.png" alt="" /></a>
                </div>
                <div className="trigger">
                  <div className="hamburger hamburger--slider">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown_inner">
                <ul className="vert_menu">
                  <li>
                      <a 
                        onClick={
                          async () => {
                            if (!this.state.connected) {
                              alert('Please connect to your account first.')
                              return;
                            }
                            parent.startGame();
                          }
                        }
                      >
                        Play Game
                      </a>
                  </li>
                  <li><a>Fund Account</a></li>
                  <li><a>View NFTs</a></li>
                  <li>
                    {this.state.connected ? 
                      <h3 className="fn_title">Connected</h3> :
                      <a className="anor_fn_button small anor_fn_share_item" 
                        onClick={
                            () => {
                            parent.connectWallet();
                            connected = true
                            this.setState({ connected: true })
                            }
                          }>
                        Connect Wallet
                      </a>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {content}
          {/* <Discover/> */}
          <Footer/>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {

  render() {
    
    return (
      <Connect/>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div className="anor_fn_modal report_box" >
        <div className="modal_in">
          <div className="modal_closer"><img src="/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Fund Your Account</div>
          <div className="modal_content">
            <h3 className="fn_title">Balance: {bal} {standardUnit}</h3>
            <p className="fn_desc">
              Would you like to fund your account with additional {standardUnit}?
              <br />
              (This only works on certain devnets)
            </p>
            <ul className="fields">
              <li className="field">
                <div className="field_item">
                  <input type='number' placeholder={defaultFundAmt} onChange={(e) => this.setState({amt: e.currentTarget.value})}/>
                </div>
              </li>
              <li className="field">
                <div className="field_item">
                  <div className="links">
                    <a className="anor_fn_button small add" onClick={() => parent.fundAccount(amt)}>Fund Account</a>
                    <a className="cancel" onClick={() => parent.skipFundAccount()}>Skip</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Attacher' };
  }
  render() {
    const {parent} = this.props;
    return (
      <div className="anor_fn_modal opened report_box">
        <div className="modal_in">
          <div className="modal_closer"><img src="/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Roles</div>
          <div className="modal_content">
            <h3 className="fn_title">Please select a role:</h3>
            <p className="fn_desc">
              The Deployer set the wager, deploy the contract.
              <br />
              The Attacher attach to the Deployer's contract.
            </p>
            <form>
              <select value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value}) }}>
                <option disabled>Select a role</option>
                <option value={'Deployer'}>Deployer</option>
                <option value={'Attacher'}>Attacher</option>
              </select>
              <div className="clearfix"></div>
              <input type="submit" onClick={
                  (e) => {
                    e.preventDefault();
                    (this.state.value === "Deployer") ? parent.selectDeployer() : parent.selectAttacher()
                  }}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

{/* <div className="">
          <header className="anor_fn_header">S
            <div className="container">
              <div className="header_in">
                
                <div className="header_left">
                  <div className="fn_logo">
                    <a><img src= "../img/logo.png" alt=""/></a>
                  </div>
                  <div className="nav_list">
                    <ul className="main_menu">
                      <li>
                        <a 
                          onClick={
                            async () => {
                              parent.startGame();
                            }
                          }
                        >
                          Play Game
                        </a>
                      </li>
                      <li><a>Fund Account</a></li>
                      <li><a>View NFTs</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="header_right">
                  <div className="fn_signin">
                    {this.state.connected ? 
                      <h3 className="fn_title">Connected</h3> :
                      <a className="anor_fn_button small anor_fn_share_item" 
                        onClick={
                            async () => {
                              await parent.connectWallet();
                              connected = true
                              this.setState(({ connected: true }));
                            }
                          }>
                        Connect Wallet
                      </a>
                    }
                  </div>
                </div>
                
              </div>
            </div>
          </header>

          <div className="anor_fn_mobile_menu">
            <div className="mobile_menu_inner">
              <div className="mobile_in">
                <div className="logo">
                  <a><img src="../img/mobile-logo.png" alt="" /></a>
                </div>
                <div className="trigger">
                  <div className="hamburger hamburger--slider">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown_inner">
                <ul className="vert_menu">
                  <li><a>Play Game</a></li>
                  <li><a>Fund Account</a></li>
                  <li><a>View NFTs</a></li>
                  <li>
                    {this.state.connected ? 
                      <h3 className="fn_title">Connected</h3> :
                      <a className="anor_fn_button small anor_fn_share_item" 
                        onClick={
                            () => {
                            parent.connectWallet();
                            connected = true
                            this.setState({ connected: true })
                            }
                          }>
                        Connect Wallet
                      </a>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {content}
          <Discover/>
          <Footer/>
      </div> */}

export default exports;