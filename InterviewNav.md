* Javascript question **
1. Let,const,var-- Callback,Promise,Async/await-- Closure--Hoisting
2.This,context
3. Es6 + Feature : (let,const, Spread,Rest, Destruturing,Arrow function, Class, Modules, Promise, Map, Set)
4.Temporary Dead Zone-- Lexical scope -- == vs ===
5.This trong function thuong va arrow function
6.Even loop , callstack , mircotask vs marcotask ( Promise ,setTimeout)
7.Prototype , Class
8. ?? vs ||
9.Event Degalation
10. Virtualization
11. Cac kieu du lieu trong js : Primititve vs reference
12. Heap vs stack memory * Garbage Collection
13. Currying Function ->
14.Deepclone, Promise handling, Debounce, throttle

15. Toán tử + Method + xử lý arr,object.




* React Question****

Reactjs là gì : 

1. Dom , Virtual DOM, Jsx ,Component, DOM manipulation
2. State, Props, lifecycle method, virtualization.
3.React Hook ( useState ,useEffect, useCallback ,useMemo, React.memo, useRef, useContext) -- 1 vai hook moi
4.Context API ,Hoc
5. Performance optimization ( code spliting , lazy loading)
6. State management : Redux ,zustand ,Redux-toolkit
7.Jest, React testing library
8. SEO, security ,Accessibility
9 . Localstorage ,session , cookie
-- uselayouteffect : ,hook....
10.Cors , Bản chất ai block request CORS — Browser hay Backend?
CORS (Cross-Origin Resource Sharing) là cơ chế bảo mật do trình duyệt áp dụng để kiểm soát việc một trang web (origin A) có thể gọi API hoặc truy cập tài nguyên từ một domain khác (origin B) hay không.
Browser là bên block request (đúng hơn là block response không hợp lệ).
Backend chỉ có nhiệm vụ “bật đèn xanh” bằng cách gửi (header CORS).
11. Những thẻ HTML nào quan trọng cho SEO (title, meta description, alt, heading h1–h6…)?
12. React Fragment (<> </>) có ảnh hưởng đến accessibility không?

* Nextjs question *
1.Hydration trong React SSR (Next.js) có thể gặp vấn đề performance nào?
2. Hydration = quá trình React gắn kết (attach) các event listener và state vào HTML đã được render sẵn từ server.
hydration có thể gây chậm vì React phải so khớp và gắn event listener cho toàn bộ DOM, dẫn đến block main thread, Time to Interactive chậm.

* Web Perfomance Question***

1.Làm sao để giảm kích thước bundle trong ứng dụng React?
-- code spliting + dynamic import/lazy load + giảm số lượng code k cần thiết  + image optimization .
2.Code splitting và lazy loading là gì? Cách implement trong React?
-- Dùng React.Lazy + Suspense : tạo ra 1 bundle riêng cho component.
3.  Debounce --- throttle
Debounce hoãn việc gọi hàm đến khi người dùng ngừng thao tác, còn Throttle giới hạn số lần gọi trong một khoảng thời gian. Debounce dùng cho search box, resize; Throttle dùng cho scroll, drag/drop
4. Event delegation là gì? Nó giúp tối ưu performance ra sao?
- là việc gắn event cho phần tử cha thay vì add cho các phần tử con -> tiết kiệm bộ nhớ , cpu
5.React reconciliation là gì, và tại sao Virtual DOM giúp cải thiện hiệu năng?
6.Tại sao key trong list quan trọng, và nó ảnh hưởng thế nào đến performance?
7.Concurrent Rendering trong React 18:
React 18 concurrent rendering cho phép ưu tiên và tạm dừng render để UI luôn mượt, còn Suspense giúp xử lý async và loading state hiệu quả hơn
8.Nếu React list có 10k phần tử và bị lag khi scroll, bạn sẽ xử lý thế nào?
Giảm re-render với React.memo -> Row
Virtualization
Infinity scroll + pagination
9.Khi nào nên dùng Context API và khi nào nên tránh vì ảnh hưởng performance?
dùng Context API khi cần truyền global state ít thay đổi, ví dụ theme, i18n, hoặc auth , tránh dùng cho state thay đổi thường xuyên, vì mỗi lần Provider update thì toàn bộ consumer sẽ re-render
10. Batching 
Batching = React gom nhiều state update lại thành một lần re-render để giảm số lần render
11. Event loop hoạt động thế nào? Vì sao hiểu microtask và macrotask lại quan trọng cho hiệu năng?
Hiểu điều này quan trọng vì nó ảnh hưởng trực tiếp đến thứ tự chạy code, batching update (như trong React), và tối ưu responsiveness: nếu nhồi quá nhiều microtask sẽ block UI, còn dùng macrotask hợp lý có thể nhường thời gian cho browser render






