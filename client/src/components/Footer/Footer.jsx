import React from 'react'
import stl from './Footer.module.css'
function Footer() {
    return (
        <div className={stl.footer}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
            <div className={stl.footer_contenedor}>
                <div className={stl.item} >
                    <div className={stl.logo}>
                    <img src="/a.png" ></img>
                    </div>
                    <div className={stl.descrip}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nostrum,
                            perferendis ad modi corrupti nesciunt qui ullam eos corporis odit minus magni
                            a fugiat delectus accusamus ex, nulla aliquid quia?</p>
                    </div>
                </div>
                <div className={stl.item}>
                    <h3>item 1</h3>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                </div>
                <div className={stl.item} >
                    <h3>item 3</h3>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                </div>
                <div className={stl.item}>
                    <h3>item 4</h3>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-facebook"></i>
                </div>
            </div></div>

    )
}

export default Footer