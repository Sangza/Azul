import React from "react";
import '../css/style.css'
import '../css/base.css'
import '../css/dark.css'
import '../css/flickity.css'
import '../css/fontello.css'
import '../css/hamburger.css'
import '../css/select2.css'
import '../css/tippy.css'

class Connect extends React.Component {
	render() {
		return (
			<div className="anor_fn_modal opened share_box">
				<div className="modal_in"  style={{ width: '550px', padding: '20px' }}>
					<div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
					<div className="modal_title">Connecting to Wallet</div>
					<div className="modal_content">
						<div className="share_title">
							Please wait while we connect to your account.
        					If this takes more than a few seconds, there may be something wrong.
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Connect;