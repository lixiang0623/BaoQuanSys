export const loadMore = {
    created: function () {
        console.log('混入loadMore成功')
    },
    directives: {
        'load-more': {//自定义指令: 下拉加载
            bind(el, binding) {   
                var p = 0;   
                var t = 0;   
                var down = true;   
                el.addEventListener('scroll', function() {     
                    //判断是否向下滚动     
                    p = this.scrollTop;  
                    if(t < p){       
                        down = true;     
                    }else{       
                        down = false;     
                    }     
                    t = p;     
                    //判断是否到底     
                    const sign = 10;     
                    const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight;     
                    if (scrollDistance <= sign && down) {       
                        binding.value()     
                    }   
                }); 
            }
        }
    }
};

