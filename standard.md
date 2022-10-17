<!--
 * @Author: Xcracker
 * @Date: 2022-10-13 22:58:56
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-18 00:22:18
 * @Descripttion: 
-->
## <font color="#C42E51">代码规范</font>
- - -
## [NODE版本16.13.1](https://nodejs.org/download/release/v16.13.1/)

## NPM版本8.1.2
    ```
    npm install npm@8.1.2 -g
    ```

## [SASS规范](https://guide.aotu.io/docs/css/sass.html)

## JavaScript规范

### <font color="#C42E51">[强制]</font>

1. JavaScript, tsx源文件必须以无BOM的UTF-8编码。

2. JavaScript, tsx源文件换行格式必须为windows的CRLF。

3. 必须采用4个空格缩进，不允许以Tab制表符或2个空格代替。

4. `switch` 中的 `case` 和 `default` 必须保持缩进，`case`冒号左边无空格，右边有空格。

    ``` javascript
    // Good
    switch (variable) {
        case '1':
            // do...
            break;
        case '2':
            // do...
            break;
        default:
            // do...
    }

    // Bad
    switch (variable) {
    case '1':
        // do...
        break;
    case '2':
        // do...
        break;
    default:
        // do...
    }
    ```
5. 二元运算符两个操作数之间必须使用空格，但一元运算符与其操作数间不能有空格。
    ``` javascript
    let a = !arr.length;
    a++;
    a = b + c;
    ```
6. 在 `{ `前必须有1个空格。
    ``` javascript
    // Good

    if (condition) {
    }

    set('attr', {
        some: 'xxx',
        any: 'yyy'
    });

    function funcName() {
    }


    // Bad

    if (condition){
    }

    set('attr',{
        some: 'xxx',
        any: 'yyy'
    });

    function funcName(){
    }
    ```
7. `if` / `else` / `for` / `while` / `function` / `switch` / `do` / `try` / `catch` /`finally` 等关键字与括号之间都必须加一个空格。
    ``` javascript
    // Good

    if (condition) {
    }

    while (condition) {
    }

    (function () {
    })();


    // Bad

    if(condition) {
    }

    while(condition) {
    }

    (function() {
    })();
    ```
8. 在创建对象的语句中，`:` 后必须加一个空格，`:` 前不能有空格
    ``` javascript
    // Good
    const obj = {
        a: 1,
        b: 2,
        c: 3
    };

    // Bad
    const obj = {
        a : 1,
        b:2,
        c :3
    };
    ```
9.  在函数声明、命名函数表达式和函数调用时，函数名称和 `(` 间不能有空格。
    ``` javascript
    // Good

    function funcName() {
    }

    const funcName = function funcName() {
    };

    funcName();


    // Bad

    function funcName () {
    }

    const funcName = function funcName () {
    };

    funcName ();
    ```
10. `,` 和 `;` 前不能有空格。
    ``` javascript
    // Good
    callFunc(a, b);

    // Bad
    callFunc(a , b) ;
    ```
11. `(` 和 `[` 之后、 `)` 和 `]`之前不能有空格。
    ``` JavaScript
    // Good

    callFunc(param1, param2, param3);

    save(this.list[this.indexes[i]]);

    needIncream && (variable += increament);

    if (num > list.length) {
    }

    while (len--) {
    }


    // Bad

    callFunc( param1, param2, param3 );

    save( this.list[ this.indexes[ i ] ] );

    needIncreament && ( variable += increament );

    if ( num > list.length ) {
    }

    while ( len-- ) {
    }


    // Good
    const arr1 = [];
    const arr2 = [1, 2, 3];
    const obj1 = {};
    const obj2 = {name: 'obj'};
    const obj3 = {
        name: 'obj',
        age: 20,
        sex: 1
    };

    // Bad
    const arr1 = [ ];
    const arr2 = [ 1, 2, 3 ];
    const obj1 = { };
    const obj2 = { name: 'obj' };
    const obj3 = {name: 'obj', age: 20, sex: 1};
    ```
12. 每行代码后不能有尾随空格。

