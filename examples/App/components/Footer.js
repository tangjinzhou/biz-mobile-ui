import React from 'react'

export default function Footer(props) {
    return (
        <footer>
            <div className="mol logo">
                <span></span>
                <p>Powered by Sogou BizTech ©2016.</p>
            </div>
            <div className="mol">
                <h3>帮助</h3>
                <ul>
                    <li><a href="mailto:bizdev_app@sogou-inc.com">技术支持</a></li>
                </ul>
            </div>
            <div className="mol">
                <h3>Links</h3>
                <ul>
                    <li><a href="http://bizwork.sogou-inc.com/" target="_blank">BizWork</a></li>
                    <li><a href="http://fe.sogou/" target="_blank">BizFE</a></li>
                </ul>
            </div>
        </footer>
    )
}