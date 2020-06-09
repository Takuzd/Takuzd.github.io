function $(vArg){ //获取元素节点函数
    //区分参数
    switch(vArg[0]){
        case "#":
            return document.getElementById(vArg.substring(1));
            break;
        case ".":
            return elmentByClassName(document, vArg.substring(1));
            break;
        default:
            var str = vArg.substring(0, 5);
            if(str == "name="){
                return document.getElementsByName(vArg.substring(5));
            }else{
                return document.getElementsByTagName(vArg);
            }            
            break;
        
    }
}
function elmentByClassName(parent, classStr){ //获取classname
    var nodes =parent.getElementsByClassName('*');
    var result = [];
    for(var i = 1; i < nodes.length; i++){
        if(nodes[i].className == classStr){
            result.push(nodes[i]);
        }
    }
    return result;
}