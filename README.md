# Umi3后台项目实践
## Umi3_manage-study

## 
- 1.当登录成功之后服务器会返回一个jwt的token,里面包含用户信息
- 2.客户端需要把token保存在本地 localStorage
- 3.以后每次调用后台接口的时候要带上这个token ,放在请求头的authorization
- 4.服务器端可以获取到这个请求头，然后解出用户信息返回