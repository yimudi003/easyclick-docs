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
            <h1 style={{textAlign: 'center'}}>企业版安卓中控投屏产品介绍</h1>
            <div style={{textAlign: 'center'}}>
              该产品适合批量操作安卓设备,免root，适合业务场景跨境电商、tiktok营销、MCN机构、批量游戏搬砖打金等
              <br/>
              <b>
                本产品特性是支持无线投屏、usb投屏、hid模式投屏
              </b>
              <br/>
              <a
                className={`${styles.btns} ${styles.enterprise}`}
                href='/docs/zh-cn/centerscreen/openscreen'>
                安卓中控投屏教程
              </a>
              <br/>
              <a
                className={`${styles.btns} ${styles.enterprise}`}
                href='/docs/zh-cn/joinus'>
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
                <h1>中控管理</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 安卓中控投屏系统" src="/andqk/qkxc1.jpg"/>
                <ul
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>免root批量执行脚本，实时监控脚本状态
                  </li>
                  <li>批量执行脚本、停止脚本等
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
                <img alt="EasyClick 安卓中控投屏系统" src="/andqk/qkxc2.jpg"/>
                <ul
                  className={styles.enterprise}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>
                    支持局域网扫描设备，adb wifi 扫描
                  </li>
                  <li>
                    支持执行脚本，附加脚本参数，参数编辑等
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
                <h1>投屏操作</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 安卓中控投屏系统" src="/andqk/qkxc3.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>支持无线投屏,usb投屏等
                  </li>
                  <li>支持输入、点击、滑动等以及主屏同步操作其他设备
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
                <img alt="EasyClick 安卓中控投屏系统" src="/andqk/qkxc4.jpg"/>
                <ul
                  className={styles.cloud}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>支持设置单设备多分组
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
                <h1>图像视频传输</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 安卓中控投屏系统" src="/andqk/qkxc5.jpg"/>
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
                  <li>支持剪切板操作
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
                <h1>脚本参数</h1>
              </div>
              <div className={styles.type_sort_details}>
                <img alt="EasyClick 安卓中控投屏系统" src="/andqk/qkxc6.jpg"/>
                <ul
                  className={styles.enterprise}
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: '40px 0px'
                  }}
                >
                  <li>与EC中控系统无缝结合，支持启停脚本,支持脚本参数自定义
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
