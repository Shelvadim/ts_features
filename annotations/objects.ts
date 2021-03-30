
const profile={
    name:'alex',
    age:20,
    coord:{
        lat:5,
        long:10
    },
    setAge(age:number):void{
        this.age=age;
    }
};

const {age}:{age:number} = profile;
const {coord:{lat,long}}:{coord:{lat:number;long:number}} = profile;

//  git init.
//git remote add origin https://github.com/apex-user/RepoName.git
//git add -A
//git commit -m "Message you would like to put"
//git push origin master