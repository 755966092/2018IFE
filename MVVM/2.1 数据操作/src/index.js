import san from 'san';
import {router} from 'san-router';
import Test from './app.san';
// 控制路由，引入San组件
router.add({rule: '/', Component: Test, target: '#app'});

// 启动
router.start()