* Algo***

* Project question***


* Behavior + Naver question***


* Minh collection *

Javascript : 
1. Js là biên dịch hay thông dịch
* là ngôn ngữ thông dịch, nhưng các hiện đại như V8 JIT (Just In Time) -> nó vừa có thông dịch vừa có yếu tố biên dịch.

2. Execution context 
* Là môi trường Js code được thực thi
- Lexical Scope : là phạm vi biến được xác định dựa trên vị trí code khi viết ra
- Dynamic scope : phụ thuộc vào nơi nó được gọi.
- This : là 1 tham chiếu trỏ đến đối tượng phụ thuộc vào cách hàm được gọi
- Context : là giá trị của this tại thời điểm thực thi hàm .

3. Prototype 
là cơ chế để các object trong JS có thể kế thừa và chia sẻ thuộc tính/ phương thức thông qua 1 chuỗi gọi là prototype chain
- khi bạn truy cập 1 attribute / method trong object -> js sẽ tìm theo thứ tự : trong chính object đó-> nếu không có nó tìm lên object prototype (thông qua proto) ->tìm lên chuỗi prototype -> nếu vẫn không có thì trả về undefined.
Person.prototype: giống như “khuôn mẫu” chứa các method được chia sẻ.
 p1 = new Person('hell');
p1.__proto__: là cái cầu nối của riêng object p1 để trỏ đến khuôn mẫu đó.

4. Scope chain : khi thực thi 1 hàm : -> js tìm biến trong phạm vi scope hiện tại -> nếu k tìm thấy thì tìm ngược lên phạm vi outer scope -> đi tiếp đến global scope -> nếu k thấy thì báo lỗi ReferenceError
Scope chain : dùng để tìm biến/ hàm khi thực thì code , Prototype chain dùng để tìm thuộc tính , phương thức của object.
-- thuộc tính : là biến gắn liên obj-lưu trữ dữ liệu , trạng thái của 1 obj -- method : là hàm gắn với object, dùng để mô tả hành động

5. Phân biệt object, array , Map, Set
* Object : là kiểu dữ liệu tham chiếu : lưu dữ cặp Key-Value (key chi co the la string) - không có method size.
* Array : là object đặc biệt , lưu dữ data theo chỉ số index , dùng khi cần thứ tự và vị trí
* Map : kiểu dữ liệu như object nhưng : key có thể là bất cứ kiểu dữ liệu.
* Set: Lưu dữ tập hợp giá trị duy nhất 

6. Viết function để custom Map method và chỉ lưu unique object.

7. Cách so sánh 2 object , cách tạo deep copy
* Cách so sánh 2 object  : 
-so sánh theo tham chiếu (===) và so sánh theo giá trị.  
-so sánh theo giá trị : dùng thư viện lodash (isEqual) or  ,  stringify() ( chỉ sử dụng với object đơn giản)
* Cách tạo deep copy: ( ứng dụng : để tránh thay đổi dữ liêu gốc)
- dùng JSON.parse(JSON.stringify(obj))
- dùng structuredClone(obj) , dùng thử viện lodash

8. Deep compare vs shallow compare ( là khái niệm trong react)
- shallow compare : chỉ so sánh reference ở cấp độ đầu tiên
- deep compare : so sánh toàn bộ cấu trúc , giá trị

9. Bubbling , Capturing , Target
* Bubbling : là cơ chế mà sự kiện được lan truyền từ element con lên element cha trong DOM tree
* Capturing: ngược lại với bubbling , muốn turn on thì cần set thêm 1 key là true khi addeventlistener
* Event target : là element đã thực sự được trigger event.
- để dừng việc lan truyền event : có thể sự dụng event.stopPropagation() 

10. Event capturing vs Event bubbling - cái nào xảy ra trước?
- capturing -> target-> bubbling

11. Event delegation:
* là kỹ thuật sử dụng event bubbling để xử lý event cho nhiều elements
thay vì add event for every element , add it to parent ->...

12. Nên phân biệt được Mount component và re-render component

13. Reflow and Repaint.
* Repaint : là quá trình vẽ lại các pixels trên màn hình khi thay đổi visual properties (color,background,visibility,box-shadow) : nhẹ
* Reflow : quá trình tính toán lại vị trí và kích thước các element trong DOM (vị trí, font, content , DOM structure)
nặng, phải tính toán toàn bộ lại layout
JS change DOM/CSS -> reflow -> repaint -> composite layer

14. tại sao k nên dụng inline-style : khó tái sử dụng , k hỗ trợ pseudo (hover,..),khó maintain, readable., là object ảnh hưởng khi render

