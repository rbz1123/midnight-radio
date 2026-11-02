// ===== 深夜电台 · MIDNIGHT FM 配置 =====
// 把下面两行换成你自己的 Supabase 项目信息。
// 位置：Supabase 后台 → Project Settings → API → 找到 Project URL 和 anon public key。
// 这个 key 是「匿名公开 key」，设计上就是给前端用的（配合表的 RLS 策略保证安全），可以放心放进网页。
window.MIDNIGHT_CONFIG = {
  SUPABASE_URL: "https://ywxdoydirbozyjvbtfyz.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_fCZg2bbKOIHLNguGyOuamw_XaMWupw6",
  // 网易云音乐 API 后端地址（部署 NeteaseCloudMusicApi 后填这里，用于「点击自动搜索并播放第一首」）
  NETEASE_API_URL: "https://neteasecloudmusicapi-s15o.onrender.com"
};
