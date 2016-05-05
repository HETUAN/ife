var JList = function(m) {
    var model = m;
    var list = [];
    var push = function(m) {
        list.push(m);
    };

}

var JTree = function() {
    var node = {
        name: "",
        parent: {};
        children: [];
        select: false;
    };
    var curNode = {};
    var tree = {};
    var add = function(n) {
        if (typeof(n) === typeof(node))
            curNode.children.push(n);
    }
    var jump = function(){
    	if(curNode.parent!=null)
    		curNode = curNode.parent;
    }

    var next = function(){
    	if(curNode.parent!=null)
    	{
    			var len = curNode.parent.children.length;
    		if(len > 1)
    		{
    			for (var i = 0; i < len; i++) {
    				if(curNode.parent.children[i]==curNode)
    				{
    					break;
    				}
    			};
    		}
    	}
    }
}
