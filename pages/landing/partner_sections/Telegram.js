import i18n from 'i18next';
import { Col, Row } from 'reactstrap';
import './Telegram.scss';
import Card from '../components/Card';
import Line from '../components/Line';

function Telegram() {
	return (
		<container>
			<div className="Telegram">
				<Line />
				<p className="text-title">{i18n.t('landing:partner.telegram.signal.title')}</p>
				<div className="tele_list">
					<div className="t-box t-box-1">
						<img src="/images/partner/Step1.png" alt="" />
						<p>{i18n.t('landing:partner.telegram.signal.step1')}</p>
					</div>
					<div className="t-box t-box-2">
						<img src="/images/partner/Step2.png" alt="" />
						<p>{i18n.t('landing:partner.telegram.signal.step2')}</p>
					</div>
					<div className="t-box t-box-3">
						<img src="/images/partner/Step3.png" alt="" />
						<p>{i18n.t('landing:partner.telegram.signal.step3')}</p>
					</div>
				</div>
			</div>

			<div className="channel">
				<img src="/images/plane.png" alt="plane" />
				<p className="text-title">{i18n.t('landing:partner.telegram.channel.title')}</p>
				<p className="text-subtitle ">
        {i18n.t('landing:partner.telegram.channel.subTitle')}
				</p>
				<div className="tele_option_box">
					<div className='tele-box'>
            <img src="/images/partner/Signals.png" alt=""/>
            <h3>{i18n.t('landing:partner.telegram.channel.box1')}</h3>
          </div>
					<div className='tele-box'>
            <img src="/images/partner/vip.png" alt=""/>
            <h3>{i18n.t('landing:partner.telegram.channel.box2')}</h3>
          </div>
					<div className='tele-box'>
            <img src="/images/partner/target_tele.png" alt=""/>
            <h3>{i18n.t('landing:partner.telegram.channel.box3')}</h3>
          </div>
				</div>
			</div>
		</container>
	);
}

export default Telegram;
