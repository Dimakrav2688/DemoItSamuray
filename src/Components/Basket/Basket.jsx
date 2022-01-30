import { ShoppingBasket } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";


const Basket = (props) => {
    const {
        cartOpen,
        closeCard = Function.prototype,
        order,
        removeFromOrder
    } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCard}
        >
            <List sx={{ w: '200px' }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary='Basket' />
                </ListItem>
                <Divider />
            </List>
        </Drawer>
    )
}
export default Basket;

