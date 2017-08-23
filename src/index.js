import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        let arr=[];
        for(let i=0 ; i<7000 ; i++) arr.push('.');
        this.rand1 = Math.round(Math.random()*3)+1;
        this.rand2 = Math.round(Math.random()*3)+1;
        this.state={
            map : this.myMapdowntwoside(this.myMapdown(this.nosideMap(this.initMap(arr))))
        };
    }
    initMap(arg){
        let arr=arg;
        let randi = Math.round(Math.random()*10)+5;
        let randj = Math.round(Math.random()*10)+5;
        let trou1 = Math.round(Math.random()*(randi-1))+this.rand2;
        let trou2 = Math.round(Math.random()*(randj-1))+this.rand1;
        console.log(this.rand1 + ',' +randj+','+ trou2+'....'+this.rand2+','+randi+','+trou1+',');
        for(let i=this.rand1 ; i<this.rand1+randi*100 ; i+=100 )
        {
            for(let j=0 ; j<randj ; j++ )
            {
                arr[i+this.rand2*100+j] = '#';
            }
        }
        arr[this.rand1+randj + trou1*100]='#';
        arr[trou2 + (this.rand2+randi)*100]='#';

        this.rand1down = Math.round(Math.random()*(trou2-1))+1;
        this.rand2down =this.rand2 + randi + 1;
        this.tour = trou1;
        this.troudown = trou2 ;


        this.rand1 += randj+1;
        this.rand2 = Math.round(Math.random()*(trou1-1))+1;

        return arr;
    }
    myMapup(arg){
        let arr=arg;
        let randi = Math.round(Math.random()*10)+5;
        let randj = this.troudown;
        let trou1 = Math.round(Math.random()*(randi-1))+this.rand2down;
        let trou2 = Math.round(Math.random()*(randj-1))+this.rand1down;
        console.log(this.rand1down + ',' +randj+','+ trou2+'....'+this.rand2down+','+randi+','+trou1+',');

        for(let i=this.rand1down ; i<this.rand1down+randi*100 ; i+=100 )
        {
            for(let j=0 ; j<randj ; j++ )
            {
                arr[i+this.rand2down*100+j] = '#';
            }
        }
        arr[trou2 + (this.rand2down+randi)*100]='#';

        this.rand1down = Math.round(Math.random()*(trou2-1))+1;;
        this.rand2down =this.rand2down + randi + 1;
        this.troudown = trou2 ;

        return arr;
    }
    myMapdown(arg){
        let arr=arg;
        let randi = Math.round(Math.random()*10)+5;
        let randj = this.troudown;
        let trou1 = Math.round(Math.random()*(randi-1))+this.rand2down;
        let trou2 = Math.round(Math.random()*(randj-1))+this.rand1down;
        console.log(this.rand1down + ',' +randj+','+ trou2+'....'+this.rand2down+','+randi+','+trou1+',');

        for(let i=this.rand1down ; i<this.rand1down+randi*100 ; i+=100 )
        {
            for(let j=0 ; j<randj ; j++ )
            {
                arr[i+this.rand2down*100+j] = '#';
            }
        }
        arr[trou2 + (this.rand2down+randi)*100]='#';

        this.rand1down = Math.round(Math.random()*(trou2-1))+1;;
        this.rand2down =this.rand2down + randi + 1;
        this.troudown = trou2 ;

        return arr;
    }
    myMapdowntwoside(arg){

        let arr=arg;
        let randi = Math.round(Math.random()*10)+5;
        let randj = Math.round(Math.random()*10)+this.troudown;
        let trou1 = Math.round(Math.random()*(randi-1))+this.rand2down;
        let trou2 = Math.round(Math.random()*(randj-1))+this.rand1down;
        console.log(this.rand1down + ',' +randj+','+ trou2+'....'+this.rand2down+','+randi+','+trou1+',');

        for(let i=this.rand1down ; i<this.rand1down+randi*100 ; i+=100 )
        {
            for(let j=0 ; j<randj ; j++ )
            {
                arr[i+this.rand2down*100+j] = '#';
            }
        }
        arr[trou2 + (this.rand2down+randi)*100]='#';
        arr[this.rand1down+randj + trou1*100]='#';

        this.randiup = Math.round(Math.random()*(trou2-1))+1;;
        this.randjup =this.rand2down + randi + 1;
        this.troudown = trou2 ;

        return arr;
    }
    changeMap(arg){

        let arr=arg;
        let randi = Math.round(Math.random()*5)+this.tour;
        let randj = Math.round(Math.random()*10)+5;
        let trou1 = Math.round(Math.random()*(randi-1))+this.rand2;
        let trou2 = Math.round(Math.random()*(randj-1))+this.rand1;
        console.log(this.rand1 + ',' +randj+','+ trou2+'....'+this.rand2+','+randi+','+trou1+',');

        for(let i=this.rand1 ; i<this.rand1+randi*100 ; i+=100 )
        {
            for(let j=0 ; j<randj ; j++ )
            {
                arr[i+this.rand2*100+j] = '#';
            }
        }
        arr[trou2 + (this.rand2+randi)*100]='#';
        this.rand1 += randj+1;
        this.rand2 = Math.round(Math.random()*(trou1-1))+1;
        return arr;
    }
    nosideMap(arg){

        let arr=arg;
        let randi = Math.round(Math.random()*10)+this.tour;
        let randj = Math.round(Math.random()*10)+5;
        let trou1 = Math.round(Math.random()*(randi-1))+this.rand2;
        let trou2 = Math.round(Math.random()*(randj-1))+this.rand1;
        console.log(this.rand1 + ',' +randj+','+ trou2+'....'+this.rand2+','+randi+','+trou1+',');

        for(let i=this.rand1 ; i<this.rand1+randi*100 ; i+=100 )
        {
            for(let j=0 ; j<randj ; j++ )
            {
                arr[i+this.rand2*100+j] = '#';
            }
        }
        this.rand1 += randj+1;
        this.rand2 = Math.round(Math.random()*(trou1-1))+1;
        return arr;
    }

    render(){
        let i=0;
        const mymap = this.state.map.map((item)=>{
            if(item=='.') return <div className="white" key={i++}></div>
            return <div className="black" key={i++}></div>
        });
        return(
           <div className="all">
               {mymap}
           </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));