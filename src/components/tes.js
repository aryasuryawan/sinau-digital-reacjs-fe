	var CardComp = function (props) {  
   var listData = props.arrydata.filter(function (data) {  
     if (props.group === '') {  
       return data;  
     } else {  
       return data.group === props.group;  
     }  
   }).map(function (data) {  
     return <div className="card-label" key={data.id}>{data.Nama}</div>  
   });  
   return (  
     <div>  
       <p>  
         Anda Memilih List {props.group}  
       </p>  
       { listData}  
     </div>  
   );  
 }  