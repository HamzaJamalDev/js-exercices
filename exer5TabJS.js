function exer5(tab=[],n=2){
			let t=[];
			let s=tab.length/2;
			for(let d=0;d<s;d++){               
				for(let i=1;i<tab.length;i++){
				if(d>i){continue;}
				let j=1;
				let m = tab[d];
				if(i==d){continue;}				
				m+=" " +tab[i] +"\t";
				j++;
				if(j==n){
					console.log(m);
					continue;
				}	
				if((d+n)>=i){continue;}				
			}		
			}			
		}
		let t=[1,2,3];
		let n=2;
		exer5(t,n);