15. Garbage Collection : 
* là cơ chế tự động quản lý bộ nhớ, khi 1 object không còn được tham chiếu trong chương trình nữa -> nó sẽ thành rác và được GC giải phóng vùng nhớ đó.-> tránh memory leaks
function demo() {
  let user = { name: "Alice" };
  console.log(user.name); // "Alice"
  user = null; // không còn tham chiếu tới object {name: "Alice"}
}
// => Sau khi hàm chạy xong, object {name: "Alice"} sẽ bị GC dọn đi

16.Quá trình từ khi gõ URL đến khi trang được hiển thị diễn ra thế nào?
* DNS lookup → TCP/TLS handshake → gửi HTTP request → nhận response (HTML) → parsing HTML → xây dựng DOM → parsing CSS → xây dựng CSSOM → DOM + CSSOM → Render Tree → Layout → Paint → Composite → hiển thị.

17.DOM, CSSOM, Render Tree khác nhau như thế nào?

18.Critical Rendering Path là gì? Làm sao để tối ưu?
* Chuỗi bước từ tải HTML/CSS/JS đến render màn hình.
* Tối ưu bằng: Minify, defer/async JS, critical CSS, lazy loading.

19. Local storage , session , cookie
* Local storage : lưu trữ data : key-value -> lưu trữ cho đến khi user, code xoá -> cache data tạm thời, lưu setting
* Session storage : tương tự local... nhưng khi đóng tab thì tự xoá( form đang điền dở,...)
* cookie: Dung lượng nhỏ,có thể set expire time -> lưu thông tin giữa client vs server (token)
20. instance là gì trong js
* là 1 object cụ thể được tạo ra từ 1 class or 1 constructor function
* Contructor func  : mặc định trả về 1 object mới (instance) -> trừ khi bạn tự return 1 cái gì đó khác.

* Security *
1. CSRF (Cross site Request forgery)
* là lợi dụng cookie/session còn hiệu lực , gửi link lạ để gửi request độc hại.
2. XSS (Cross site scripting)
* chèn mã độc vào web để chạy trên trình duyệt người dùng
3. Cors : 
* là chính sách bảo mật của browser , ngăn gọi api khác domain. Browser mặc đinh chặn, BE setup để mở.
* postman không bị chặn là bởi vì postman k phải là browser , nó gọi api như 2 be giao tiếp với nhau.
4. SOP  :same origin Policy
* là cơ chế bảo mật của browser.


* Code *

9. const obj1 = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, obj1);
copy.b.c = 5;
console.log(obj1.b.c);
//
copy.a = 2;
console.log(obj1.a);

<!-- <div id="outer">
  <button id="inner">Click Me</button>
</div>

document.getElementById("outer").addEventListener(
  "click",
  () => console.log("Outer DIV - Capturing"),
  true
);

document.getElementById("outer").addEventListener(
  "click",
  () => console.log("Outer DIV - Bubbling"),
  false
);

document.getElementById("inner").addEventListener(
  "click",
  () => console.log("Button - Target")
); -->








<!-- Nếu người dùng login với username , password , và có chức năng remember , access token , refresh token : bạn sẽ lưu trữ , xử lý với các loại data, và các loại storage như thế nào. -->



//1. cẩn thận khi dùng object làm key của object : 
<!-- const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog]) -->
//2 .Method 
.. slice(startIndex,endIndex) : không thay đổi mảng gốc
.. splice(start,deleteCount,Item) : thay đổi mảng gốc.
.. unshift(element,...) : return length of new arr - thay đổi mảng gốc - thêm element vào đầu mảng.
<!-- const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit) -->
//3 . Private variables in class , cannot access. 
<!-- class Counter {
  #number = 10 -->
//4. Object.freeze() chỉ đóng băng ở lv1.
//5. Invoke function
** k hoisting , tạo scope riêng ngay lập tức, tránh rò rỉ , dùng đc async.
<!-- greet(); // OK
function greet() {
  console.log('Hello');
}

// Function expression (không hoist giá trị)
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log('Hi');
};

// IIFE (invoke ngay, tạo scope riêng)
(() => {
  const secret = 42;
  console.log('IIFE runs immediately');
})();
// console.log(secret); // ReferenceError -->

(() => {
  var a = 1;
})();
console.log(typeof a); // undefined vì typeof never return lỗi.

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}. var la function scope -> cùng tham chiếu i sau vòng lặp -> 3,3,3.


<!-- const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(Oops didn't work);
  } finally {
    console.log('Oh finally!');
  }
})(); --> woah some + Oh finally.



<!-- (() => {
  let x = (y = 10);  
})();
same
y = 10;
let x = y; -->