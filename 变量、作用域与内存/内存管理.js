function createPerson(name) {
    let localPerson = {}
    localPerson.name = name;
    return localPerson

}

let globalPerson=createPerson("Ni")

//解除globalPerson对值的引用
globalPerson=null;

//共享一个隐藏类
function Article(opt_author) {
    this.title='Wind'
    this.author=opt_author;

}
let a1 =new Article()
// let a2=new Article()
// a2.author = 'Jake'
let a2 = new Article('Jake')

a1.author=null;

//内存泄漏--定时器
let name='Jake'
setInterval(()=>{
    // 通过闭包引用了外部变量
    console.log(name)
    },100
)

