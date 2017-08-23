import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);
        this.health = 100;
        this.weapon = ['Hands','Knife','Brass Knuckles','Dagger','Serrated Dagger','Sword','Double Sword','Katana','Reaper\'s scythe','Large trout','Fireball','Paddlesaw','Fat Man','Energy Sword','Gravity Gun','Gauss Rifle','Thunderfury','Golden Gun'];
        this.Attack = 4;
        this.Level = 0;
        this.Next = 60;
        this.Dungeon = 0;
        this.bigMonster = parseInt((Math.round(Math.random())+4)*100);
        this.result='';
        this.weap = 0;
        this.state={
            map : this.putingredient(this.myMap(this.emptyarr()))
        };
    }
    emptyarr(){
        let arr=[];
        for(let i=0 ; i<7200 ; i++) arr.push('.');
        return arr;
    }
    nosideMap(arg){

        let arr=arg;

        for(let i=this.rand1 ; i<this.rand1+this.randi*100 ; i+=100 )
        {
            for(let j=0 ; j<this.randj ; j++ )
            {
               if((i+this.rand2*100+j)%100==0 || i+this.rand2*100+j>=7000) break;
                   arr[i+this.rand2*100+j] = '#';
            }
        }

        return arr;
    }
    myMap(arg){

        this.rand1 = Math.round(Math.random()*3)+2;
        this.rand2 = Math.round(Math.random()*3)+2;
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        let arr=this.nosideMap(arg);
        arr[this.rand1+this.randj + this.trou1*100]='#';
        arr[this.trou2 + (this.rand2+this.randi)*100]='#';


        this.rand1down = Math.round(Math.random()*(this.trou2-1))+1;
        this.rand2down = this.rand2 + this.randi + 1;
        this.randjdown = Math.round(Math.random()*5)+this.trou2;

        this.rand1 +=this.randj+1;
        this.rand2 = Math.round(Math.random()*(this.trou1-1))+1;
        this.randi = Math.round(Math.random()*5)+this.trou1;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);

        this.rand1 = this.rand1down;
        this.rand2 = this.rand2down;
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = this.randjdown;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.trou2 + (this.rand2+this.randi)*100]='#';

        this.rand1 = Math.round(Math.random()*(this.trou2-1))+1;
        this.rand2 = this.rand2 + this.randi + 1;
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*5)+this.trou2;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';
        arr[this.trou2 + (this.rand2+this.randi)*100]='#';

        this.rand1down2 = this.trou2-Math.round(Math.random()*5);
        this.rand2down2 = this.rand2 + this.randi + 1;

        this.rand1 +=this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';

        this.rand1 +=this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.trou2 + (this.rand2-1)*100]='#';
        arr[this.rand1+this.randj + this.trou1*100]='#';

        this.rand1up = this.trou2-Math.round(Math.random()*5);
        this.rand2up = Math.round(Math.random()*parseInt(this.rand2/2))+parseInt(this.rand2/2);
        this.randiup = (this.rand2-1) - this.rand2up;

        arr=this.nosideMap(arr);

        this.rand1 +=this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';

        this.rand1 +=this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);

        this.rand1 = this.rand1up ;
        this.rand2 = this.rand2up;
        this.randi = this.randiup;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.trou2 + (this.rand2-1)*100]='#';

        this.rand1up = this.trou2-Math.round(Math.random()*parseInt(this.rand2/2));
        this.rand2up = Math.round(Math.random()*parseInt(this.rand2/2))+parseInt(this.rand2/2);
        this.randiup = (this.rand2-1) - this.rand2up;
        this.rand1 = this.rand1up ;
        this.rand2 = this.rand2up;
        this.randi = this.randiup;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';

        this.rand1 += this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);

        arr[this.rand1+this.randj + this.trou1*100]='#';
        arr[this.trou2 + (this.rand2-1)*100]='#';

        this.rand1up = this.trou2-Math.round(Math.random()*parseInt(this.rand2/2));
        this.rand2up = Math.round(Math.random()*parseInt(this.rand2/2))+parseInt(this.rand2/2);
        this.randiup = (this.rand2-1) - this.rand2up;

        this.rand1 += this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);

        this.rand1 = this.rand1up ;
        this.rand2 = this.rand2up;
        this.randi = this.randiup;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';
        arr[this.rand1+this.randj+1 + this.trou1*100]='#';
        arr[this.rand1+this.randj+2 + this.trou1*100]='#';
        arr[this.rand1+this.randj+3 + this.trou1*100]='#';
        arr[this.rand1+this.randj+4 + this.trou1*100]='#';
        this.rand1 += this.randj+4;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
