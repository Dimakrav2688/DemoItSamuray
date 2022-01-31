import React, {useState} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {ShoppingBasket} from '@mui/icons-material';
import style from './style.module.css'
import Basket from '../Basket/Basket'
import Button from "@mui/material/Button";
import {useTranslation, withTranslation} from 'react-i18next';


function Header() {
    const [isCardOpen, setCardOpen] = useState(false);

    const handleCard = () => {
        setCardOpen(true)
    }

    //// Translation

    const { t, i18n } = useTranslation(['translation']);

    const changeLanguage = (lng) => {
        debugger
        i18n.changeLanguage(lng);
    };

    return (
        <div className={style.header}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' component='span' sx={{flexGrow: 1}}>
                      {t("ukraine_amazon_shop")}
                    </Typography>
                    <IconButton color='inherit' onClick={handleCard}>
                        <ShoppingBasket/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Button type="button" variant='contained' onClick={() => changeLanguage("en")}>en....</Button>
            <Button type="button" variant='contained' onClick={() => changeLanguage("ua")}>ua....</Button>
            < Basket cartOpen={isCardOpen} closeCard={() => setCardOpen(false)}/>
        </div>
    )
}

export default Header;

// <Typography> любой текст,
// <IconButton> -обвертка если нужно нажать и на вешать атрибуты
//<Toolbar> - хедер строка.

//
//
//
//
//
////////////////////////////////////атрибуты и флекс бокс
//Flex-grow распределение всех элементов по коробке.
// sx - єто атрибут материал юай по стилизации.
//
//
//
//
//
