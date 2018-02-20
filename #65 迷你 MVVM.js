/*
做一个小型的 MVVM 库，可以做到数据和视图之间的自动同步。

你需要做的就是完成一个函数 bindViewToData，它接受一个 DOM 节点和一个对象 data 作为参数。bindViewToData 会分析这个 DOM 节点下的所有文本节点，并且分析其中被 {{ 和 }} 包裹起来的表达式，然后把其中的内容替换成在 data 上下文执行该表达式的结果。例如：

<div id='app'>
    <p>
    My name is {{firstName + ' ' + lastName}}, I am {{age}} years old.
</p>
<div>
const appData = {
    firstName: 'Lucy',
    lastName: 'Green',
    age: 13
}
bindViewToData(document.getElementById('app'), appData)

// div 里面的 p 元素的内容为
// My name is Lucy Green, I am 13 years old.

appData.firstName = 'Jerry'
appData.age = 16

// div 里面的 p 元素的内容自动变为
// My name is Jerry Green, I am 16 years old.
当数据改变的时候，会自动地把相应的表达式的内容重新计算并且插入文本节点。*/

const bindViewToData = (el, data) => {
    new mvvm({
        data: appData,
        el: document.getElementById('app')
    })
}

function observer(obj) {
    this,walk(obj);
}
function observer(obj) {
    this.obj = obj;
    this.walk(obj);
}
observer.prototype = {
    walk: function (obj) {

        for(let key in obj) {
            if (!obj.hasOwnProperty(key)) return;
            let val = obj[key];
            this.convert(key,val);
        }
    },
    convert: function (key,val) {
        let _this = this;
        Object.defineProperty(this.obj,key,{
            enumerable: true,
            configurable: true,
            get: function () {
                return val
            },
            set: function (newVal) {
                if(newVal === val) return;
                val = newVal;
                _this.notify('set', key, newVal);
            }
        })
    },
    notify: function (event, path, val) {
        this._cbs = this._cbs || {};
        let callbacks = this._cbs[event];
        if (!callbacks) return;
        callbacks = callbacks.slice(0);
        callbacks.forEach((cb, i) => {
            callbacks[i].apply(this, arguments);
        })
    },
    on: function (event, fn) {
        this._cbs = this._cbs || {};
        if(!this._cbs[event]) {
            this._cbs[event] = [];
        }
        this._cbs[event].push(fn);
    }
}

function Directive(name, el, vm, expression) {
    this.name = name;
    this.el = el;
    this.vm = vm;
    this.expression = expression;

    this.update()
}
Directive.prototype = {
    update: function () {
        this.el['nodeValue'] = this.vm.data[this.expression];
        console.log(`更新了DOM-${this.expression}`)
    }
}

const appData = {
    firstName: 'Lucy',
    lastName: 'Green',
    age: 13
}
function mvvm(option) {
    this.data = option.data;
    this.el = option.el;
    this._directives = [];
    this.init()
}

mvvm.prototype = {
    init: function () {
        this.observer = new observer(this.data);
        if (this.el.hasChildNodes()) {
            Array.from(this.el.childNodes).forEach(this._compileNode, this);
        }
        this.observer.on('set', this._updateBindingAt.bind(this));
    },
    _updateBindingAt: function () {
        let path = arguments[1];
        this._directives.forEach((directive) => {
            if(directive.expression !== path) return;
            directive.update();
        })
    },
    _compileNode: function (node) {
        switch (node.nodeType) {
            // text
            case 1:
                this._compileElement(node);
                break;
            // node
            case 3 :
                this._compileText(node);
                break;
            default:
                return;
        }
    },
    _compileElement: function (node) {
        if (node.hasChildNodes()) {
            Array.from(node.childNodes).forEach(this._compileNode, this);
        }
    },
    _compileText : function (node) {
        let patt = /{{\w+}}/g;
        let nodeValue = node.nodeValue;

        let expressions = nodeValue.match(patt);  // 这是一个数组,形如["{{name}}"];

        if (!expressions) return;

        expressions.forEach((expression) => {
            let el = document.createTextNode('');

            node.parentNode.insertBefore(el, node);

            let property = expression.replace(/[{}]/g, '');
            this._bindDirective('text', property, el);
        });

        node.parentNode.removeChild(node);
    },
    _bindDirective: function (name, expression, node) {
        let dirs = this._directives;
        dirs.push(
            new Directive(name, node, this, expression)
        );
    }
}