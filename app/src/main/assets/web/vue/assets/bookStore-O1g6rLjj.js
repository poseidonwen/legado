import{m as r}from"./vendor-UVL3l2rb.js";import{A as c}from"./index-CyZ_tLuT.js";const f=r("book",{state:()=>({connectStatus:"正在连接后端服务器……",connectType:"",newConnect:!0,searchBooks:[],shelf:[],catalog:[],readingBook:{index:0,chapterPos:0},popCataVisible:!1,contentLoading:!0,showContent:!1,config:{theme:0,font:0,fontSize:18,readWidth:800,infiniteLoading:!1,customFontName:"",jumpDuration:1e3,spacing:{paragraph:1,line:.8,letter:0}},miniInterface:!1,readSettingsVisible:!1}),getters:{bookProgress:e=>{var i;if(e.catalog.length==0)return;const{index:t,chapterPos:s,bookName:o,bookAuthor:a}=e.readingBook;let n=(i=e.catalog[t])==null?void 0:i.title;if(n)return{name:o,author:a,durChapterIndex:t,durChapterPos:s,durChapterTime:new Date().getTime(),durChapterTitle:n}}},actions:{setConnectStatus(e){this.connectStatus=e},setConnectType(e){this.connectType=e},resetConnect(){this.connectStatus="正在连接后端服务器……",this.connectType="",this.clearBooks()},setNewConnect(e){this.newConnect=e},addBooks(e){this.shelf=e},clearBooks(){this.shelf=[]},setCatalog(e){this.catalog=e},setPopCataVisible(e){this.popCataVisible=e},setContentLoading(e){this.contentLoading=e},setReadingBook(e){this.readingBook=e},setConfig(e){Object.assign(this.config,e)},setReadSettingsVisible(e){this.readSettingsVisible=e},setShowContent(e){this.showContent=e},setMiniInterface(e){this.miniInterface=e},async setSearchBooks(e){e.forEach(t=>{this.shelf.find(o=>o.bookUrl==t.bookUrl)===void 0&&this.searchBooks.push(t)})},clearSearchBooks(){this.searchBooks=[]},async saveBookProgress(){return this.bookProgress?c.saveBookProgress(this.bookProgress):Promise.resolve()}}});export{f as u};