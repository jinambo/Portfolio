import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const ComponentHeader = (props) => {
    return (
        <div className="component-header">
            <div className="section-header">
                <div className="main-title">
                    { props.return === true ? <Link to="/portfolio"><FontAwesomeIcon icon={ faAngleLeft } className="close" /></Link> : '' }
                    <h3>{ props.headerProps.title }</h3>
                </div>
                <div className="main-info">
                    { props.headerProps.socialSites.map(site => (
                        <a href={ site.link } target="_blank" key={ site.link }>
                            <FontAwesomeIcon icon={ site.icon } />
                        </a>
                    )) }
                </div>
            </div>
            <p style={{marginBottom: '30px'}}>{ props.headerProps.description }</p>
        </div>
    )
}

export default ComponentHeader;