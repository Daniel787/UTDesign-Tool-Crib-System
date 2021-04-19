import React from 'react'
import styles from "../../Buy.module.css";
import Search from "./Search/Search";
import CartModal from "./Cart/CartModal";
import RefreshList from "./RefreshList/RefreshList";

//props: url refreshList setList cart setCart
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
            </div>
            <Search url={props.url} refreshList={props.refreshList} setList={props.setList} />
        </div>
    )
}
