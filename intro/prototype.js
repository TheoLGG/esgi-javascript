const obj = {
    p1: "foo",
    m1: () => console.log(this.p1),
    m2: function() {
        console.log(this.p1)
        return false;
    },
    m3(){
        console.log(4);
    }
};

// console.log(obj.m1());
// console.log(obj.m2());
obj.prototype.m5 =() => console.log();