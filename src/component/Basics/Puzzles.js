import React,{useState} from 'react';
import './Puzzles.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import logo from './logo-png.png';
import Navbar from './navbar';

const uniqList = [
    ...new Set(
        Menu.map((curEle) => {
            return curEle.category;
    })),
"All",
];
console.log(uniqList)

const Puzzles = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqList);

    const filterItem = (category) => {
        if (category === "All") 
        {
            setMenuData(Menu);
            return;
        }
        
        const updatedList = Menu.filter((curEle) => {
            return curEle.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <div className='title-bar'>
                <img className='logo-img' src={logo} alt=''/>
                <div className='title'>
                    <p className='heading'>𝐏𝐔𝐙𝐙𝐋𝐄𝐒</p>
                    <p className='tagline'>𝘉𝘙𝘖 𝘊𝘖𝘋𝘌 𝘈𝘗𝘗𝘙𝘖𝘝𝘌𝘋</p>
                </div>
            </div>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData}/>
        </>
    )
}
export default Puzzles