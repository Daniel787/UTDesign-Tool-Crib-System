import React from 'react'
import styles from "../../Rent.module.css";
import Search from "./Search/Search";
import CartModal from "./Cart/CartModal";
import RefreshList from "./RefreshList/RefreshList";
import Return from './Return/Return'

// props: url cart setCart refreshList setList
export default function Head(props) {
    return (
        <div>
            <div className={styles.Parent}>
                <RefreshList styles={styles} refreshList={props.refreshList} />
                <CartModal
                    styles={styles}
                    cart={props.cart}
                    setCart={props.setCart}
                    refreshList={props.refreshList}
                />
                <Return url={props.url} styles={styles} />
            </div>
            <Search url={props.url} refreshList={props.refreshList} setList={props.setList} />
        </div>
    )
}
