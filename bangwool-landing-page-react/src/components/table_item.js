import React from 'react'
import './table_item.scss'

function TableItem({ src, title, description1, description2 }) {
    return (

        <div className='table_item_bg'>
            <div className='table_item'>
                <img className='table_item_image' src={src} />
                <span className='table_item_title'>{title}</span>
                <span className='table_item_description'>{description1}<br />{description2}</span>
            </div>
        </div>
    )


}

export default TableItem