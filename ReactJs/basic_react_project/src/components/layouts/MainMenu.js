import { Link } from "react-router-dom";
import MainMenuStyle from './MainMenu.module.css'
import FavouriteContext from "../../store/ContextFavourite";
import { useContext } from "react";

function MainMenu() {
    const favouriteContext = useContext(FavouriteContext);
    const totalFavouriteItem = favouriteContext.favouriteItems.length;
    return (
        <header className={MainMenuStyle.header}>
            <nav >
                <ul >
                    <li ><Link to="/">Home</Link></li>
                    <li > <Link to="/about">About</Link></li>
                    <li ><Link to="/contact">Contact</Link></li>
                    <li ><Link to="/product">Product</Link></li>
                    <li ><Link to="/product/add">Add Product</Link></li>
                    <li className={MainMenuStyle.favouriteCount} ><Link to="/product/favourite">{totalFavouriteItem}</Link></li>
                </ul>
            </nav>

            
           
            
        </header>
    )
}
export default MainMenu;