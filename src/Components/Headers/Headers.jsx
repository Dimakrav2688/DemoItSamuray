import React, { useState } from 'react';
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingBasket } from '@mui/icons-material';
import style from './style.module.css'
import Basket from '../Basket/Basket'

///////busket


function Header() {
    const [isCardOpen, setCardOpen] = useState(false);
    
    const handleCard = () => {
        setCardOpen(true)
    }


    return (
        <div className={style.header} >
            <AppBar position='static' >
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
                        Ukraine Amazon shop
                    </Typography>
                    <IconButton color='inherit' onClick={handleCard}>
                        <ShoppingBasket />
                    </IconButton>
                </Toolbar>
            </AppBar>

            < Basket cartOpen={isCardOpen} closeCard={() =>setCardOpen(false)}/>
        </div >
    )
}

export default Header

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
