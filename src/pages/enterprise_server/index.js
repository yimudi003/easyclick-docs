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
            <h1 style={{textAlign: 'center'}}>企业版安卓iOS云控产品介绍</h1>
            <div style={{textAlign: 'center'}}>

              <a
                className={`${styles.btns} ${styles.enterprise}`}
                href='/docs/zh-cn/joinus'
              >
                云控支持安卓和iOS，试用购买请联系我们
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
                <h1>设备管理</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick手机自动化云控-设备管理" src="/index/ecloud/ecloud-1.jpg"/>
                <ul
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>可批量管理上千台设备
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
                <h1>投屏操作</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick手机自动化云控-投屏操作" src="/index/ecloud/ecloud-2.jpg"/>
                <ul
                  className={styles.enterprise}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>
                    实时的设备监控
                  </li>
                  <li>
                    实时手机投屏操作
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
                <h1>批量任务</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick手机自动化云控-批量任务" src="/index/ecloud/ecloud-3.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>批量管理任务，实时下发脚本
                  </li>
                </ul>
              </div>
            </div>
            {/*租户管理*/}
            <div>
              <div
                className={styles.type_sort_title}
                style={{
                  borderBottom: '1px solid #cccccc',
                  marginBottom: '12px'
                }}
              >
                <h1>租户管理</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick手机自动化云控-租户管理" src="/index/ecloud/ecloud-4.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>租户管理，共享脚本和任务
                  </li>
                </ul>
              </div>
            </div>
            {/*动态数据*/}
            <div>
              <div
                className={styles.type_sort_title}
                style={{
                  borderBottom: '1px solid #cccccc',
                  marginBottom: '12px'
                }}
              >
                <h1>动态数据</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick手机自动化云控-动态数据" src="/index/ecloud/ecloud-5.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>动态收集脚本回传数据

                  </li>
                </ul>
              </div>
            </div>
            {/*高并发监控*/}
            <div>
              <div
                className={styles.type_sort_title}
                style={{
                  borderBottom: '1px solid #cccccc',
                  marginBottom: '12px'
                }}
              >
                <h1>高并发监控</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img  alt="EasyClick手机自动化云控-高并发监控" src="/index/ecloud/ecloud-6.jpg"/>
                <ul
                  className={styles.enterprise}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>实时监控系统运行

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