13. 必须在语句的结尾换行。

14. 单行字符数不能超过140个，超出则需要换行。

15. 如果需要换行，运算符必须放在新行的开头。
    ``` JavaScript
    // Good
    if (user.isAuthenticated()
        && user.isInRole('admin')
        && user.hasAuthority('add-admin')
        || user.hasAuthority('delete-admin')
    ) {
        // Code
    }

    const result = number1 + number2 + number3
        + number4 + number5;


    // Bad
    if (user.isAuthenticated() &&
        user.isInRole('admin') &&
        user.hasAuthority('add-admin') ||
        user.hasAuthority('delete-admin')) {
        // Code
    }

    const result = number1 + number2 + number3 +
        number4 + number5;
    ```
16. 大括号风格要求： `Stroustrup`风格, `if-else`中的`else`语句，连同`catch` 和 `finally`，都必须在右括号后另起一行。
    ``` JavaScript
    // Good
    if (foo) {
        bar();
    } else {
        baz();
    }

    // Bad
    function foo()
    {
        return true;
    }

    if (foo)
    {
        bar();
    }

    try
    {
        somethingRisky();
    } catch(e)
    {
        handleError();
    }

    if (foo) {
        bar();
    }
    else {
        baz();
    }
    ```
17. 定义对象的`set`存取器属性时，强制定义`get`。
    ``` JavaScript
    // Good
    const o = {
        set a(value) {
            this.val = value;
        },
        get a() {
            return this.val;
        }
    };
    // Bad
    const o = {
        set a(value) {
            this.val = value;
        }
    };
    ```
18. `,` 或 `;` 前不能有换行。
    ``` JavaScript
    // Good
    const obj = {
        a: 1,
        b: 2,
        c: 3
    };

    foo(
        aVeryVeryLongArgument,
        anotherVeryLongArgument,
        callback
    );


    // Bad
    const obj = {
        a: 1
        , b: 2
        , c: 3
    };

    foo(
        aVeryVeryLongArgument
        , anotherVeryLongArgument
        , callback
    );
    ```
19. 如果只有一行，`{}` 不能被省略。
    ``` JavaScript
    // Good
    if (foo) {
        foo++;
    }

    while (bar) {
        baz();
    }

    if (foo) {
        baz();
    } else {
        qux();
    }

    // Bad
    if (foo) foo++;

    while (bar)
        baz();

    if (foo) {
        baz();
    } else qux();
    ```
20. 函数定义的末尾不能有分号 `;`。
    ``` JavaScript
    // Good
    function funcName() {
    }

    // Bad
    function funcName() {
    };

    // 对于函数表达式，不能忽略分号
    const funcName = function () {
    };
    ```
21. 对象和数组的声明中不能有尾随逗号。
    ``` JavaScript
    // Good
    const obj = {
        attr1: 'xxx',
        attr2: 'yyy'
    };

    const arr = [
        'xxx',
        'yyy'
    ];


    // Bad
    const obj = {
        attr1: 'xxx',
        attr2: 'yyy',
    };

    const arr = [
        'xxx',
        'yyy',
    ];
    ```
22. 变量名、属性名及函数名的命名必须遵循 `lowerCamelCase`（小骆驼拼写法）。
    ``` JavaScript
    // Good
    import { no_camelcased as camelCased } from "external-module";

    var myFavoriteColor   = "#112C85";
    var _myFavoriteColor  = "#112C85";
    var myFavoriteColor_  = "#112C85";
    var MY_FAVORITE_COLOR = "#112C85";
    var foo = bar.baz_boom;
    var foo = { qux: bar.baz_boom };

    obj.do_something();
    do_something();
    new do_something();

    var { category_id: category } = query;

    function foo({ isCamelCased }) {
        // ...
    };

    function foo({ isCamelCased: isAlsoCamelCased }) {
        // ...
    }

    function foo({ isCamelCased = 'default value' }) {
        // ...
    };

    var { categoryId = 1 } = query;

    var { foo: isCamelCased } = bar;

    var { foo: isCamelCased = 1 } = quz;

    // Bad
    import { no_camelcased } from "external-module"

    var my_favorite_color = "#112C85";

    function do_something() {
        // ...
    }

    obj.do_something = function() {
        // ...
    };

    function foo({ no_camelcased }) {
        // ...
    };

    function foo({ isCamelcased: no_camelcased }) {
        // ...
    }

    function foo({ no_camelcased = 'default value' }) {
        // ...
    };

    var obj = {
        my_pref: 1
    };

    var { category_id = 1 } = query;

    var { foo: no_camelcased } = bar;

    var { foo: bar_baz = 1 } = quz;
    ```
