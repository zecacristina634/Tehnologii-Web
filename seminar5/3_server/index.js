let express=require('express');
let bodyParser=require('body-parser');
let cors=require('cors');

let app=express();
let router=express.Router();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

const array = [
    { id: 1, name: "Ionuț", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
]

router.route('/getList').get((req,res)=>{
    res.json(array);
})

router.route('/postList').get((req,res)=>{
    let elem =req.body;
    elem.id=array.length+1;
    array.push(elem);

    res.json(elem);
})

router.route('/getResource/:id').get((req,res)=>{
    let id=parseInt(req.params.id);
    let elem=array.find(item => item.id===id);
    if(elem) 
        res.json(elem);
    else
        res.status(404).json({message: "Resursa nu a fost gasita."});
})

let port=8000;
app.listen(port);
console.log('API is running');