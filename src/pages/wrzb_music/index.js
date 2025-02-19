import React from 'react';
import NavBar from '../../components/NavBar';
import styles from './index.module.scss';
import LayoutProviders from '@theme/Layout/Provider';
import Footer from '@theme/Footer';

export default function Index() {
  return (
    <LayoutProviders>
      {/* 导航栏 */}
      <NavBar/>
      <div id={styles.box_container}>
        <section className={`${styles.width} ${styles.outside_container}`}>
          {/* 标题 */}
          <div className={styles.title}>
            <h1 style={{textAlign: 'center'}}>无人直播场控产品介绍</h1>
            <div style={{textAlign: 'center'}}>
              该产品适合批量操无人直播音乐场控，场控软件有6个窗口，包含主播、副播、场控，背景音乐窗口、控制窗口<br/>
              可以根据设定的顺序进行播放、卡点播放、跳转播放等自定义规则都支持
              <br/>
              <a
                className={`${styles.btns} ${styles.enterprise}`}
                href='/docs/zh-cn/joinus'
              >
                试用购买请联系我们
              </a>
            </div>
          </div>
          {/* 分类 */}
          <div className={styles.type_sort}>
            {/* 社区版 */}
            <div>
              <div
                className={styles.type_sort_title}
                style={{
                  borderBottom: '1px solid #cccccc',
                  marginBottom: '12px'
                }}
              >
                <h1>多窗口播放</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 无人直播场控-多窗口播放" src="/index/wrzb/20231011173424.png"/>
                <ul
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>3个主播
                  </li>
                  <li>3个场控
                  </li>
                  <li>自定义背景音乐
                  </li>
                </ul>
              </div>
              {/* 按钮 */}
            </div>
            {/* 企业版 */}
            <div>
              <div
                className={styles.type_sort_title}
                style={{
                  borderBottom: '1px solid #cccccc',
                  marginBottom: '12px'
                }}
              >
                <h1>规则控制</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 无人直播场控-多窗口播放" src="/index/wrzb/20231011173424.png"/>
                <ul
                  className={styles.enterprise}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>
                    根据设定规则进行跳转播放
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                className={styles.type_sort_title}
                style={{
                  borderBottom: '1px solid #cccccc',
                  marginBottom: '12px'
                }}
              >
                <h1>音乐卡点</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 无人直播场控-多窗口播放" src="/index/wrzb/20231011173424.png"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>可以自定义卡点音乐，自动截取需要播放的音乐
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </LayoutProviders>
  );
}
