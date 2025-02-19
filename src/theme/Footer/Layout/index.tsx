/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Footer/Layout';
import footSytles from './styles.module.css';
import Button from '../../Button';
import Translate from '@docusaurus/Translate';

export default function FooterLayout({
                                         style,
                                         links,
                                         logo,
                                         copyright,
                                     }: Props): JSX.Element {
    return (
        <footer
            className={clsx('footer', {
                'footer--dark': style === 'dark',
            })}>
            <div className="container container-fluid" style={{marginTop: '50px', marginBottom: '50px'}}>
                <div className='row'>
                    <div className='col'>
                        <div className="footer__bottom">
                            <img
                                alt="easyclick logo"
                                className={footSytles.footer__logo}
                                src="/img/easyclick.png"
                                title="QuestDB - Fastest open source database for time series and analytics"
                            />
                            <b className={footSytles.rainbondtext}>EasyClick</b>
                        </div>
                        <div className={clsx("footer__bottom", footSytles.slogan)}>
                            <p>
                                EasyClick 是一个app自动化测试技术平台，简单易学
                                <br/>
                                功能强大，使用简单，支持安卓，iOS，鸿蒙Next，PC，WEB等平台
                            </p>
                        </div>
                        <div className={clsx("footer__bottom", footSytles.slogan)}>
                            <Button
                                className={footSytles.footer__github}
                                href='https://github.com/easy-click/easyclick-libs'
                                icon={
                                    <img
                                        alt="GitHub logo"
                                        height={22}
                                        src="/img/mark-github.svg"
                                        title="GitHub"
                                        width={22}
                                    />
                                }
                                size="xsmall"
                                uppercase={false}
                                variant="secondary"
                            >
                                Star us on GitHub
                            </Button>
                        </div>
                    </div>
                    <div className='col'>
                        {links}
                        {(logo || copyright) && (
                            <div className="footer__bottom text--center">
                                {logo && <div className="margin-bottom--sm">{logo}</div>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="footer__bottom text--center">
                {copyright}
            </div>
        </footer>
    );
}
