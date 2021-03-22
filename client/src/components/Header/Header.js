import './Header.css';

const Header = () => {
return(
    <header id='site-header'>
         <ul>
             <li className='eDiary-text'>Електронен<br/> дневник </li>
            <li className='navButtons'><a href="#">8 клас</a></li>
            <li className='navButtons'><a href="#">9 клас</a></li>
            <li className='navButtons'><a href="#">10 клас</a></li>
            <li className='navButtons'><a href="#">11 клас</a></li>
            <li className='navButtons'><a href="#">12 клас</a></li>
        </ul>   
    </header>
    );
};

export default Header;