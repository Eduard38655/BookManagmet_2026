function ViewRecipeOrder() {

    function ViewRecipe() { }


  return (
      <div>
          <button onClick={() => ViewRecipe()}  >
              <i className="fa-solid fa-eye"></i>
          </button>


          <button>
              <i className="fa-solid fa-print"></i>
          </button>
      </div>
  );
}

export default ViewRecipeOrder;