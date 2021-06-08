
  export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToTripsPage = (history) => {
    history.push("/tripspage");
  };
  
  export const goToAppFormPage = (history) =>{
      history.push("/appform/:id/:name")
  }

  export const goToAuthenticationPage = (history) =>{
    history.push("/login")
  }
 
  export const goBackToTrips = (history) =>{
      history.goBack("/tripspage")
  }