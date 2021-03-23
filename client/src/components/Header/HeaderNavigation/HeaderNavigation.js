import { NavLink} from 'react-router-dom';

import './HeaderNavigation.css';

const HeaderNavigation = () => {
    return(
        <ul>
            <li className='eDiary-text'>Електронен<br/> дневник </li>
            <li className='navButtons'><NavLink to="/categories/8_class">8 клас</NavLink></li>
            <li className='navButtons'><NavLink to="/categories/9_class">9 клас</NavLink></li>
            <li className='navButtons'><NavLink to="/categories/10_class">10 клас</NavLink></li>
            <li className='navButtons'><NavLink to="/categories/11_class">11 клас</NavLink></li>
            <li className='navButtons'><NavLink to="/categories/12_class">12 клас</NavLink></li>
        </ul>   
        
    );
};

export default HeaderNavigation;