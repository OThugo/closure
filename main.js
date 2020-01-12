function user(name){
    var age;
    return{
        getName: function(){ 
            return name;
        },
        setName:function(newName){
            name=newName;
        },
        setAge:function(newAge){
            age=newAge;
        },
        getAge: function(){ 
            return age;
        },
    }
}

var lzg=user("陆振国");
var name=lzg.getName();
console.log(name)
lzg.setAge("21")
console.log(lzg.getAge())