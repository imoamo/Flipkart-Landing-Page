import React from 'react';
import Styles from './Flex.module.css';

const Flex = () => {
    return (
        <div className={Styles.main}>
            <p className={Styles.heading}>Best Deals on Smartphones</p>

            <div className={Styles.flexbox}>

                <div className={Styles.f1}>
                    <div>
                        <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=90" alt="moto" />
                        <p>moto edge 40 neo</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90" alt="moto2" />
                        <p>vivo t2 pro 5g</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=90" alt="moto3" />
                        <p>poco m6 pro</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=90" alt="moto4" />
                        <p>redmi 12 5G</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/p/r/q/x6-neo-5g-mzb0ggrin-poco-original-imagyxngnrhzx96z.jpeg?q=90" alt="moto4" />
                        <p>POCO X6 Neo 5G</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=90" alt="moto4" />
                        <p>poco m6 5G</p>
                        <p>incl of offers</p>
                    </div>


                </div>

                <div className={Styles.f2}>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/9845b97107ced583.png?q=20" alt="9" />
                </div>
            </div>
        </div>
    );
};

export default Flex;