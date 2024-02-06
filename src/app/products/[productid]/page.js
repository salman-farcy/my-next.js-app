

const DynamicPage = ({ params, searchParams }) => {
         console.log(searchParams);



     return (
          <div>
               <h1>This is dynamic Page : {params.productid}</h1>
               <h2>This is query params: {searchParams.chatagory}</h2>
               <h3>This is query params: {searchParams.price}</h3>
          </div>
     );
};

export default DynamicPage;