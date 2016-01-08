/*
This method does not make use of this. As a result there is no way to compromise the seqer.
There is no way to get or change the prefix or seq except as permitted by method.
If we pass seqer.gensys to a third party function. That will be able to generate unqiue strings
But would be unable to change the prefix and seq.
*/

var serial_Maker = function () {
var prefix= '';
var seq = 0;
return{

set_prefix :function(p){
prefix=String(p);
},

set_seq: function (s) {
seq = s;
},

gensym : function () {
var result = prefix + seq;
seq + = 1;
return result;
}
};
};

/*
How to run:
> var seqer = serial_Maker();
> seqer.set_prefix('Q');
> seqer.set_seq(1000);
> var unique = seqer.gensym();
console.log('unique :'+unique);
unique :Q1000
*/
