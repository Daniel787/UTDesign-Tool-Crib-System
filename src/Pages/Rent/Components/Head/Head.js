import React, { useState } from 'react'
import Search from "./Search/Search";
import CartModal from "./Cart/CartModal";
import RefreshList from "./RefreshList/RefreshList";
import Return from './Return/Return'
import Failed from './Cart/Failed'

// props: url cart setCart refreshList setList
export default function Head(props) {
    const [fail, setFail] = useState(null)
    return (
        <div>
            {/* failed transaction modal */}
            <Failed fail={fail} setFail={setFail} />
            {/* button options */}
            <div className={props.styles.Parent}>
                <RefreshList styles={props.styles} refreshList={props.refreshList} />
                <CartModal
                    styles={props.styles}
                    cart={props.cart}
                    setCart={props.setCart}
                    setStatus={setFail}
                />
                <Return url={props.url} styles={props.styles} />
            </div>
            {/* filters */}
            <Search url={props.url} refreshList={props.refreshList} setList={props.setList} />
        </div>
    )
}
