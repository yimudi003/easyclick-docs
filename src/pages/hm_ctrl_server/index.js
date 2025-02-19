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
            <h1 style={{textAlign: 'center'}}>鸿蒙Next USB投屏产品介绍</h1>
            <div style={{textAlign: 'center'}}>
              该产品适合批量操作 纯血鸿蒙鸿蒙Next,，适合业务场景跨境电商、tiktok营销、MCN机构、批量游戏搬砖打金等，无风控
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
                <h1>投屏管理</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 鸿蒙Next投屏系统-批量投屏" src="/index/hmtp/1.jpg"/>
                <ul
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>纯血鸿蒙Next中控、投屏
                  </li>
                  <li>批量投屏，批量控制
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
                <h1>全屏操作</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 鸿蒙Next投屏系统-全屏操作" src="/index/hmtp/2.jpg"/>
                <ul
                  className={styles.enterprise}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>
                    全屏操作，同步手势
                  </li>
                  <li>
                    点击、滑动、输入文字、键盘打字都支持
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
                <h1>快捷回复</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 鸿蒙Next投屏系统-设备组网" src="/index/hmtp/3.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>多设备一次回复
                  </li>
                  <li>适合客服场景
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
                <h1>分组、分辨率设置</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 鸿蒙Next投屏系统-分辨率" src="/index/hmtp/4.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>支持设置设备分组
                  </li>
                  <li>支持设置帧率、分辨率等
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
                <h1>文件传输</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 鸿蒙Next投屏系统-文件传输" src="/index/hmtp/5.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>支持视频、图像文件传输到相册
                  </li>
                  <li>支持打开URL、URL Schemes操作
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
                <h1>脚本控制</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 鸿蒙Next投屏系统-脚本控制" src="/index/hmtp/6.jpg"/>
                <ul
                  className={styles.enterprise}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>与EC中控系统无缝结合，支持启停脚本
                  </li>
                  <li>支持与EC中控同步系统共享分组
                  </li>
                  <li>支持快捷设置分组、别名等
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
