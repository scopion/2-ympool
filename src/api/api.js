//公共api
// const mainUrl = 'http://local.pool.com/'
const mainUrl = 'https://ympool.com/' //主Url
const poolinfo = mainUrl + 'api/public/poolinfo' //矿池信息
const poolratechart = mainUrl + 'api/public/poolratechart' //全网半途
const pool_sheet = mainUrl + 'api/public/pool_sheet' //用户矿机波动信息
const pool_allsheet = mainUrl + 'api/public/pool_allsheet' //全网矿机波动信息
const userinfo = mainUrl + 'api/public/userinfo' //用户钱包地址信息

export default {
  poolinfo,
  poolratechart,
  pool_allsheet,
  pool_sheet,
  userinfo,
}
