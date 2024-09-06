
export async function fetchCars() {
  const headers ={
    'x-rapidapi-key': '27b1f4b8a0msha9f07dedcc1171bp140ae9jsn4517363e6c28',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
const response = await fetch ( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' ,
  {headers: headers,}
);

 const result = await response.json();
 return result;
}