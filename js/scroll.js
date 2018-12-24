/**
 * Created by Administrator on 2018/1/18.
 */
    //阻止浏览器下拉回弹
var overscroll = function(el){
        el.addEventListener('touchstart', function(){
            var top = el.scrollTop;
            var totalScroll = el.scrollHeight;
            var currentScroll = top + el.offsetHeight;
            if(top === 0) {
                el.scrollTop = 1;
            }else if(currentScroll === totalScroll){
                el.scrollTop = top - 1;
            }
        });
        el.addEventListener('touchmove', function(evt){
            if(el.offsetHeight < el.scrollHeight){
                evt._isScroller = true;
            }
        });
    };
for(var i=0;i<document.querySelectorAll('.scroll').length;i++){
    overscroll(document.querySelectorAll('.scroll')[i]);
}
//哪里需要可以局部滚动，添加一个“scroll”的class
document.body.addEventListener('touchmove', function(evt) {
    if(!evt._isScroller){
        evt.preventDefault();
    }
});