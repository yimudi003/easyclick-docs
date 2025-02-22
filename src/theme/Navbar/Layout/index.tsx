/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ComponentProps} from 'react';
import clsx from 'clsx';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type {Props} from '@theme/Navbar/Layout';
import {
    useThemeConfig,
    useHideableNavbar,
    useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

function NavbarBackdrop(props: ComponentProps<'div'>) {
    return (
        <div
            role="presentation"
            {...props}
            className={clsx('navbar-sidebar__backdrop', props.className)}
        />
    );
}

export default function NavbarLayout({children}: Props): JSX.Element {
    const {
        navbar: {hideOnScroll, style},
    } = useThemeConfig();
    const mobileSidebar = useNavbarMobileSidebar();
    const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);
    return (
        <nav
            ref={navbarRef}
            className={clsx(
                'navbar',
                'navbar--fixed-top',
                styles.navbar,
                hideOnScroll && [
                    styles.navbarHideable,
                    !isNavbarVisible && styles.navbarHidden,
                ],
                {
                    'navbar--dark': style === 'dark',
                    'navbar--primary': style === 'primary',
                    'navbar-sidebar--show': mobileSidebar.shown,
                },
            )}>
            {children}
            <NavbarBackdrop onClick={mobileSidebar.toggle}/>
            <NavbarMobileSidebar/>
        </nav>
    );
}