23. `class`类的命名必须遵循 UpperCamelCase (Pascal)，即大骆驼拼写法。
    ``` JavaScript
    // Good
    var friend = new Person();

    // Bad
    var friend = new person();
    ```
24. 优先使用`const`声明变量，且一行不能同时声明多个变量。
    ``` JavaScript

    // Good
    const name = 'MyName';
    const hangModules = [];
    const missModules = [];
    const visited = {};

    // Bad
    name = 'MyName';
    const hangModules = [],
        missModules = [],
        visited = {};
    ```
25. 对于相等运算符，`==` 只能用于检查是否为 `null` 或者 `undefined`，其余情况必须使用 `===`。
    ``` JavaScript
    // Good
    if (age === 30) {
        // ...
    }
    if (type == null) {
        // ...
    }

    // Bad
    if (age == 30) {
        // ......
    }
    ```
26. 在使用 `parseInt` 时，必须传入第二个参数。
    ``` JavaScript
    // Good
    parseInt(str, 10);

    // Bad
    parseInt(str);
    ```
27. 必须使用 `'` 而不是 `"` 定义字符串。

28. 必须使用对象字面量 `{}` 来创建简单对象。
    ``` JavaScript
    // Good
    const obj = {};

    // Bad
    const obj = new Object();
    ```
29. 如果一个对象字面量的所有属性都不需要引号，引号必须省略。如果需要加引号，须使用 `'` 而不是 `"`。
    ``` JavaScript
    // Good
    const info = {
        name: 'someone',
        age: 28
    };

    // Bad
    const info = {
        'name': 'someone',
        'age': 28
    };
    const info2 = {
        "age": 40
    };
    ```
30. 禁止修改内置对象的原型。
    ``` JavaScript
    // 禁止
    String.prototype.trim = function () {
    };
    ```
31. 除非需要创建指定长度的数组，否则必须使用数组字面量 `[]` 创建数组。
    ``` JavaScript
    // Good
    const arr = [];
    const arr2 = new Array(1e4);

    // Bad
    const arr = new Array();
    ```
32. 禁止使用 `for in`语句对数组进行遍历。

33. 不要使用 `eval` 和 `with`, 但是可以间接调用`eval`。
    ``` JavaScript
    var obj = { x: "foo" },
    key = "x",
    value = obj[key];

    class A {
        foo() {
            // This is a user-defined method.
            this.eval("var a = 0");
        }

        eval() {
        }
    }
    ```
34. 禁止出现多个空格
    ``` JavaScript
    // Good
    if (a === b) {
    }

    // Bad
    if (a  ===b) {
    }
    ```

### <font color="#C42E51">[推荐]</font>

1. 建议使用 `+ ''` 将值转为字符串。
    ``` JavaScript
    // Good
    num + '';

    // Bad
    new String(num);
    num.toString();
    String(num);
    ```
2.  建议使用 `+` 将值转为数值
    ``` JavaScript
    // Good
    +str;

    // Bad
    Number(str);
    ```
3. 建议使用 `xxx == null` 来判断 `null` 或 `undefined`。

4. 建议定义数组对象时，对象中包含`key`字段。

5. 建议HTML标签内有三个以上的参数时进行分行操作。
    ``` javascript
    // Good
    <Route
        path={route.path}
        key={route.key}
        element={route.element}
    />

    // Bad
    <Route path={route.path} key={route.key} element={route.element} />
    ```

