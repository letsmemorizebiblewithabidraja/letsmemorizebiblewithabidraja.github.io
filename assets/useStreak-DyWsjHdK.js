import{c as l,a as i,r as a}from"./index-B5VguUxM.js";import{g as f,r as d}from"./SkeletonCard-CDH6QtLs.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],y=l("flame",k);function S(){const{user:t}=i(),[u,s]=a.useState(null),[c,r]=a.useState(!0),n=a.useCallback(async()=>{if(!t)return null;const e=await f(t.uid);return s(e),e},[t]);a.useEffect(()=>{if(!t){s(null),r(!1);return}r(!0),n().finally(()=>r(!1))},[t,n]);const o=a.useCallback(async()=>{if(!t)return null;const e=await d(t.uid);return s(e),e},[t]);return{streak:u,loading:c,refresh:n,markActive:o}}export{y as F,S as u};
