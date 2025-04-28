import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router (既に存在するはず)
import { createPinia } from 'pinia'

// --- ここから Vuetify のインポートと設定 ---
import 'vuetify/styles'; // Vuetify のスタイルシート
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Vuetify コンポーネントをまとめてインポート
import * as directives from 'vuetify/directives'; // Vuetify ディレクティブをまとめてインポート

// アイコンフォントのスタイルシートをインポート（@mdi/font をインストールした場合）
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components, // インポートしたコンポーネントを登録
  directives, // インポートしたディレクティブを登録
  // ここにテーマやデフォルト設定などのオプションを追加できます
  // 例: アイコンセットの指定
  icons: {
    defaultSet: 'mdi', // デフォルトのアイコンセットを Material Design Icons に設定
  },
});
// --- ここまで Vuetify の設定 ---


const app = createApp(App);

// Vue Router と Pinia は既に登録済みのはず
app.use(router);
app.use(createPinia())

// ★ Vuetify プラグインをアプリケーションに登録 ★
app.use(vuetify);


app.mount('#app');