//
        this.rand1 = this.rand1down2;
        this.rand2 = this.rand2down2;
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.trou2 + (this.rand2+this.randi)*100]='#';
        arr[this.rand1+this.randj + this.trou1*100]='#';

        this.rand1down = this.trou2-Math.round(Math.random()*5);
        this.rand2down = this.rand2 + this.randi + 1;
        this.rand1 = this.rand1down;
        this.rand2 = this.rand2down;
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';
        this.rand1 += this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.trou2 + (this.rand2+this.randi)*100]='#';
        arr[this.rand1+this.randj + this.trou1*100]='#';

        this.rand1down = this.trou2-Math.round(Math.random()*5);
        this.rand2down = this.rand2 + this.randi + 1;

        this.rand1 += this.randj+1;
        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);

        this.rand1 = this.rand1down;
        this.rand2 = this.rand2down;
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';
        arr[this.rand1+this.randj+1 + this.trou1*100]='#';
        arr[this.rand1+this.randj+2 + this.trou1*100]='#';
        arr[this.rand1+this.randj+3 + this.trou1*100]='#';
        arr[this.rand1+this.randj+4 + this.trou1*100]='#';

        this.rand1 +=this.randj+4;

        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';
        arr[this.rand1+this.randj+1 + this.trou1*100]='#';
        arr[this.rand1+this.randj+2 + this.trou1*100]='#';
        arr[this.rand1+this.randj+3 + this.trou1*100]='#';
        arr[this.rand1+this.randj+4 + this.trou1*100]='#';

        this.rand1 +=this.randj+4;

        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);
        arr[this.rand1+this.randj + this.trou1*100]='#';
        arr[this.rand1+this.randj+1 + this.trou1*100]='#';
        arr[this.rand1+this.randj+2 + this.trou1*100]='#';
        arr[this.rand1+this.randj+3 + this.trou1*100]='#';
        arr[this.rand1+this.randj+4 + this.trou1*100]='#';

        this.rand1 +=this.randj+4;

        this.rand2 = this.trou1-Math.round(Math.random()*5);
        this.randi = Math.round(Math.random()*10)+5;
        this.randj = Math.round(Math.random()*10)+5;
        this.trou1 = Math.round(Math.random()*(this.randi-1))+this.rand2;
        this.trou2 = Math.round(Math.random()*(this.randj-1))+this.rand1;

        arr=this.nosideMap(arr);

        let a = Math.round(Math.random()*50)+20;

        for(let j=5 ; j<70 ; j++) arr[a+j*100] = '#' ;
        for(let j=5 ; j<70 ; j++) arr[a+1+j*100] = '#' ;

        a = Math.round(Math.random()*35)+10;

        for(let j=5 ; j<90 ; j++) arr[j+a*100] = '#' ;
        for(let j=5 ; j<90 ; j++) arr[j+(a-1)*100] = '#' ;

        return arr;
    }
    putingredient(arg){
        let compt = 0;
        let arr = arg;

        while(compt<8){
           let a = Math.round(Math.random()*7199);
           if(arr[a]=='#') {
               arr[a] = '*';
                compt++;
           }
        }
        while(compt<16){
        let a = Math.round(Math.random()*7199);
        if(arr[a]=='#' && this.Level<=1 && this.Dungeon<3) {
            arr[a] = parseInt((Math.round(Math.random())/3+0.2)*100);
            compt++;
        }
        else if(arr[a]=='#' && this.Level<=3 ) {
            arr[a] = parseInt((Math.round(Math.random())/2+0.7)*100);
            compt++;
        }
        else if(arr[a]=='#' && (this.Level>=4 || this.Dungeon>=3)) {
            arr[a] = parseInt((Math.round(Math.random())+1)*100);
            a = Math.round(Math.random()*7199);
            if(arr[a]=='#') arr[a] = parseInt((Math.round(Math.random())+1)*100);
            compt++;
        }
        }
        if(this.Dungeon<4)
            while(compt<17){
            let a = Math.round(Math.random()*7199);
            if(arr[a]=='#') {
                arr[a] = 'd';
                compt++;
            }
        }
        else compt++;
        while(compt<18){
            let a = Math.round(Math.random()*7199);
            if(arr[a]=='#') {
                arr[a] = 'p';
                compt++;
            }
        }
        if(this.Dungeon<=2)
            while(compt<21){
                let a = Math.round(Math.random()*7199);
                if(arr[a]=='#' ) {
                    arr[a] = 'w';
                    compt++;
                }
            }
        else
            while(compt<23){
                let a = Math.round(Math.random()*7199);
                if(arr[a]=='#' ) {
                    arr[a] = 'w';
                    compt++;
                }
            }
        if(this.Dungeon==4){
            let a = Math.round(Math.random()*7199);
            while(arr[a]!='#' && arr[a-100]!='#' && arr[a+1]!='#' && arr[a-99]!='#')
                a = Math.round(Math.random()*7199);
            arr[a] = arr[a-100] = arr[a+1] = arr[a-99] = 'bm';
        }
        return arr;
    }
    timetoplay(e){
        switch(e.keyCode){
            case 39:{
                let index =  this.state.map.indexOf('p')+1;
                let arr = this.state.map;
                if(index%100!=0 && arr[index]=='#')
                {
                    arr[index-1]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index%100!=0 && arr[index]=='d')
                {
                    this.Dungeon++;
                    this.setState({map: this.putingredient(this.myMap(this.emptyarr()))});
                }
                else if(index%100!=0 && arr[index]=='w')
                {
                    this.Attack += 4;
                    this.weap++;
                    if(this.Level>=2) this.Attack += 2;
                    arr[index-1]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index%100!=0 && arr[index]=='*')
                {
                    this.health += 20;
                    if(this.Level>=2) this.health += 25;
                    arr[index-1]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index%100!=0 && arr[index]=='bm' && this.bigMonster>0)
                {
                    this.health -= 103;
                    this.bigMonster -= this.Attack;
                    this.setState({map:arr});
                    console.log(this.bigMonster);
                }
                else if(index%100!=0 && arr[index]>0)
                {
                    if(this.Level<=1) this.health -= 10;
                    else if(this.Level<=3) this.health-=15;
                    else this.health-=20;
                    arr[index] -= this.Attack;
                    this.setState({map:arr});
                }
                else if(index%100!=0 && arr[index]<=0)
                {
                    arr[index-1]='#';
                    arr[index]='p';
                    this.Next-=10;
                    this.setState({map:arr});
                }
                break;
            }
            case 40:{
                let index =  this.state.map.indexOf('p')+100;
                let arr = this.state.map;
                if(index>=100 && arr[index]=='#')
                {
                    arr[index-100]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }

                else if(index>=100 && arr[index]=='d')
                {
                    this.Dungeon++;
                    this.setState({map: this.putingredient(this.myMap(this.emptyarr()))});
                }
                else if(index>=100 && arr[index]=='w')
                {
                    this.Attack += 4;
                    this.weap++;
                    if(this.Level>=2) this.Attack += 2;
                    arr[index-100]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index>=100 && arr[index]=='*')
                {
                    this.health += 20;
                    if(this.Level>=2) this.health += 25;
                    arr[index-100]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index>=100 && arr[index]=='bm' && this.bigMonster>0)
                {
                    this.health -= 103;
                    this.bigMonster -= this.Attack;
                    this.setState({map:arr});
                }
                else if(index>=100 && arr[index]>0)
                {
                    if(this.Level<=1) this.health -= 10;
                    else if(this.Level<=3) this.health-=15;
                    else this.health-=20;
                    arr[index] -= this.Attack;
                    this.setState({map:arr});
                }
                else if(index>=100 && arr[index]<=0)
                {
                    arr[index-100]='#';
                    arr[index]='p';
                    this.Next-=10;
                    this.setState({map:arr});
                }
                break;
            }
            case 37:{
                let index =  this.state.map.indexOf('p')-1;
                let arr = this.state.map;
                if(index%100!=1 && index%100!=-1 && arr[index]=='#')
                {
                    arr[index+1]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index%100!=1 && index%100!=-1 && arr[index]=='d')
                {
                    this.Dungeon++;
                    this.setState({map: this.putingredient(this.myMap(this.emptyarr()))});
                }
                else if(index%100!=1 && index%100!=-1  && arr[index]=='w')
                {
                    this.Attack += 4;
                    this.weap++;
                    if(this.Level>=2) this.Attack += 2;
                    arr[index+1]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index%100!=1 && index%100!=-1  && arr[index]=='*')
                {
                    this.health += 20;
                    if(this.Level>=2) this.health += 25;
                    arr[index+1]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if( index%100!=1 && index%100!=-1 && arr[index]=='bm' && this.bigMonster>0)
                {
                    this.health -= 103;
                    this.bigMonster -= this.Attack;
                    this.setState({map:arr});
                }
                else if(index%100!=1 && index%100!=-1 && arr[index]>0)
                {
                    if(this.Level<=1) this.health -= 10;
                    else if(this.Level<=3) this.health-=15;
                    else this.health-=20;
                    arr[index] -= this.Attack;
                    this.setState({map:arr});
                }
                else if(index%100!=1 && index%100!=-1 && arr[index]<=0)
                {
                    arr[index+1]='#';
                    arr[index]='p';
                    this.Next-=10;
                    this.setState({map:arr});
                }
                break;
            }
            case 38:{
                let index =  this.state.map.indexOf('p')-100;
                let arr = this.state.map;
                if(index<=7099 && arr[index]=='#')
                {
                    arr[index+100]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index<=7099 && arr[index]=='d')
                {
                    this.Dungeon++;
                    this.setState({map: this.putingredient(this.myMap(this.emptyarr()))});
                }
                else if(index<=7099 && arr[index]=='d')
                {
                    this.setState({map: this.putingredient(this.myMap(this.emptyarr()))});
                }
                else if(index<=7099 && arr[index]=='w')
                {
                    this.Attack += 4;
                    this.weap++;
                    if(this.Level>=2) this.Attack += 2;
                    arr[index+100]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index<=7099  && arr[index]=='*')
                {
                    this.health += 20;
                    if(this.Level>=2) this.health += 25;
                    arr[index+100]='#';
                    arr[index]='p';
                    this.setState({map:arr});
                }
                else if(index<=7099 && arr[index]=='bm' && this.bigMonster>0)
                {
                    this.health -= 103;
                    this.bigMonster -= this.Attack;
                    this.setState({map:arr});
                }
                else if(index<=7099 && arr[index]>0)
                {
                    if(this.Level<=1) this.health -= 10;
                    else if(this.Level<=3) this.health-=15;
                    else this.health-=20;
                    arr[index] -= this.Attack;
                    this.setState({map:arr});
                }
                else if(index<=7099 && arr[index]<=0)
                {
                    arr[index+100]='#';
                    arr[index]='p';
                    this.Next-=10;
                    this.setState({map:arr});
                }
                break;
            }
        }
        if(this.Next<=0) {
            let arr = this.state.map;
            this.Level++;
            this.health+=
            this.Next=50;
            this.weapon += 2;
            this.setState({map:arr});
        }
        if(this.health<=0 ||  this.bigMonster<=0) {
            if(this.bigMonster<=0) this.result = 'You won. Congratulation!';
            if(this.health<=0 ) this.result = 'You died. Better luck next time!';
            this.health = 100;
            this.weap = 0;
            this.Attack = 4;
            this.Level = 0;
            this.Next = 60;
            this.Dungeon = 0;
            this.bigMonster = parseInt((Math.round(Math.random())+4)*100);
            this.setState({map: this.putingredient(this.myMap(this.emptyarr()))});
            return;
        }
    }
    render(){
        let i=0;
        const mymap = this.state.map.map((item)=>{
            if(item=='.') return <div className="black" key={i++}></div>
            else if(item=='#') return<div className="white" key={i++}></div>
            else if(item=='*') return<div className="ingredient" key={i++}></div>
            else if(item=='d') return<div className="dungeon" key={i++}></div>
            else if(item=='p') return<div className="player" key={i++}></div>
            else if(item=='w') return<div className="weapon" key={i++}></div>
            else if(item== 'bm') return<div className="bigmonster" key={i++}></div>
            else return<div className="monster" key={i++}></div>

        });
        let arr=this.state.map;
        let col = arr.indexOf('p')%100;
        let row = parseInt(arr.indexOf('p')/100);
        if(col>20 && col<70) col = -(col-20)*12;
        else if(col<=20) col = 0;
        else if(col>=70) col = -601;
        if(row>20 && row<54) row = -(row-20)*12;
        else if(row<=20) row = 0;
        else if(row>=54) row = -432;
        var divStyle = {
                position: 'absolute',
                display: "flex",
                flexWrap: "wrap",
                width: "1200px",
                left: col + 'px',
                top: row + 'px'
            };
        if(this.result!=''){
            let classname="";
            if(this.result == 'You won. Congratulations!')  classname="alert alert-success";
            else  classname="alert alert-danger";
             this.alertt=(
                <div className={classname} role="alert">
                    {this.result}
                </div>
            );
                $('.alert').fadeTo(500, 1);;
             setTimeout(function() {
                $('.alert').fadeTo(1800, 0).slideUp(200);}, 2000);
            this.result='';
        }
        return(
            <div>
                <nav>React Roguelike<br/><span>Kill the boss in dungeon 4</span><hr/></nav>
                <div className="containerr">
                    <div className="all" tabIndex="1" style={divStyle} onKeyDown={event => this.timetoplay(event)}>
                        {mymap}
                    </div>
                </div>
                {alert}
                <div className="items">
                    Health: {this.health} &nbsp;
                    Weapon: {this.weapon[this.weap]} &nbsp;
                    Attack: {this.Attack} &nbsp;
                    Level: {this.Level} &nbsp;
                    NextLevel : {this.Next } &nbsp;
                    Dungeon:  {this.Dungeon}
                    {this.alertt}
                </div>
                <div className="guide">
                    <div className="cont"><div className="ingredient"></div> &nbsp;:&nbsp; for more health.</div>
                    <div className="cont"><div className="weapon"></div> &nbsp;:&nbsp; for a better weapon ( a better attack ). </div>
                    <div className="cont"><div className="monster"></div> &nbsp;:&nbsp; enemies.</div>
                    <div className="cont"><div className="dungeon"></div> &nbsp;:&nbsp; to discover a new dungeon.</div>
                    <div>☛ When you beat an enemy, the enemy goes away and you get XP, which eventually increases your level.</div>
                    <div>☛ When you fight an enemy, you take turns damaging each other until one of you loses.</div>
                    <div>☛ You do damage based off of your level and your weapon. The enemy does damage based off of its level.</div>
                    <div>☛ When you find and beat the boss, you win.</div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));

