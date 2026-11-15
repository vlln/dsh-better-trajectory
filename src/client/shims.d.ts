// 宿主客户端包只在运行时由 DSH 的 module loader 提供，这里给 fork 源码一个宽松声明。
declare module '@deepseek-ai/*'
