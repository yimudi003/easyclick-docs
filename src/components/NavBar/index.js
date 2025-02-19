import Translate from '@docusaurus/Translate';
import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import LocaleDropdownNavbarItem from '@site/src/theme/NavbarItem/LocaleDropdownNavbarItem';

export default function Index(props) {
  // 菜单开关
  const [menu_Config, setMenu_Config] = useState(true);
  const [menu_Config_Drop, setMenu_Config_Drop] = useState(false);
  useEffect(() => {
    // 注册页面滚动事件
    window.addEventListener('scroll', handleScrollPage);
    return () => {
      window.removeEventListener('scroll', handleScrollPage);
    };
  }, []);
  //头部NavBar滚动
  const handleScrollPage = () => {
    let scrollTop = document.documentElement.scrollTop;
    const nav_scroll = document.querySelector('#topHeader'); //导航栏
    console.log("nav_scroll ", nav_scroll)
    // 头部tab
    if (scrollTop > 0) {
      nav_scroll.classList.add('nav_scroll_bar');
    } else {
      nav_scroll.classList.remove('nav_scroll_bar');
    }
  };
  return (
    <div>
      <header id="topHeader" className={`${styles.mdHeader}`}>
        {/* 导航栏 */}
        <nav className={`${styles.nav_bar} ${styles.width}`}>
          {/* 左侧logo */}

          <a href='/' className={`${styles.mytitle}`}>
            <img className={`${styles.mylogo}`} src='/img/easyclick.png'/>
            <span className={`${styles.mytitle2}`}>EasyClick - 自动化测试领导者</span>
          </a>
          {/* 右侧列表 */}
          <div className={styles.nav_container}>
            <ul className={styles.nav_lists}>

              <li>
                <div className="dropdown dropdown--hoverable">
                  自动化产品文档
                  <img className={styles.iconDropDown}
                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge3Wr0tdcRzH4WfeKcpwCCIMBAXBIlgWFpYMppUVLUs2i9F/4SbXtrBmsmhZWVpYWrhhRVgZCBMGggiiyIZjTsO9XyZ3XO65P86P8HngE88571c7hBBCCCGEEEIYujpuK371rDE7FRjb6d5kjYAHeFeB0e23i5FeQrQe2KvA+HQHqPUakdSwX4GI9xjtNyIZw4cSIz5ifNCIZAKfSoj4jEfDikgeo1FgRAOTw45IpvClgIhDTOcVkczga44R3/Ak74hkFkc5RBxjvqiIZA7fBxx+/35godCCexZx0mVgljvFUsHb/7OMM/1HnONp4as7eIZLvUdctJ6tlOe4kj3iJ1ZKWZrBKn7pHnGNFyVtzOwlfusc8Qfrpa3r0Zrm4PaIG7wqcVdfNjSHp4i/2Cx10QC2/AvZzvNDD/N8Od5q/jXD65y/FUIIIYRQNXfPaMyAru8lkAAAAABJRU5ErkJggg=="/>
                  <ul className="dropdown__menu">
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/docs">安卓版开发文档</a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/iosdocs">iOS USB版开发文档</a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/iostjdocs">iOS 脱机版开发文档</a>
                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown--hoverable">
                  云控/投屏产品
                  <img className={styles.iconDropDown}
                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge3Wr0tdcRzH4WfeKcpwCCIMBAXBIlgWFpYMppUVLUs2i9F/4SbXtrBmsmhZWVpYWrhhRVgZCBMGggiiyIZjTsO9XyZ3XO65P86P8HngE88571c7hBBCCCGEEEIYujpuK371rDE7FRjb6d5kjYAHeFeB0e23i5FeQrQe2KvA+HQHqPUakdSwX4GI9xjtNyIZw4cSIz5ifNCIZAKfSoj4jEfDikgeo1FgRAOTw45IpvClgIhDTOcVkczga44R3/Ak74hkFkc5RBxjvqiIZA7fBxx+/35godCCexZx0mVgljvFUsHb/7OMM/1HnONp4as7eIZLvUdctJ6tlOe4kj3iJ1ZKWZrBKn7pHnGNFyVtzOwlfusc8Qfrpa3r0Zrm4PaIG7wqcVdfNjSHp4i/2Cx10QC2/AvZzvNDD/N8Od5q/jXD65y/FUIIIYRQNXfPaMyAru8lkAAAAABJRU5ErkJggg=="/>
                  <ul className="dropdown__menu">
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/android_center_screen">
                        企业版安卓中控投屏</a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/enterprise_server">
                        企业版安卓iOS云控</a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/local_ctrl_server">
                        企业版iOS USB投屏</a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/ios_wifi_server">
                        企业版iOS无线中控投屏</a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/hm_ctrl_server">
                        企业版鸿蒙Next USB投屏</a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/docs/zh-cn/centerscreen/hidlinux">
                        安卓HID小主机</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <li>
                  <a className={`${styles.DropDownFont} dropdown__link`} href="/hmdocs">鸿蒙Next USB版文档</a>
                </li>
              </li>
              <li>
                <div className="dropdown dropdown--hoverable">
                  网络验证/IP代理
                  <img className={styles.iconDropDown}
                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge3Wr0tdcRzH4WfeKcpwCCIMBAXBIlgWFpYMppUVLUs2i9F/4SbXtrBmsmhZWVpYWrhhRVgZCBMGggiiyIZjTsO9XyZ3XO65P86P8HngE88571c7hBBCCCGEEEIYujpuK371rDE7FRjb6d5kjYAHeFeB0e23i5FeQrQe2KvA+HQHqPUakdSwX4GI9xjtNyIZw4cSIz5ifNCIZAKfSoj4jEfDikgeo1FgRAOTw45IpvClgIhDTOcVkczga44R3/Ak74hkFkc5RBxjvqiIZA7fBxx+/35godCCexZx0mVgljvFUsHb/7OMM/1HnONp4as7eIZLvUdctJ6tlOe4kj3iJ1ZKWZrBKn7pHnGNFyVtzOwlfusc8Qfrpa3r0Zrm4PaIG7wqcVdfNjSHp4i/2Cx10QC2/AvZzvNDD/N8Od5q/jXD65y/FUIIIYRQNXfPaMyAru8lkAAAAABJRU5ErkJggg=="/>
                  <ul className="dropdown__menu">
                    <li>
                      <a
                        className={`${styles.DropDownFont} dropdown__link`}
                        target={"_blank"}
                        href="https://uc.ieasyclick.com">网络验证平台</a>
                    </li>
                    <li>
                      <a
                        className={`${styles.DropDownFont} dropdown__link`}
                        target={"_blank"} href="http://bbs.ieasyclick.com">论坛交流</a>
                    </li>
                    <li>
                      <a
                        className={`${styles.DropDownFont} dropdown__link`}
                        target={"_blank"}
                        href="https://www.zhizhuip.com/?ref=ieasyclick">全球IP代理</a>
                    </li>
                  </ul>
                </div>


              </li>
              <LocaleDropdownNavbarItem dropdownItemsBefore={[]} dropdownItemsAfter={[]} items={[]}/>
            </ul>
          </div>
          {/* 移动端导航栏 */}
          <div
            className={styles.isMobieNav}
            style={{display: 'none'}}
            onClick={() => {
              setMenu_Config(!menu_Config);
              setMenu_Config_Drop(!menu_Config_Drop);
            }}
          >
            {(menu_Config && <img src='/img/menu.svg' alt=''/>) || (
              <img src='/img/close.svg' alt=''/>
            )}
          </div>
        </nav>
      </header>
      {menu_Config_Drop && (
        <div className={styles.isMobieNavBar}>
          <ul className={styles.mobile_nav_lists}>
            <li>
              <a href='/android_center_screen'>
                企业版安卓中控投屏
              </a>
            </li>

            <li>
              <a href='/enterprise_server'>
                企业版安卓iOS云控
              </a>
            </li>
            <li>
              <a href='/local_ctrl_server'>
                企业版iOS USB投屏
              </a>
            </li>
            <li>
              <a href='/ios_wifi_server'>
                企业版iOS无线中控投屏
              </a>
            </li>
            <li>
              <a href='/docs/zh-cn/centerscreen/hidlinux'>
                安卓HID小主机
              </a>
            </li>
            <li>
              <div className="dropdown dropdown--hoverable">
                自动化产品
                <img className={styles.iconDropDown}
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge3Wr0tdcRzH4WfeKcpwCCIMBAXBIlgWFpYMppUVLUs2i9F/4SbXtrBmsmhZWVpYWrhhRVgZCBMGggiiyIZjTsO9XyZ3XO65P86P8HngE88571c7hBBCCCGEEEIYujpuK371rDE7FRjb6d5kjYAHeFeB0e23i5FeQrQe2KvA+HQHqPUakdSwX4GI9xjtNyIZw4cSIz5ifNCIZAKfSoj4jEfDikgeo1FgRAOTw45IpvClgIhDTOcVkczga44R3/Ak74hkFkc5RBxjvqiIZA7fBxx+/35godCCexZx0mVgljvFUsHb/7OMM/1HnONp4as7eIZLvUdctJ6tlOe4kj3iJ1ZKWZrBKn7pHnGNFyVtzOwlfusc8Qfrpa3r0Zrm4PaIG7wqcVdfNjSHp4i/2Cx10QC2/AvZzvNDD/N8Od5q/jXD65y/FUIIIYRQNXfPaMyAru8lkAAAAABJRU5ErkJggg=="/>
                <ul className="dropdown__menu">
                  <li>
                    <a className={`${styles.DropDownFont} dropdown__link`} href="/docs">易点云测安卓版本</a>
                  </li>
                  <li>
                    <a className={`${styles.DropDownFont} dropdown__link`} href="/iosdocs">易点云测iOS版本</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href='/docs'>
                安卓开发文档
              </a>
            </li>
            <li>
              <a href='/iosdocs'>
                iOS USB开发文档
              </a>
            </li>
            <li>
              <a href='/iostjdocs'>
                iOS 脱机开发文档
              </a>
            </li>
            <li>
              <a href='/hmdocs'>
                鸿蒙Next开发文档
              </a>
            </li>
            <li>
              <a href='https://uc.ieasyclick.com'>
                网络验证平台
              </a>
            </li>
            <li>
              <a href='https://www.zhizhuip.com/?ref=ieasyclick'>
                全球IP代理
              </a>
            </li>
            <li>
              <a href='https://bbs.ieasyclick.com'>
                论坛交流
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
