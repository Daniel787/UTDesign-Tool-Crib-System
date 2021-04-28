import React from 'react'
import Search from "./Search/Search";
import CartModal from "./Cart/CartModal";
import RefreshList from "./RefreshList/RefreshList";
import styles from './Head.module.css'

//props: url setList cart setCart
export default function Head(props) {
    return (
        <div>
            {/* button options */}
            <div className={styles.Parent}>
                <RefreshList styles={styles} refreshList={props.refreshList} />
                <CartModal
                    styles={styles}
                    cart={props.cart}
                    setCart={props.setCart}
                />
            </div>
            {/* filter options */}
            <Search url={props.url} refreshList={props.refreshList} setList={props.setList} />
        </div>
    )
}
