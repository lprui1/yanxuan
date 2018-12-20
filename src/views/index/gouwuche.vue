<template>
    <div>
        <div id="app">
            <div class="ball">
                <button @click="addCart">+</button>
                <div v-for="(ball,index) in balls" :key="index" :class="{show:!ball.run}" class="inner" ref="ball">
                    
                </div>
            </div>
        </div>
        <!-- <div id="app">
            <ul class="shop">
                <li v-for="(item,index) in fruit" :key="index">
                    <span>{{item.text}}</span>
                    <span>{{item.price}}</span>
                    <button @click="additem">添加</button>
                </li>
            </ul>
            <div class="cart" style="">{{count}}</div>
            <div class="ball-container">小球-->
                <!-- <div>
                    <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                        <div class="ball" v-show="balls.show">
                            <div class="inner inner-hook">车</div>
                        </div>
                    </transition>
                </div>
            </div>
        </div> --> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            balls: [
                {
                    run:false
                },
                {
                    run:false
                },
                {
                    run:false
                },
                {
                    run:false
                },
                {
                    run:false
                },
            ],
            ballIndex:0 
        }
    },
    computed: {
        notRun() {
            return this.balls.filter(v => !v.run)
        }
    },
    watch: {
        ballIndex(nv) {
            this.ballIndex = nv == this.balls.length ? 0 : nv
        }
    },
    methods: {
        parabola(element,options,arc,duration) {
            duration = duration || 800;
            var start = this.offset(element);
            var x = options.left - start.left;
            var y = options.top - start.top;
            var a = arc,c=0,b=(y-a*x*x)/x;
            var data = +new Date();
            var timer = setInterval(() => {
                var elapsed = Math.min(+new Date() - date,duration);
                var _x = elapsed*x/duration;
                var _y = a*_x+b*_x+c;
                this.offset(element,{left:_x+start.left,top:_y+start.top});
                if(elapsed === duration)
                clearInterval(timer)
            },1000/60)
        },
        offset(element,coord) {
            if(typeof coord === "undefined"){
                        var _top = 0, _left = 0; 
                        while(element !== null){
                            _top += element.offsetTop;
                            _left += element.offsetLeft;
                            element = element.offsetParent;
                        }
                        return {top : _top, left : _left};
                    }
                    var _top = 0, _left = 0, parent = element.offsetParent;
                    while(parent !== null){
                        _top += parent.offsetTop;
                        _left += parent.offsetLeft;
                        parent = parent.offsetParent;
                    }
                    _left = coord.left - _left;/*要设置的相对文档的定位距离相当于是用此距离减去其父元素在文档中的定位*/
                    _top = coord.top - _top;
                    // css(element,{left : _left+"px", top : _top+"px"});
                    element.style.left =  _left+"px";
                    element.style.top =  _top+"px";
        },
        addCart() {
            var idx = this.ballIndex;
                    console.log(idx)
                    this.balls[idx].run = true;
                    this.parabola(this.$refs.ball[idx], this.offset(this.$refs.cart), 0.01, 800);
                    setTimeout(() => {
                        this.balls[idx].run = false;
                        this.$refs.ball[idx].style.top = "";
                        this.$refs.ball[idx].style.left = "";
                    }, 850);
                    this.ballIndex++;
                
        }
    }
    // data() {
    //     return {
    //         count:0,
    //         fruit:[
    //             {
    //                 text:'苹果',
    //                 price:10
    //             },
    //             {
    //                 text:'香蕉',
    //                 price:15
    //             },
    //             {
    //                 text:'桔子',
    //                 price:20
    //             }
    //         ],
    //         balls:[ //三个小球
    //             {
    //                 show:false
    //             },
    //             {
    //                 show:false
    //             },
    //             {
    //                 show:false
    //             }
    //         ],
    //         dropBalls:[]
    //     }
    // },
    // methods: {
    //     additem(event){
    //         // console.log(event.target)
    //         this.drop(event.target);
    //         this.count ++;
    //     },
    //     drop(el) {  //抛物
    //         for(let i=0;i<this.balls.lengt;i++) {
    //             let ball = this.balls[i];
    //             if(!ball.show) {
    //                 ball.show = true;
    //                 ball.el = el
    //                 this.dropBalls.push(ball)
    //                 return
    //             }
                
    //         }
    //     },
    //     beforeDrop(el) {  //购物车小球动画的实现
    //         let count = this.balls.length;
    //         while(count--) {
    //             let ball = this.balls[count];
    //             if(ball.show) {
    //                 // console.log(ball.el.getBoundingClientRect())
    //                 let rect = ball.el.getBoundingClientRect(); //元素相对于视口的位置
    //                 let x = rect.left - 32;
    //                 let y = -(window.innerHeight - rect.top -22)    //获取y
    //                 el.style.display = '';
    //                 el.style.webkitTransform = 'trabslateY('+y+'+px)';
    //                 el.style.transform = 'trabslateY('+y+'+px)';
    //                 let inner = el.getElementByClassName('inner-hook')[0];
    //                 inner.style.webkitTransform = 'trabslateX('+x+'+px)';
    //                 inner.style.transform = 'trabslateX('+x+'+px)';
    //                 // let rect = ball.el.
    //             }
    //         }
    //     },
    //     dropping(el,done) {  //改变小球的数量
    //         let rf = el.offsetHeight;
    //         el.style.webkitTransform = 'translate3d(0,0,0)';
    //         el.style.transform = 'translate3d(0,0,0)';
    //         let inner = el.getElementByClassName('inner-hook')[0];
    //         inner.style.webkitTransform = 'translate3d(0,0,0)';
    //         inner.style.transform = 'translate3d(0,0,0)';
    //         el.addEventListener('transitionend', done);
    //     },
    //     afterDrop(el) { //重置小球数量
    //         let ball = this.dropBalls.shift();
    //         if(ball) {
    //             ball.show = false;
    //             el.style.display = 'none'
    //         }
    //     }
    // }
}
</script>

<style>
#app{
        position: relative;
        margin: 0 auto;
        width: 375px;
        height:667px;
        /* background: grey; */
    }
    #app .ball{
        width: 20px;
        height: 20px;
        position:absolute;
        right:15px;
        top:80px;
        z-index:200;
    }
    #app .ball .inner{
        position: absolute;
        top: 0;
        width:20px;
        height:20px;
        border-radius:50%;
        background-color:rgb(0,160,220);
    }
    #app .box{
        position: absolute;
        bottom: 20px;
        left: 40px;
        width:60px;
        height:60px;
        font-size: 60px;
        color: rgb(0,160,220);
        transform: translateX(-20px);
    }
    button{
        position: absolute;
        z-index: 10;
        width: 30px;
        height: 30px;
        border:none;
        border-radius: 50%;
        background-color:rgb(0,160,220);
        text-align: center;
        color:#fff;
        padding: 0;
        outline: none;
    }
    .show{
        opacity: 0;
    }
 /* .shop{
    position: fixed;
    top: 300px;
    left: 40px;
   }
  .ball{
    position: fixed;
    left: 52px;
    bottom: 30px;
    /* left: 32px;
    bottom: 22px; */
    /* z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
  /* }
  .inner{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgb(0,160,220);
    transition: all 0.4s linear;
 }
 .cart{
    position: fixed;
    bottom: 22px;
    left: 32px;
    width: 30px;
    height: 30px;
    background-color: rgb(0,160,220);
    color: rgb(255,255,255);
 } */
</style>
