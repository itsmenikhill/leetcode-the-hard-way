"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4275],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63039:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n,o=r(87462),i=r(63366),a=(r(67294),r(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",tags:["Depth-First Search","Breadth-First Search","Graph","Topological Sort"]},u="0210 - Course Schedule II (Medium)",p={unversionedId:"0200-0299/course-schedule-ii-medium",id:"0200-0299/course-schedule-ii-medium",title:"0210 - Course Schedule II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",source:"@site/solutions/0200-0299/0210-course-schedule-ii-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/course-schedule-ii-medium",permalink:"/leetcode-the-hard-way/solutions/0200-0299/course-schedule-ii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0210-course-schedule-ii-medium.md",tags:[{label:"Depth-First Search",permalink:"/leetcode-the-hard-way/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/leetcode-the-hard-way/solutions/tags/breadth-first-search"},{label:"Graph",permalink:"/leetcode-the-hard-way/solutions/tags/graph"},{label:"Topological Sort",permalink:"/leetcode-the-hard-way/solutions/tags/topological-sort"}],version:"current",sidebarPosition:210,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",tags:["Depth-First Search","Breadth-First Search","Graph","Topological Sort"]},sidebar:"tutorialSidebar",previous:{title:"0207 - Course Schedule (Medium)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/course-schedule-medium"},next:{title:"0214 - Shortest Palindrome (Hard)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/shortest-palindrome-hard"}},c={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Topological Sorting",id:"approach-1-topological-sorting",level:2}],m=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),h={toc:d};function g(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0210---course-schedule-ii-medium"},"0210 - Course Schedule II (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"There are a total of ",(0,a.kt)("inlineCode",{parentName:"p"},"numCourses")," courses you have to take, labeled from ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"numCourses - 1"),". You are given an array ",(0,a.kt)("inlineCode",{parentName:"p"},"prerequisites")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"prerequisites[i] = [ai, bi]")," indicates that you ",(0,a.kt)("strong",{parentName:"p"},"must")," take course ",(0,a.kt)("inlineCode",{parentName:"p"},"bi")," first if you want to take course ",(0,a.kt)("inlineCode",{parentName:"p"},"ai"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For example, the pair ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 1]"),", indicates that to take course ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," you have to first take course ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the ordering of courses you should take to finish all courses"),". If there are many valid answers, return ",(0,a.kt)("strong",{parentName:"p"},"any")," of them. If it is impossible to finish all courses, return ",(0,a.kt)("strong",{parentName:"p"},"an empty array"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: numCourses = 2, prerequisites = [[1,0]]\nOutput: [0,1]\nExplanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\nOutput: [0,2,1,3]\nExplanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: numCourses = 1, prerequisites = []\nOutput: [0]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= numCourses <= 2000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= prerequisites.length <= numCourses * (numCourses - 1)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prerequisites[i].length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= ai, bi < numCourses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ai != bi")),(0,a.kt)("li",{parentName:"ul"},"All the pairs ",(0,a.kt)("inlineCode",{parentName:"li"},"[ai, bi]")," are ",(0,a.kt)("strong",{parentName:"li"},"distinct"),".")),(0,a.kt)("h2",{id:"approach-1-topological-sorting"},"Approach 1: Topological Sorting"),(0,a.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// for topological sorting tutorial,\n// see https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/topological-sorting\nstruct TopologicalSort {\n    int n;\n    vector<int> indegree;\n    vector<int> orders;\n    vector<vector<int>> G;\n    bool isTopologicalSorted = false;\n\n    TopologicalSort(vector<vector<int>>& g, vector<int>& in) {\n        G = g;\n        n = (int) G.size();\n        indegree = in;\n\n        int res = 0;\n        queue<int> q;\n        for(int i = 0; i < n; i++) {\n            if(indegree[i] == 0) {\n                q.push(i);\n            }\n        }\n        while(!q.empty()) {\n            auto u = q.front(); q.pop();\n            orders.push_back(u);\n            for(auto v : G[u]) {\n                if(--indegree[v] == 0) {\n                    q.push(v);\n                }\n            }\n            res++;\n        }\n        isTopologicalSorted = res == n;\n    }\n};\n\nclass Solution {\npublic:\n    vector<int> findOrder(int n, vector<vector<int>>& prerequisites) {\n        // define the graph\n        vector<vector<int>> g(n);\n        // define indegree\n        vector<int> indegree(n);\n        // build the graph\n        for(auto p : prerequisites) {\n            // we have to take p[1] in order to take p[0]\n            g[p[1]].push_back(p[0]);\n            // increase indegree by 1 for p[0]\n            indegree[p[0]]++;\n        }\n        // init topological sort\n        TopologicalSort ts(g, indegree);\n        // we can finish all courses only if we can topologically sort\n        // hence, return an empty array if it cannot be sorted\n        if (!ts.isTopologicalSorted) return {};\n        // else return the order\n        return ts.orders;\n    }\n};\n")))}g.isMDXComponent=!0}}]);