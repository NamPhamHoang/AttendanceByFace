import "./TeamMember.scss";

class TeamMember extends React.Component {
    render() {
        return (
            <div className="team_member">
                <div className="photo"><img src={'/images/team/' + (this.props.image || 'member.jpg')} alt={this.props.name} /></div>
                <div className="name">{this.props.name}</div>
                <div className="position">{this.props.position}</div>
                <div className="social">
                    {this.props.social_linkedin &&
                        <a className="linkedin" href={'https://linkedin.com/in/' + this.props.social_linkedin} target="_blank">Linkedin</a>}
                    {this.props.social_twitter &&
                        <a className="twitter" href={'https://twitter.com/' + this.props.social_twitter} target="_blank">Twitter</a>}
                    {this.props.social_facebook &&
                        <a className="facebook" href={'https://facebook.com/' + this.props.social_facebook} target="_blank">Facebook</a>}
                    {this.props.social_telegram &&
                        <a className="telegram" href={'https://t.me/' + this.props.social_telegram} target="_blank">Telegram</a>}
                </div>
            </div>
        );
    }
}

export default TeamMember;
