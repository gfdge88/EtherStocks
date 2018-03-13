/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Instructions.css';
import Link from '../Link';

class Instructions extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.header}>
            How to Play
          </h1>
          <p>
            In order to use this website, your browser needs to have the browser extension MetaMask installed. 
            After that, you will see numerous stocks available for purchase in the table below.
          </p>
          <p>
            There are multiple actions that you can do with each stock:
          </p>
          <div>
            <div className={s.numberBullet}>1</div>
            <p className={s.innerText}>Buy - Purchase shares at the current buy rate.</p>
          </div>
          <div>
            <div className={s.numberBullet}>2</div>
            <p className={s.innerText}>Sell - Sell your shares at the current sell rate - ETH will be deposited into your dividens.</p>
          </div>
          <div>
            <div className={s.numberBullet}>3</div>
            <p className={s.innerText}>Withdraw - Withdraw your dividends into your Ethereum network.</p>
          </div>
          <div>
            <div className={s.numberBullet}>4</div>
            <p className={s.innerText}>Reinvest - Purchase shares using ETH using your dividends for the current stock.</p>
          </div>
          <div>
            <div className={s.numberBullet}>5</div>
            <p className={s.innerText}>Get out - Sell your shares and withdraw dividends immediately.</p>
          </div>

          <div>
            <p> Each time a share is purchased, the rate for subsequent purchaes will be increased by 0.25%.</p>
            <p> Additionally, each time a share is bought or sold, 10% from the transaction will be distrubuted between all shareholders as a dividend.</p>
            <p> Therefore, you can earn money in multiple ways:</p>
          </div>

          <div>
            <div className={s.numberBullet}>1</div>
            <p className={s.innerText}>Buy low, sell high - classic.</p>
          </div>

          <div>
            <div className={s.numberBullet}>2</div>
            <p className={s.innerText}>Buy and hold - get money from dividends when price fluctuates.</p>
          </div>

          <p>Good luck.</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Instructions);
