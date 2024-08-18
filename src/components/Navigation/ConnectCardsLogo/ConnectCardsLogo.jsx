import PropTypes from 'prop-types';
import "./ConnectCardsLogo.css";

const ConnectCardsLogo = ({onClick}) => {
    return ( 
        <div 
            className="logo-container"
            onClick={onClick}>
            Connect Cards
        </div>
     );
}

ConnectCardsLogo.propTypes = {
    onClick: PropTypes.func
};
 
export default ConnectCardsLogo;