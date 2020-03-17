import i18n from 'i18next';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import "./Header.scss";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

        /**
         * This object controls the nav bar. Implement the add and remove
         * action over the elements of the nav bar that we want to change.
         *
         * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
         */
        this.myNavBar = {

            flagAdd: true,

            elements: [],

            init: function (elements) {
                this.elements = elements;
            },

            add: function () {
                if (this.flagAdd) {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className += " fixed-theme";
                    }
                    this.flagAdd = false;
                }
            },

            remove: function () {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                }
                this.flagAdd = true;
            }

        };
    }

    componentDidMount() {

        // init Smooth Scroll Anchor
        const script = document.createElement("script");
        script.src = "/js/smooth-scroll.polyfills.min.js";
        script.async = true;
        document.body.appendChild(script);

        /**
         * Init the object. Pass the object the array of elements
         * that we want to change when the scroll goes down
         */
        this.myNavBar.init([
            "header",
            "header-container",
            "brand"
        ]);

        /**
         * bind to the document scroll detection
         */
        let context = this;
        window.onscroll = function (e) {
            context.offSetManager();
        }

        /**
         * We have to do a first detectation of offset because the page
         * could be load with scroll down set.
         */
        context.offSetManager();
    }

    /**
     * Function that manage the direction
     * of the scroll
     */
    offSetManager() {
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            this.myNavBar.add();
        }
        else if (currYOffSet == yOffset) {
            this.myNavBar.remove();
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleContactUs() {
        zE('webWidget', 'open');
    }

    handleChangeLang(lang) {
        let path = (lang == 'en') ? '' : '/' + lang;
        if (window.location.pathname) {
            path += window.location.pathname.replace('/pt/', '/').replace('/pt', '/');
        }
        window.location.href = path;
    }
    // constants
    path = '/user';

    render() {
        const lang = (i18n.language == 'en' || i18n.language == 'pt') ? i18n.language : 'en';
        const langPath = (lang == 'en') ? '/' : '/' + lang + '/'

        const langParams = {
            'en': {
                'name': 'English (EN)',
                'helpcenter': 'https://annydecrypto.zendesk.com/hc/en-us'
            },
            'pt': {
                'name': 'Portuguese (PT)',
                'helpcenter': 'https://annydecrypto.zendesk.com/hc/pt-br'
            },
        }
        return (
            <div className="header">
                <Navbar id="header" expand="md" fixed="top" light>
                    <Container id="header-container" fluid>
                        <NavbarBrand id="brand" href={langPath}>
                            <img src="/images/logo_mecabots.svg" alt=""/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href={this.path  + langPath + '#virtualAssistants'}>{i18n.t("landing:menu.virtualassistants")}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={this.path  + langPath + '#pricing'}>{i18n.t("landing:menu.pricing")}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={this.path  + langPath + '#team'}>{i18n.t("landing:menu.team")}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={this.path  + langPath + '#blog'}>{i18n.t("landing:menu.blog")}</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar className="language">
                                    <DropdownToggle nav caret>{lang}</DropdownToggle>
                                    <DropdownMenu right>
                                        {Object.keys(langParams).map(key => {
                                            if (key != lang)
                                                return <DropdownItem href="javascript:void(0)" key={key} onClick={() => this.handleChangeLang(key)}>{langParams[key].name}</DropdownItem>
                                        })}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default Header;
