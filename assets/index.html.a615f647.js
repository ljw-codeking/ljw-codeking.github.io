import{r as e,o as p,c as l,a as n,b as r,F as c,d as s,e as t}from"./app.ff208358.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s(`<h3 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h3><p>\u987E\u660E\u601D\u610F\uFF0C\u5C31\u662F\u4E00\u5C42\u4E00\u5C42\u9012\u5F52\u5728\u5411\u4E0A\u56DE\u6EAF</p><ul><li>\u4E3B\u8981\u7528\u4E8E\u4E0D\u786E\u5B9A\u7684\u5FAA\u574F\u4EE5\u53CA\u6DF1\u5EA6\u904D\u5386</li><li>\u8981\u6709\u9000\u51FA\u6761\u4EF6\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u6B7B\u5FAA\u574F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 2-1 \u6590\u6CE2\u90A3\u5951\u6570\u5217</span>
<span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),b={href:"https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/",target:"_blank",rel:"noopener noreferrer"},m=t("N \u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6"),d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const rootTree = {
      val: 1,
      children: [
        { val: 2, children: [{ val: 5, children: [] }] },
        { val: 3, children: [null] },
        { val: 4, children: [] }
      ]
    }

 var maxDepth = function (root) {
      if (root == null)
        return 0;
      let ans = 0;
      for (const child of root.children) {
        console.log(ans, maxDepth(child))
        ans = Math.max(ans, maxDepth(child));
      } 
      return ans + 1;
    };
 maxDepth(rootTree)
// 0 1
// 0 2
// 0 1
// 0 0
// 2 1
// 0 0
// 2 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,1);function k(h,f){const a=e("ExternalLinkIcon");return p(),l(c,null,[u,n("p",null,[n("a",b,[m,r(a)])]),d],64)}var v=o(i,[["render",k]]);export{v as default};
