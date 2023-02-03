
//exercice 1
// Qst 1
function multiple(a,b){
    let som=0;
    for(let i=0;i<50;i++){
        if(a%i == 0){
            som+=i;
        }
    }
    for(let i=0;i<50;i++){
        if(b%i == 0){
            som+=i;
        }
    }
   console.log(som);
}

multiple(5,9);
// QST 2
let tab = [1,2,5,3,8,9];

function check(tab){
    let p = [];
    let im =[];
    for(i=0;i<tab.length;i++){
        if(tab[i]%2 == 0){
            p.push(tab[i]);
        }else{
            im.push(tab[i]);
        }
    }
    console.log('pair : ',p,' impaire : ',im);
}

check(tab);

//------------------------------------
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
function Livre(id,titre,prix,chapitres){
    this.id=id;
    this.titre=titre;
    this.prix=prix;
    this.chapitres=chapitres;
}
Livre.prototype.sauterLongsChapitres = function(){
    let tab = [];
    for(i=0;i<this.chapitres.length;i++){

        if(this.chapitres[i].nombre_page<100){

            tab.push(this.chapitres[i]);
        }
    }
    console.log(tab);
}
Livre.prototype.trierChapitres = function(arg){
    if(arg=="position"){
        this.chapitres.sort(function comparParPos(p,n){
            if(p.position>n.position){
                return -1;
            }else if(p.position<n.position){
                return 1;
            }else{
                return 0;
            }
        });
    }else{
        this.chapitres.sort(function comparParNmp(p,n){
            if(p.nombre_page>n.nombre_page){
                return -1;
            }else if(p.nombre_page<n.nombre_page){
                return 1;
            }else{
                return 0;
            }
        });
    }
    console.log(this.chapitres);
}

let livre1 = new Livre(12,'livre 1',2500,[new chapitre('s1',200,2),new chapitre('s2',12,5),new chapitre('s3',90,3)]);
livre1.trierChapitres("nombre_page");