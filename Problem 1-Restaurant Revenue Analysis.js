function restaurant(revenue){
    console.log("Total revenue:")
    revenue.forEach(ele=>{
      const total = ele.orders.reduce((acc, curr)=>acc+curr,0);
      console.log("    ",ele.name,": INR",total)
    });
    
    let max = 0, name;
    revenue.forEach(ele=>{
      const total = ele.orders.reduce((acc, curr)=>acc+curr,0);
      if(total >= max){
       max = total
       name = ele.name
      }
    });
    console.log("Highest revenue restaurant:",name,"(INR",max,")")
    
    let low = []
    revenue.forEach(ele=>{
      const total = ele.orders.reduce((acc, curr)=>acc+curr,0);
      if(total < max){
       low.push(ele.name)
      }
    });
    console.log("Low revenue restaurants:",low)
  }
  
  let revenue = [
      { name: "Spice Garden", location: "Mumbai", orders: [400, 600, 800, 1200] },
      { name: "Burger Hub", location: "Delhi", orders: [500, 700, 650, 550] },
      { name: "Pasta Palace", location: "Bangalore", orders: [200, 300, 150, 250] }
    ]
  
  restaurant(revenue)
  
  