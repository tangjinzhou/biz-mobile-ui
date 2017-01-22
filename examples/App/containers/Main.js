import React from 'react'

export default class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="banner"></div>
                <section className="features">
                    <div className="feature-img w50"><img src="./App/img/feature1.png"/></div>
                    <div className="w50">
                        <h3>为移动而生</h3>
                        <p>BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。</p>
                    </div>
                    <div className="w33">
                        <img src="./App/img/feature2.png"/>
                        <h3>H5 框架</h3>
                        <p>基于 React 的 H5 开发框架，提供配套的 UI 组件库和脚手架工具，助力快速构建 H5 应用。</p>
                        <a className="btn" href="#/start">马上开始</a>
                    </div>
                    <div className="w33">
                        <img src="./App/img/feature3.png"/>
                        <h3>H5 制作</h3>
                        <p>提供制作与发布 H5 动画页面的工具，把精彩的专题活动快速分享到各大社交平台。</p>
                        <a className="btn disabled" href="#/h5tools">马上开始</a>
                    </div>
                    <div className="w33">
                        <img src="./App/img/feature4.png"/>
                        <h3>公共服务</h3>
                        <p>提供稳定、可靠的消息推送、版本检查、反馈收集、热更新等服务，并配有完善的数据统计功能。</p>
                        <a className="btn disabled" href="#/service">马上开始</a>
                    </div>
                    <div className="w33">
                        <img src="./App/img/feature5.png"/>
                        <h3>iOS 开发</h3>
                        <p></p>
                        <a className="btn disabled" href="#/ios">马上开始</a>
                    </div>
                    <div className="w33">
                        <img src="./App/img/feature6.png"/>
                        <h3>Android 开发</h3>
                        <p></p>
                        <a className="btn disabled" href="#/android">马上开始</a>
                    </div>
                    <div className="w33">
                        <h3></h3>
                        <p></p>
                    </div>
                </section>
            </div>
        )
    }
}