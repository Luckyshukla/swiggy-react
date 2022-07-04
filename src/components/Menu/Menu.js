import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'
// import foodSymbol from '../../Images/food-symbol.png'
import MenuList from './MenuList';

function Menu() {
    const [varity, setvarity] = useState([]);
    const [menu, setMenu] = useState([]);

    const getmenu = async () => {
        try {
            const response = await fetch('http://training.panorbitprojects.com/api/Menu/');
            const resp = await response.json();

            const jsondata = resp.data;

            setvarity(jsondata.varieties);

            setMenu(jsondata.menu)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getmenu();
    }, []);

    return (
        <div className='restaurant-page'>
            {/* <div className='menu'> */}
                <div className='menu-varity'>
                    {varity.map((ele) => (
                        <div className='menu-section'>
                            <div className='varieties'>
                                {/* <ul>
                                    <li><a href={`#${ele}`}>{ele}</a></li>
                                </ul> */}
                                <a href={`#${ele}`}>{ele}</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='menu-list-origin'>
                    <MenuList data={varity} data1={menu} />
                </div>
                <div className='Empty-cart'>
                    <div className='position-cart'>
                    <div className='heading'>Cart Empty</div>
                    <div><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2' alt='empty-cart'></img></div>
                    <div className='para'>Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
                    <div/>
                </div>
            </div>
        // </div>
    )
}
export default Menu