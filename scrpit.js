//qst 1
function multiple(a,b){
 let som=0;

 for(i=1;i<50;i++)
        if(i%a==0 && i%b==0){
                som=som+i;
        }
        console.log(som);
}

multiple(5,3);

//qst 2

let t = [2,4,3,6,3,7];

function comp(tab){
    let p =[];
    let im =[];
    for(i=0;i<tab.length;i++){
        if(tab[i]%2 == 0){
            p.push(tab[i]);
        }else{
            im.push(tab[i]);
        }
    }
    console.log('paire : ',p,' impair : ',im);

}
comp(t);

//exercice 2

function chapitre(nom,nombre_page,position){
    this.nom=nom;
    this.nombre_page=nombre_page;
    this.position=position;
}
chapitre.prototype.chapitreLong = function(){
    if(this.nombre_page>100){
        return true;
    }else{
        return false;
    }

}
function livre(id,titre,prix,chapitres){
    this.id=id;
    this.titre=titre;
    this.prix=prix;
    this.chapitres=chapitres;
}
livre.prototype.sauterLongsChapitres =function(){
    let t =[];
    for (let i = 0; i < this.chapitres.length; i++) {
        if(this.chapitres[i].nombre_page<100){
            t.push(this.chapitres[i])
        }
        
    }
    return t;
}
livre.prototype.trierChapitres  =function(prob){
    this.chapitres.sort(
        function comparPar(p,n){
            if(p[prob]>n[prob]){
                return -1;
            }else if(p[prob]<n[prob]){
                return 1;
            }else{
                return 0;
            }
        }
    );
    return this.chapitres;
}


let livre1 = new livre(12,'livre 1',34,[new chapitre("S1",30,5),
                                        new chapitre("S2",40,6),new chapitre("S3",105,3),
                                        new chapitre("S4",56,2) ]);

console.log(livre1.trierChapitres('nombre_page'));
